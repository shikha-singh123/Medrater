

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/hospitals');
        }
    },[]);
    const handleLogin=async()=>{
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        console.warn(result);

        if(result.auth){
             localStorage.setItem('user',JSON.stringify(result.user));
             localStorage.setItem('token',JSON.stringify(result.auth));
             navigate('/hospitals');

        }else{
            alert('please enter correct details.');
        }
    }
    return(
        
        
            <>
            
            <div className="text-center font-bold text-3xl p-6">
            Log in
            </div>
            <div className="text-center flex flex-col items-center p-1  ">
           
            <input  className="p-2 m-4 w-[25%] border border-cyan-500 rounded-lg" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="text" placeholder="Enter your email address"/>
        
        
            <input className="p-2 m-4 w-[25%]  border border-cyan-500 rounded-lg" value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="text" placeholder="Enter the password"/>
            <button className="p-3 m-10 bg-blue-500"
            onClick={handleLogin}
            >Log In</button>
        </div>
        </>
    )
};
export default Login;