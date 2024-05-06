import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
const ButtonList=()=>{

    return(
     <div className="mx-auto max-w-screen-lg   underline decoration-black" >
           
     <ul className="flex flex-col md:flex-row justify-center mt-4 font-semibold text-2xl">
     <li className="mt-4 md:mt-0 md:ml-6">
    
       <Link to="/home"   className="underline hover:no-underline focus:no-underline focus:outline-none">
       <Typography 
       Typography variant="h10"
                      fontFamily={'Roboto'}
                      noWrap component='div' sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                      Home
                      </Typography> 
                      </Link>
                      </li>
         <li className="mt-4 md:mt-0 md:ml-6">
         <Link to="/about-us" className="underline hover:no-underline focus:no-underline focus:outline-none">
         <Typography 
         Typography variant="h10"
                        fontFamily={'Roboto'}
                        noWrap component='div' sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        About Us
                        </Typography> 
         </Link>
     </li>
     <li className="mt-4 md:mt-0 md:ml-6">
         <Link to="/center-excellence" className="underline hover:no-underline focus:no-underline focus:outline-none">
             Center Excellence
         </Link>
     </li>
     <li className="mt-4 md:mt-0 md:ml-6">
         <Link to="/hospitals" className="underline hover:no-underline focus:no-underline focus:outline-none">
             Hospitals
         </Link>
     </li>
     <li className="mt-4 md:mt-0 md:ml-6">
         <Link to="/adminlogin" className="underline hover:no-underline focus:no-underline focus:outline-none">
            Admin
         </Link>
     </li>
 </ul>

     </div>

    )
}
export default ButtonList;