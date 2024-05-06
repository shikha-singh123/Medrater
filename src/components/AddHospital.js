import React, { useState, useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom"
import {arr,arr2,arr3} from '../utils/data';
const AddHospital = () => {
    const [hospitalNames, setHospitalNames] = useState('');
    const [location, setLocation] = useState('');
    const [specialisation, setSpecialisation] = useState('');
    const [availability, setAvailability] = useState('');
    const [error, setError] = useState(false);
    const navigate=useNavigate();

   
    const handleChangeHospitalName = (e) => {
        setHospitalNames(e.target.value);
    };

    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleChangeSpecialisation = (e) => {
        setSpecialisation(e.target.value);
    };

    const handleChangeAvailability = (e) => {
        setAvailability(e.target.value);
    };


    const addHospital = async () => {
        if (!hospitalNames || !location || !specialisation || !availability) {
            setError(true);
            return false;
        }

        const adminId = JSON.parse(localStorage.getItem('admin'))?._id;
        const requestBody = {
            name:hospitalNames,
            location,
            specialisation,
            available:availability,
            adminId
        };
      
        try {
            const response = await fetch("http://localhost:5000/addhospitals", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            const result = await response.json();
            console.log(result);

            // Redirect to the update page with the hospital ID
            navigate(`/updatehospitals/${result._id}`);

        } catch (error) {
            console.error("Error adding hospital:", error);
            alert("Error adding hospital. Please try again later.");
        }
           


        };
    return (
        <>
        <div className="text-center flex flex-col items-center p-1">
       <h1> Add Hospital</h1>

            
        <select
            className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
            
            value={hospitalNames}
            onChange={handleChangeHospitalName}>
            <option  value="Select a name">Select name</option>
            {arr.map((ele,idx)=>{
                   return (<option key={idx} value={ele[1]}>{ele[1]}</option>)
            })}
           
                </select>
        <select
            className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
            
            value={location}
            onChange={handleChangeLocation}>
            <option value="Select a location">Select location</option>
            {arr2.map((ele,idx)=>{
                return (<option key={idx} value={ele[1]}>{ele[1]}</option>)
            })}             
            </select>
        <select
            className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
            
            value={specialisation}
            onChange={handleChangeSpecialisation }>
            <option value="select category">Select category</option>
            {arr3.map((ele,idx)=>{
                 return (<option key={idx} value={ele[1]}>{ele[1]}</option>)
            })}
                </select>
        <select
            className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg"
            
            value={availability}
            onChange={handleChangeAvailability }>
            <option value="available">Select availability</option>
            <option >Available</option>
            </select>


            
 <button className="p-3 m-10 bg-blue-500" onClick={addHospital}>Add Hospital</button>

        </div>
        </>
    );
};

export default AddHospital;
