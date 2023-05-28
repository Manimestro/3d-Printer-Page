

import { StlViewer } from 'react-stl-file-viewer'

const Apps = ({width=500,height=400,colorData="black",img}) => {
  console.log(width,height)
  
  return  (
    <div key={width+height+colorData }  >
  <StlViewer
    width={width}
    height={height}
    url={img}
    groundColor={"rgb(250,250,250)"}
    objectColor={colorData}
    skyboxColor="rgb(250,250,250)"
    gridLineColor={"rgb(250,250,250)"}
    lightColor={"rgb(250,250,250)"}
    volume={()=>{}}
  />
 
  </div>
  )
}

export default Apps 

