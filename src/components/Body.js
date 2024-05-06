
import Sidebar from "./Sidebar"
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";


export const Body=()=> {
  return (
    <div className="flex bg-green-100 ">
         <Sidebar/>
         <div className="flex-col">
         <FirstContainer className="md:w-1/3"/>
          
         <SecondContainer className="md:w-1/3"/>
         <ThirdContainer className="md:w-1/3"/>
        
         </div>
    </div>
  );
};






