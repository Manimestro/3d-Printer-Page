import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import STLAPP from './scrolleffect';
import { useDispatch } from 'react-redux';
import {useProductData} from './slices/productdataSlice'
import {updateModel ,useModelData ,updateformettedModel} from './slices/dataslice'
import {useDisplay} from './slices/cssSlice'
import {setEditedStatus} from './slices/cssSlice'
const DropZone = ({getbutton}) => {
  const color = useProductData().selectedColor
  const height=useDisplay().modelSizeOnHome.height
  const width=useDisplay().modelSizeOnHome.width
  console.log(height,width, "this is area")
  const [errorShow , setErrorshow]=useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const dispatchFiles=useDispatch()
  const ModelUrlList=useModelData().model
  let count = 0 ;
  useEffect(()=>{
    let id;
    if (uploadedFiles.length>0 && count===0){
        setErrorshow(true)
       id = setTimeout(() => {
          setErrorshow(false)
        }, 2000);
    }
    return (id)=>{
      clearTimeout(id)
    }
  },[count,uploadedFiles])


  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles[0] ,acceptedFiles[0], "acceptedFiles")
    const modelName= acceptedFiles[0].name
    const smallname = modelName.toLowerCase()
    const accept=['.stl', '.obj', '.stp', '.step', '.igs', '.iges']
 
    for (let i=0 ; i<6 ; i++ ){
       if (smallname.includes(accept[i])){
        count=+1
       }
    }
    const objectURL = URL.createObjectURL(acceptedFiles[0] )
    console.log(objectURL,"url of the model")
    if (count>0){
      
     dispatchFiles(updateModel(objectURL))
      dispatchFiles(setEditedStatus(false))
      
      dispatchFiles(updateformettedModel(acceptedFiles[0]))
    
      
    }
    setUploadedFiles(acceptedFiles);

  };


  const useUploder=(clickevent=false)=>{ 
    const { getRootProps, getInputProps, isDragActive } =  useDropzone({
    accept: ['.stl', '.obj', '.stp', '.step', '.igs', '.iges'],
    
    onDrop,
    noClick:clickevent,
  
  })
  
  return  [getRootProps, getInputProps , isDragActive]
};
  
    console.log(uploadedFiles.length,count ,"final test")
  const [dragOnDivProps, dragOnInnputProps, dragONisDragActive] =useUploder(ModelUrlList.length!==0)
  const [dragOffDivProps, dragOffInnputProps]= useUploder()

  return (
    <div>
      
    {!getbutton ? <div>
      <div  {...dragOnDivProps()} className={`dropzone ${dragONisDragActive? 'active' : ''}`}>
        <input {...dragOnInnputProps()} />
        
       { ModelUrlList.length===0 ?<div className='flex flex-row justify-center items-center lg:h-[400px] xl:h-[500px] h-[350px] border-4 '>{dragONisDragActive ? (
           <p >Drop the files here...</p>
        ) : (
          <div>
          <p className='w-8/12 mx-auto text-green-600 hover:scale-150'>Drag and drop files here, or click to select files</p>
          <p className='w-8/12 mx-auto pt-6 text-blue-400 hover:scale-125'>Note : Other Then Stl files you wont be able to see on screen but still you can customize and send them.  </p>
          {(errorShow) && <p className='w-8/12 mx-auto pt-6 text-red-500 hover:scale-150'> **Please Upload a valid file Type</p>}
          </div>
        )}
        </div>:(
        <div>
          
            <STLAPP img={ModelUrlList} height={height} width={width} colorData={color[1]} />
         
        </div>
      )}
      </div>
     
    </div> 
    :<div {...dragOffDivProps()} className="text-center  bg-black pl-24 hover:bg-gray-700 border-2 text-gray-800 font-semibold py-3 px-6 my-4 mx-2  border-black rounded-3xl  w-5/6">
       <input {...dragOffInnputProps()} />
        <span className='mr-20 text-white'> Upload File </span>
        
    </div>
  }
  </div>
  );
};

export default DropZone;
