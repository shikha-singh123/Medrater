import { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UpdateHospital from "./UpdateHospital";
const Hospitals=()=>{
     
    const {id}=useParams();
    const[hospitals,setHospitals]=useState([]);
    const[staffs,setStaffs]=useState('');       
   
     const navigate=useNavigate();

    useEffect(()=>{
        getHospitals();
    },[]);

    const getHospitals=async()=>{
        let result=await fetch("http://localhost:5000/hospitalsnames",{
        headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
        });
        result=await result.json();

        setHospitals(result);
    }

   

    return(
        <>
        <h1 className="text-center text-2xl font-bold mb-4">Hospital List</h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        { hospitals.length>0 ? hospitals.map((item) => (
            <div key={item._id} className="border border-gray-300 rounded-md shadow-md p-4">
            {/**<p><span className="font-bold"></span> {index+1}</p>*/}
                <h2 className="text-lg font-bold mb-2">{item.hospital_name}</h2>
                <p><span className="font-bold">Category:</span> {item.category}</p>
                <p><span className="font-bold">Specialization:</span> {item.specialization}</p>
                
                <p><span className="font-bold">Rating:</span><input type="number" value={staffs}
                onChange={(e)=>setStaffs(e.target.value)}/> </p>
                <p><span className="font-bold">Location:</span> {item.location}</p>
                <p><span className="font-bold">Availability:</span> {item.availability}</p>
                <p><span className="font-bold">Contact Number:</span> {item.contact_number}</p>
                <img src={item.img} alt={item.hospital_name} className="mt-2 h-32 w-full object-cover" />
                <Link
                className="font-bold text-xl underline text-blue-600"
                to='/facilities'>Facilities provided by hospitals</Link>
                
                </div>
        )
        )
        :<h1>No result found.</h1>
    
    }

        </div>
         
        </>
    );
};
export default Hospitals;