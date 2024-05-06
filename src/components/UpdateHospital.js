
import React, { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { hospitalName,hospitalLocation,hospitalSpecialisation,
    hospitalStaffs,hospitalRooms,hospitalBeds,hospitalLabs,
    hospitalDoctors ,hospitalImage} from "../utils/HospitalSlice";
const UpdateHospital=()=>{
    const dispatch = useDispatch();
       const {id}=useParams();
      const[name,setName]=useState('');
      const[location,setLocation]=useState('');       
      const[specialisation,setSpecialisation]=useState('');       
      const[staffs,setStaffs]=useState('');       
      const[rooms,setRooms]=useState('');       
      const[beds,setBeds]=useState('');       
      const[labs,setLabs]=useState('');       
      const[doctors,setDoctors]=useState('');       
      const[image,setImage]=useState('');       
      const[error,setError]=useState(false);
      const params=useParams();
      const navigate=useNavigate();
      
      useEffect(() => {
        // Fetch hospital details when the component mounts
        
        fetchHospitalDetails();
    }, [id]);

     const fetchHospitalDetails=async()=>{
        const response = await fetch(`http://localhost:5000/addhospitals/${id}`);
        const data = await response.json();
        dispatch(hospitalName(data.name));
        dispatch(hospitalLocation(data.location));
        dispatch(hospitalSpecialisation(data.specialisation));
        dispatch(hospitalStaffs(data.staffs));
        dispatch(hospitalRooms(data.rooms));
        dispatch(hospitalBeds(data.beds));
        dispatch(hospitalLabs(data.labs));
        dispatch(hospitalDoctors(data.doctors));
        dispatch(hospitalImage(data.image));


        setName(data.name);
        setLocation(data.location);
        setSpecialisation(data.specialisation);
        
    
};
const updateHospital = async () => {
  try {
      const result = await fetch(`http://localhost:5000/addhospitals/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
              name,
              location,
              specialisation,
              staffs,
              rooms,
              beds,
              labs,
              doctors,
              image
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!result.ok) {
          throw new Error("Failed to update hospital");
      }

      const updatedHospital = await result.json();
      console.log("Updated hospital:", updatedHospital);
      
      navigate(`/facilities`);

  } catch (error) {
      console.error("Error updating hospital:", error.message);
      setError(error.message);
    }
};




       return(
          <div className="text-center flex flex-col items-center p-1">
         <h1 className="font-bold text-2xl"> Update Hospital</h1>
          <input
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter the name"
          value={name}
          onChange={(e)=>setName(e.target.value)}/>

          {error && <span className="text-red-500">{error}</span>}

          <input 
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter the location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}/>

          {error && <span className="text-red-500">{error}</span>}

          <input 
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter the beds"
          value={specialisation}
          onChange={(e)=>setSpecialisation(e.target.value)}/>

          {error && <span className="text-red-500">{error}</span>}


          <input
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter staffs"
          value={staffs}
          onChange={(e) => setStaffs(e.target.value)} />

          {error && <span className="text-red-500">{error}</span>}


          <input
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter rooms"
          value={rooms}
          onChange={(e) =>setRooms (e.target.value)} />
         
          {error && <span className="text-red-500">{error}</span>}

          
          <input
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter bed"
          value={beds}
          onChange={(e) =>setBeds (e.target.value)} />
          
          {error && <span className="text-red-500">{error}</span>}
          <input
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter labs"
          value={labs}
          onChange={(e) =>setLabs (e.target.value)} />
          
          {error && <span className="text-red-500">{error}</span>}
          <input
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter doctor availability."
          value={doctors}
          onChange={(e) => setDoctors(e.target.value)} />
          <input
          className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
          type="text" placeholder="Enter image."
          value={image}
          onChange={(e) => setImage(e.target.value)} />

          {error && <span className="text-red-500">{error}</span>}

         <button className="p-3 m-10 bg-blue-500" onClick={updateHospital}>Update Hospital</button>
       </div>
       )
    
    
}

export default UpdateHospital;

