
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux';
const cssSlice=createSlice({
    name:"cssSlice",
    initialState:{blur:false,
    modelSizeOnHome:{width:400,height:200},
    isEdted:false }
    ,
    reducers:{
        setModelSizeOnHome:(state,action) =>{
            state.modelSizeOnHome=action.payload
        },
        backDropBlur:(state,action)=>{
            state.blur=action.payload
        },
        setEditedStatus:(state,action)=>{
            state.isEdted=action.payload
        }
    }
})
export default cssSlice.reducer
console.log("css",cssSlice.actions)
export const  {setModelSizeOnHome, backDropBlur,setEditedStatus} = cssSlice.actions
export const useDisplay=()=>useSelector(state=>state.cssSlice)
