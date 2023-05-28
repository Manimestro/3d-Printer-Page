import React from 'react'
import { Transition } from '@headlessui/react';
import Boop from './BoopEffect'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import CloseIcon from '@mui/icons-material/Close';
const Model= function({count,blur,catArray,catSetter,isShow}) {
  
  return (
    <Transition
      show={isShow}
      enter="transition duration-500 ease-in-out transform"
      enterFrom="opacity-0 translate-y-[100%]"
      enterTo="opacity-100 translate-y-0"
      leave="transition duration-500 ease-in-out transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-[100%]"
    >
    
    <div className='bg-white h-[545px]'>
      <div className='w-9/12 mx-auto'>
    <div className=' flex flex-row justify-between'>
      <div className='pt-14 '>
      <span className='text-2xl  font-bold  '> Components </span>
      <span className='text-xl  font-bold  ml-2 text-blue-gray-300'> {count} </span>
      </div>
      <div type="button" onClick={()=>{
        blur()
      }} className=' w-fit  mr-0 cursor-pointer pt-14' >
      
      <Boop rotation={40} timing={200} type={"turn"}>
        <CloseIcon fontSize='large' />
  </Boop>
  </div>
    </div>
    <div className='flex flex-col my-10'>
     
        {
          catArray.map((ele,i)=>
          <div  type="submit" onClick={()=>{
            catSetter(old=>i)
            blur()
          }} className='flex flex-row  items-center mr-3 mb-5 cursor-pointer'>
            <span><FiberManualRecordRoundedIcon fontSize='string'/></span>
            <span className='mt-1 ml-2 font-medium'>{ele}</span>
          </div>
          )
        }    
    </div>
    </div>
    </div>
    </Transition>
  )
}

export default Model

    
