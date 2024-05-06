
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
const AdminLogin=()=>{
  
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    const givePermit=async()=>{
        console.warn(name,email,password);
        let result = await fetch('http://localhost:5000/adminlogin',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.name){
           localStorage.setItem("admin",JSON.stringify(result));
           navigate('/addhospitals');
        }else{
            alert("Please enter correct details.")
        }
    }

    
    return(
          <>
            
            <div className="text-center font-bold text-3xl p-6">
            Log in
            </div>
            <div className="text-center flex flex-col items-center p-1  ">
           
            <input  className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg" value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text" placeholder="Enter your name"/>


            <input  className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="text" placeholder="Enter your email address"/>
        
        
            <input className="p-2 m-4 w-[25%]  border border-cyan-500 rounded-lg" value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="text" placeholder="Enter the password"/>
            <button  onClick={givePermit} className="p-3 m-10 bg-blue-500"
            >Admin LogIn</button>
        </div>
        </>
    )
};


export default AdminLogin;