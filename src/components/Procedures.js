const Procedures=()=>{
  return(
       <div className="grid grid-flow-col relative m-2 ">

       <div className="col-span-10  rounded-l-lg  border border-stone-300">
       <h1 className="text-2xl font-bold m-10">Procedures</h1>
       <ul className="text-xl m-3 font-serif">How would you go?
         <li>Step 1. Login/Signup 👍 </li>
         <li>Step 2. Check Bed availability 🛏️</li>
         <li>Step 3.Check the ratings ⭐ </li>
         <li>Step 4. View Ratings and comments 🖊️</li>
         <li>Step 5. Check Waiting Time ⏲️</li>
       </ul>
       </div>
       <img className="col-span-2 w-[90%]" src=" https://img.freepik.com/premium-photo/cartoon-style-doctor-with-clean-background-male-medicine-expert-positive-smile-worker_146482-13747.jpg"
       alt="expert img"/>
       <div className="absolute opacity-200 flex right-20  top-7 bottom-12">
        <h2 className="text-3xl font-bold text-gray-300 "style={{opacity:0.9}}>Looking for an expert.Find a doctor</h2>
        
       </div>
       </div>

  )

};

export default Procedures;