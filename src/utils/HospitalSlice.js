

import {createSlice} from "@reduxjs/toolkit";
const HospitalSlice=createSlice({
    name:'hospital',
    initialState:{
        name: '',
        location: '',
        specialisation: '',
        staffs: '',
        rooms: '',
        beds: '',
        labs: '',
        doctors: '',
        image:''
    },
    reducers:{
        hospitalName:(state,action)=>{
            state.name=action.payload;
        },
        hospitalLocation:(state,action)=>{
            state.location=action.payload;
        },
        hospitalSpecialisation:(state,action)=>{
            state.specialisation=action.payload;
        },
        
        hospitalStaffs:(state,action)=>{
            state.staffs=action.payload;
        },
        hospitalRooms:(state,action)=>{
            state.rooms=action.payload;
        },
        hospitalBeds:(state,action)=>{
            state.beds=action.payload;
        },
        hospitalLabs:(state,action)=>{
            state.labs=action.payload;
        },
        hospitalDoctors:(state,action)=>{
            state.doctors=action.payload;
        },
        hospitalImage:(state,action)=>{
            state.image=action.payload;
        },
    }
});
export const {
    hospitalName,hospitalLocation, hospitalSpecialisation,hospitalAvailable,
    hospitalStaffs, hospitalRooms, hospitalBeds,
    hospitalLabs, hospitalDoctors,hospitalImage} = HospitalSlice.actions;

   export default HospitalSlice.reducer;