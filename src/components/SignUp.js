
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[patient,setPatient]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
         const auth=localStorage.getItem('user');
         if(auth){
            navigate('/hospitals')
         }
    },[]);
    const buttonHandle=async()=>{
        console.log(name,email,password,patient);
        let result=await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password,patient}),
            headers:{
                'Content-Type':"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
        });
         result=await result.json();
         
          console.log(result);
         localStorage.setItem("user",JSON.stringify(result.result));
         localStorage.setItem("token",JSON.stringify(result.auth));
      
        //  if(result){
            navigate('/hospitals');
        //  }
    }

return(
    <>
    <div className="text-center font-bold text-3xl p-6">
    Register
    </div>
    <div className="text-center flex flex-col items-center p-1  ">
    <input className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg" value={name}
    onChange={(e)=>setName(e.target.value)}
    type="text" placeholder="Enter your Full Name"/>

    <input  className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg" value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="text" placeholder="Enter your email address"/>


    <input className="p-2 m-4 w-[25%]  border border-cyan-500 rounded-lg" value={password}
    onChange={(e)=>setPassword(e.target.value)}
    type="text" placeholder="Enter the password"/>


    <input className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg" value={patient}
    onChange={(e)=>setPatient(e.target.value)}
    type="text" placeholder="Enter the patient name"/>

    <button className="p-3 m-10 bg-blue-500"
    onClick={buttonHandle}
    >Sign Up</button>
    </div>
    </>

)    
}
export default Signup;