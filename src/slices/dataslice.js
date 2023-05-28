import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
const dataslice=createSlice({
    name:"dataslice",
    initialState:{email:"",model:"",formettedModel:""},
    reducers:{
        updateEmail (state,action){
            state.email=action.payload
        },
        updateModel (state,action){
            state.model=action.payload
        },
        updateformettedModel (state,action){
            state.formettedModel=action.payload
        }

    }
})
export const {updateEmail,updateModel,updateformettedModel}= dataslice.actions
const dataReducer=dataslice.reducer
export const useModelData=()=>useSelector(state=>state.dataSlice)

export  default dataReducer