import './App.css';
import Header from "./components/Header";
import {Body} from './components/Body';
import CenterExcellence from "./components/CenterExcellence";
import Hospitals from "./components/Hospitals";
import AboutUs from "./components/AboutUs";
import {Routes,Route } from 'react-router-dom';
import Error from './components/Error'
import Signup from './components/SignUp';
import LogIn from './components/LogIn';
import AdminLogin from './components/AdminLogin';
import AddHospital from './components/AddHospital'
import UpdateHospital from './components/UpdateHospital'
import Facilities from './components/Facilities';
import { Provider } from 'react-redux'
import appStore from './utils/appStore';
export const App=()=> {
  return (
    <Provider store={appStore}>
    <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Body />}
        errorElement={<Error/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/centerexcellence" element={<CenterExcellence />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/addhospitals" element={<AddHospital/>}/>
        <Route path="/updatehospitals/:id" element={<UpdateHospital/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
      </Routes>
    </div>
     </Provider>
  );
};
