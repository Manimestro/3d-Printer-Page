import React from 'react'
import { useDispatch } from 'react-redux';
import {setSelectedinfill , useProductData} from './slices/productdataSlice'

import { Progress } from "@material-tailwind/react";
export default function Infill() {

  const dispatch= useDispatch()
  const infill= useProductData().selectedinfill



  return (
    <>
    <div className='w-11/12 mx-auto  cursor-pointer  rounded-md  mb-10 mt-8 ' >
    <VolumeControl handleChange={(event) => {
 console.log(event.target.value,"final infill")
    dispatch(setSelectedinfill(event.target.value))
  }} percent={infill}
 />
  
    </div>
    <div className=' w-9/12 mx-auto'>
    <Progress value={Number(infill)} label=" " />
    </div>
    </>
  )
}



const VolumeControl = ({ handleChange ,percent}) => {
  return (
    <div >
   
      <input
        className='w-full cursor-pointer'
        type="range"
        id="volume"
        name="volume"
        min="10"
        max="100"
        step="10"
        value={percent}
        onChange={(e)=>{
          handleChange(e)
        }}
      />
      
    </div>
  );
};





