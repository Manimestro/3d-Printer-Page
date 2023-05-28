import {useState ,useEffect,useRef}from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import {updateEmail,useModelData} from './slices/dataslice'
import {useDisplay} from './slices/cssSlice'
import DropBox from './DropBox'
import { backDropBlur,setModelSizeOnHome } from './slices/cssSlice';
import Report from './report'
export default function Header() {
  const isCustomized=useDisplay().isEdted
  const [customizeElert,setCustomizeElert]=useState(false)
  const [divWidth,setDivWidth]=useState(null)
  console.log(divWidth)
  const displayModel=useDisplay().modelSizeOnHome
  const dispatch=useDispatch()
  const ModelFile=useModelData().model
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const handleResize = () => {
      setDivWidth({height:container.clientHeight,width:container.offsetWidth})
      dispatch(setModelSizeOnHome({height:container.clientHeight,width:container.offsetWidth}))
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },);
  useEffect(()=>{
    if (ModelFile.length !==0){
      setCustomizeElert(false)
      
     }
    
  },[ModelFile.length])

  useEffect(() => {
    const container = containerRef.current;
    const handleResize = () => {
      setDivWidth({height:container.clientHeight,width:container.offsetWidth})
      dispatch(setModelSizeOnHome({height:container.clientHeight ,width:container.offsetWidth}))
    };
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[dispatch])


  const customizeElertClass = customizeElert ? " ml-6 text-red-900" : "hidden ml-6 text-red-900" 

  

  const [email,setEmail]=useState({emailid:"",error:false})
  const emailSeter=(value)=>{
    setEmail(value)
  }

  const rating=5
  let inputClassName=email.error ?" lg:w-8/12  lg:rounded-3xl  appearance-none block w-11/12  text-gray-700 border   py-3 px-4 leading-tight focus:outline-none focus:bg-white  border-red-500 lg:max-w-[350px] ":" lg:h-12 lg:max-w-sm lg:w-8/12 appearance-none block w-11/12 text-gray-700 border lg:rounded-3xl lg:max-w-[350px] py-3 px-4 leading-tight focus:outline-none focus:bg-white  border-neutral-400 "
  return (
    
      <div key={displayModel} className="mx-5  xl:mx-8  md:mx-auto md:my-auto  md:max-w-2xl  lg:max-w-none lg:grid grid-cols-2 gap-2 w-full   lg:ml-5 my-4 lg:my-10 lg:mt-11 lg:mb-0">
        <div className='lg:hidden lg:h-fit lg:w-fit'>
      <small  className=''><a href="./">3D Printing Service</a>, <a href='./'>Services</a></small>
        <div className='mb-2 title text-3xl font-bold '><h1 >Online FDM 3D Printing Service </h1></div>
        </div>
      <div ref={containerRef}  className=' lg:order-1 mt-0 h-[350px]   lg:h-[400px] xl:h-[500px]  w-11/12 border-[1px] my-3 border-sky-300  '>
    
              <DropBox  getbutton={false} />
     
      </div>
      <div className='hidden lg:block lg:order-3'>
      <p className='w-11/12 ml-3'> No matter what you choose, these AF-1s are all about you.
     colour choices are given to you
     <br/>
     Note:We currently support stl, obj, stp, step, igs, iges file format
     </p>
  
      </div>
       <div  className='lg:order-2'>
       <div className='hidden lg:block'>
      <small  className=''><a href="./">3D Printing Service</a>, <a href='./'>Services</a></small>
        <div className='mb-2 title text-3xl font-bold '><h1 >Online FDM 3D Printing Service </h1></div>
        </div>
      <p className='mb-2 lg:mb-0  ml-3 '>Get your free 3D Print e-Book </p>
      <form autoComplete="off"  onSubmit={(e)=>{
      e.preventDefault()
      console.log("first")
      const validEmailParams={param1:(email.emailid.slice(email.emailid.length-4,email.emailid.length)===".com"),
                              param2:(!email.emailid.includes("@.") && !email.emailid.includes(".@") && (email.emailid.includes("@"))),
                              param3:(email.emailid.endsWith(".com") && !email.emailid.startsWith("@"))
                               }
      const validation=(validEmailParams.param1 && validEmailParams.param2 && validEmailParams.param3)
      if(validation) {
        dispatch(updateEmail(email.emailid))
        setEmail({emailid:"",error:false})
      }  
      else{
        setEmail({...email,error:true})
      }              
    }
    } 
    >
     
      
    <div className="w-full  lg:flex lg:items-center px-3 ">
      
        <input className={inputClassName} id="grid-last-name" type="text" placeholder="Enter email"
              value={email.emailid} onChange={(e)=>{
                emailSeter({...email,emailid:e.target.value})
              }}/> 
              {email.error  && <p><small className='lg:hidden text-red-700 ml-1' >Please enter a valid email address.</small></p>}
            
              <button class="lg:ml-4 lg:rounded-3xl  shadow bg-black hover:bg-stone-700 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 lg:px-0 lg:py-3 w-11/12 lg:w-3/12 my-4 lg:mb-1 lg:mt-2" type="submit">
              GET NOW
            </button>

    </div>
    {email.error  && <p><small className='hidden lg:block text-red-700 ml-4 xl:ml-6' >Please enter a valid email address.</small></p>}

      </form>
      <div className=' lg:hidden lg:order-3'>
      <p className='w-11/12 ml-3'> No matter what you choose, these AF-1s are all about you.
     colour choices are given to you
     <br/>
     Note:We currently support stl, obj, stp, step, igs, iges file format
     </p>
     <div className='w-10/12 mt-4 mx-auto'>{isCustomized && <Report/>}</div>
      </div>

      
      <div >     
     <ul className=' lg:hidden mt-3 ml-6 list-disc text-sm'>
     <li><strong  >SKU: 901845</strong></li>
     <li><div className='stars'>
       <strong>Rating : </strong>{Array(rating).fill().map((_,i)=>
     (<StarIcon key={i} />))}
     
     </div></li>
     <li><strong>Brand: EasyMech </strong></li>
     </ul>
     </div>
      <div className=' ml-3 lg:mt-10'>
     <button  className="bg-white hover:border-black border-2 text-gray-800 font-semibold py-3 px-6 my-4 mx-2  border-gray-400 rounded-3xl  w-5/6"
     onClick={()=>{
       if (ModelFile.length !==0){
        setCustomizeElert(false)
        dispatch(backDropBlur(true))
       }
       else{
         setCustomizeElert(true)
       }
      
     }}>
     Customize 
     <AutoAwesomeIcon />
     </button>
     <p className={customizeElertClass} >**Please Upload a Model To Customize</p>
     <DropBox getbutton={true} />
     <div className='hidden  lg:block'> 
 

     {isCustomized && <Report/>}
   </div>
     </div> 
      </div>
      <div className='hidden lg:block lg:order-4'>
      <ul className='mt-3 ml-6 list-disc text-sm'>
     <li><strong  >SKU: 901845</strong></li>
     <li><div className='stars'>
       <strong>Rating : </strong>{Array(rating).fill().map((_,i)=>
     (<StarIcon key={i} />))}
     
     </div></li>
     <li><strong>Brand: EasyMech </strong></li>
     </ul>
      </div>
    </div>
  )
}