import Procedures from "./Procedures";
import {useState,useEffect} from "react";
import { hospList } from "../utils/mockData";
import { LOGO_URL, WOMAN_IMG } from "../utils/constants";
const HospitalCard=(props)=>{

 const{hospData}=props;

  return(
    <div className="border border-black  rounded-lg  m-2 p-4
    flex-shrink-0 w-80  text-red-900 font-sans md:font-sans
    ">
     <h2>Hospital Information</h2>

    
    <img 
    className="transform translate-y-0 "
    src={hospData.img} alt="Hospital Image" />
     <p  className="font-bold text-2xl">{hospData.hospital_name}</p>
     <p className="text-xl">{hospData.category}</p>
     <p>{hospData.specialization}</p>
     <p>{hospData.rating}</p>
     <p>{hospData.location}</p>
     <p>{hospData.years_in_healthcare}</p>
     <p>{hospData.contact_number}</p>
     
     </div>
     

)
}




const SecondContainer=()=>{
  
   const buttonName="  Get started Now ▶️"
const [handleButton,setHandleButton]=useState(buttonName);

   return (
      <>
       <div className=" object-right">
       <Procedures/>
     
       <div className="grid grid-flow-col">
       <img  className="" src={WOMAN_IMG} alt="woman_img"/>
       <div className="flex">
       <h2 className="col-span-7 font-bold text-5xl">MedRater
       
       </h2>
       <img className="h-20 ml-50" src={LOGO_URL}
      alt="logo"/>
      <div className="mt-24 mr-34 p-34">
      <p className="mt-4 text-lg">Medrater app is a revolutionary platform that empowers users to make informed decisions about their healthcare providers.
       With Medrater, you can easily access ratings and reviews of hospitals, clinics, and doctors, helping you 
       choose the best healthcare options for your needs.MedRater is a platform that captures the power of users' 
       life experiences. It's similar to speaking with thousands of other patients about how they felt and the 
       views of clinics, hospitals, and doctors. These insightful advice and support helps you in picking choices 
       you can be aware of.  </p>
           <p className="mt-4 text-lg"> MedRater is an innovation in the field of healthcare, not simply another website.
             Discover, rate, and review healthcare services effortlessly with MedRater. Get insights on hospitals and
              doctors, check bed availability, and read reviews. 
              your trusted adviser while making decisions about your health.
             Plan your visits wisely and share your experiences to 
             help others make informed decisions.</p>
     
          
             <div className=" font-bold text-2xl m-1 p-16 rounded-lg"
             >
             <button 
              onClick={()=>

                  setHandleButton(!handleButton)}
                className={handleButton ? "bg-gray-400" : "bg-emerald-200"}
                  >
                  {buttonName}
         
              
               </button>
               </div>
             </div>
             </div>
      </div>
       </div>
       <div className="flex bg-gray-200 flex-wrap pl-40  ">
       
        { hospList.map((hospital)=>(

            <HospitalCard key={hospital.hospital_id}
            hospData={hospital}
            />
            ))}
    
       </div>
       </>
       );
    };
export default SecondContainer;