import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hospitalName, hospitalLocation ,hospitalSpecialisation,hospitalStaffs,
hospitalRooms,hospitalBeds,hospitalLabs,hospitalDoctors,hospitalImage}
 from "../utils/HospitalSlice"; 

const Facilities = () => {
    const [hospitals, setHospitals] = useState([]);
    const dispatch = useDispatch();
    const name = useSelector(state => state.hospital.name); // Accessing name from Redux store
    const location = useSelector(state => state.hospital.location); // Accessing location from Redux store
    const specialisation = useSelector(state => state.hospital.specialisation); // Accessing location from Redux store
    const staffs = useSelector(state => state.hospital.staffs); // Accessing location from Redux store
    const rooms = useSelector(state => state.hospital.rooms); // Accessing location from Redux store
    const beds = useSelector(state => state.hospital.beds); // Accessing location from Redux store
    const labs = useSelector(state => state.hospital.labs); // Accessing location from Redux store
    const doctors = useSelector(state => state.hospital.doctors); // Accessing location from Redux store
    const image = useSelector(state => state.hospital.image); // Accessing location from Redux store

    useEffect(() => {
        getAdminUpdateInfo();
    }, []);

    const getAdminUpdateInfo = async () => {
        try {
            const response = await fetch("http://localhost:5000/addhospitals")
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setHospitals(data);

            const totalBeds = data.reduce((acc, curr) => acc + curr.beds, 0);
            const totalRooms = data.reduce((acc, curr) => acc + curr.rooms, 0);

            dispatch(hospitalBeds(totalBeds));
            dispatch(hospitalRooms(totalRooms));

            data.forEach(hospital => {
                dispatch(hospitalName(hospital.name));
                dispatch(hospitalLocation(hospital.location));
                dispatch(hospitalLocation(hospital.location));
                dispatch(hospitalSpecialisation(hospital.specialisation));
                dispatch(hospitalStaffs(hospital.staffs));
                dispatch(hospitalRooms(hospital.rooms));
                dispatch(hospitalBeds(hospital.beds));
                dispatch(hospitalLabs(hospital.labs));
                dispatch(hospitalDoctors(hospital.doctors));
                dispatch(hospitalImage(hospital.image));
                // Dispatch other actions as needed for other fields
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleBookAppointment = async () => {
     

            // If booking is successful, update the availability of beds and rooms in Redux store
            dispatch(hospitalBeds(beds - 1));
            dispatch(hospitalRooms(rooms - 1));
       
    };
    return (
        <div className="product-list">
            <h3> Hospital List</h3>
            <input className="search-button" type="text" placeholder="Search button" />
            <table className="w-[100%] border border-blue-600 justify-around">
            <thead>
            <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Specialization</th>
            <th>Staffs</th>
            <th>Rooms</th>
            <th>Labs</th>
            <th>Beds</th>
            <th>Doctors</th>
            <th>image</th>
            </tr>
            </thead>
   
            <tbody >
           <td> {name}</td>
              <td>{location}</td>
                <td>{specialisation}</td>
                <td>{staffs}</td>
                <td>{rooms}</td>
                <td>{beds}</td>
                <td>{labs}</td>
                <td>{doctors}</td>
                <td >
                <img src={image} alt="Hospital" style={{ width: "100px", height: "100px" }} />
            
                </td>
                <button onClick={handleBookAppointment}>Book Appointment</button>
            </tbody>
       </table>

        </div>
    );
};

export default Facilities;
