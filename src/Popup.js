import React,{ useState ,useRef ,useEffect} from 'react';
import Boop from './BoopEffect'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Subpopup  from './Subpopup'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import MenuIcon from '@mui/icons-material/Menu';

import {useProductData ,setSelectedColor
  ,setSelectedMaterial
  } from './slices/productdataSlice'

import {backDropBlur , setEditedStatus} from './slices/cssSlice'
import { useModelData } from './slices/dataslice';
import { useDispatch } from 'react-redux';
import STLAPP from './scrolleffect';
import Printer from './Printer'

import Infill from './Infill';

export default function PopUp(){
  const  ModelData=useModelData().model
  const [startIndex,setStartIndex]=useState(0)
  const [divWidth,setDivWidth]=useState({width:100,height:100})
 
  console.log(window.innerWidth , "pop")
  const containerRef = useRef(null);

  
  useEffect(() => {

    const container = containerRef.current;
    const handleResize = () => {
      setDivWidth({height:container.clientHeight,width:container.offsetWidth})
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  useEffect(() => {
    const container = containerRef.current;
    const handleResize = () => {
      setDivWidth({height:container.clientHeight,width:container.offsetWidth})
    };
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

    
   const dispatch=useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const productData=useProductData()
  const catogiries=productData.type
  const [catogry,setCatogry]=useState(0)

  
  const subcatogrys=productData[catogiries[catogry]]
  const [subcatogry,setSubcatogry]=useState("ABS")

   
  const colors = productData[subcatogry]
  const [color , setcolor]=useState(0)

  useEffect((
  )=>{
    dispatch(setSelectedColor(colors[color]))
    dispatch(setSelectedMaterial(subcatogry))
  },[subcatogry,color,colors,dispatch])

  let increment
 if (window.innerWidth<=940){
     increment=2
  }
  else{
    increment=3
  }

  const visibleSubcatogrys=subcatogrys.slice(startIndex,startIndex+(increment))

  const firstDiv='bg-[#fafafa] h-[520px] '+ (isOpen && 'blur-sm')
  return <div className='blur-0 flex flex-col  '>
    <div className={firstDiv} >
      <div className=' flex flex-row  justify-between mt-7'>
      
      {/* <Tooltip content="To save model for future" placement="bottom-start">  
      <Button size="sm"  className="ml-4 rounded-full flex items-center gap-2">
         Save
         <BookmarkIcon strokeWidth={2}  className="h-5 w-5" />
      </Button>
      </Tooltip> */}
    <button onClick={()=>{
      dispatch(backDropBlur(false))
      dispatch(setEditedStatus(true))
      
    }} className="mr-5 ml-auto bg-white  text-black font-bold py-1 px-4 rounded-3xl border-2 border-[#94a3b8] w-24 ">
      Done
    </button>
</div>
      <div ref={containerRef} className='mt-7 mx-auto w-10/12 '>
      <STLAPP colorData={ colors[color][1]} width={divWidth.width} img={ModelData}/>
      </div>
    </div>
    <div className='bg-white  h-[100px] z-0 '>
    <div className='lg:ml-12 xl:ml-16 mt-4 flex flex-row items-center justify-center'>
    <div className=' m-auto flex  flex-row w-[500px] justify-between'>
      <WestIcon className=' ml-6 cursor-pointer ' 
      onClick={()=>{
            if (catogry!==0){
              setCatogry(catogry=>catogry-1)
            }
            else{
              setCatogry(catogry=>catogiries.length-1)
            }
      }}/>
     <span className=''> {catogiries[catogry]}</span>
      <EastIcon className='mr-6 md:mr-0 cursor-pointer' onClick={()=>{
            if (catogry<catogiries.length-1){
              setCatogry(catogry=>catogry+1)
            }
            else{
              setCatogry(catogry=>0)
            }
      }}/>
    </div>
    <button onClick={()=>{
      handleOpen()
    }} className=" hidden  lg:inline-block items-center flex flex-row mr-5 bg-white  text-black  text-lg py-1 px-4 rounded-3xl border-2 border-[#e2e8f0] w-21 ">
      <MenuIcon className=' mr-1'/>
      Menu
    </button >
      </div>

   {catogry===0 && 
   
   <div className='text-center mt-5'>
   <Boop type={startIndex===0 ?"none":"goleft"}>
    <ArrowBackIosNewIcon  color={startIndex===0 ?"disabled":"black" }   className='mr-5 cursor-pointer' onClick={()=>{
    
     if (startIndex>0){
     setStartIndex(startIndex=>startIndex-1)
     setSubcatogry(subcatogrys[startIndex-1])
     }
  }} />
   </Boop>
    
      {visibleSubcatogrys.map((item,index)=> 

      {
        console.log(item)
        let focus
      if (subcatogry===item) { 
          focus="mr-5 bg-white text-black font-bold py-1 rounded-3xl border-2  w-40 border-[black] "
      }
      else{
        focus="mr-5 bg-white text-black font-bold py-1 rounded-3xl border-2  w-40 border-[#e2e8f0] "
      }
      
      return  <button key={"setSubcatogry"+index} className={focus}
      onClick={()=>{
          setcolor(0)
          setSubcatogry(item)
         
      }}>
      {item}
    </button >
       
})}
<Boop type={startIndex+increment===subcatogrys.length ?"none":"goRight" }>
  <ArrowForwardIosIcon color={startIndex+increment===subcatogrys.length ?"disabled":"black" } className='cursor-pointer' onClick={()=>{
    if (startIndex+increment<subcatogrys.length){
    setStartIndex(startIndex=>startIndex+1)
     setSubcatogry(subcatogrys[startIndex+1])
    }
  }}/>
  </Boop>
      </div>
}





{catogry===0 &&<div className='mb-14 mx-auto  w-6/12 grid grid-cols-7  mt-5'>

{colors.map((item,index)=>{
const [name,content]=item
const isSelected=(index===color)
return <div key={"color"+index} className='   flex  flex-col  place-items-center'>
<div onClick={()=>{
   setcolor(index)

}} className={isSelected ?'p-1 border-2 rounded-full border-[#e2e8f0]':'p-1 rounded-full mb-5 border-red-500'}>
<p className={"rounded-full w-6 h-6 cursor-pointer "} style={{background:content}} > </p>
</div>
<p className={isSelected ? ' mt-2 font-medium text-sm ':"hidden"}>{name}</p>
</div>
}
)}
</div>
}



<div className='w-full  lg:w-11/12  mx-auto mt-3'>{catogry===1 && <Printer/>}</div>


{catogry===2 && <div><Infill/></div>}
    </div>
    <div className='mt-[-400px] hidden z-50 lg:block'>
    <Subpopup
    isShow={isOpen}
    catSetter={(id)=>{
      setCatogry(id)
    }}  count={catogiries.length} catArray={catogiries} blur={()=>{
      handleClose(false)
    }}/>
    </div>
</div>
};
