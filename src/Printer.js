import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react"; 

  import {setSelectedPrinter } from './slices/productdataSlice'
  import { useDispatch } from 'react-redux';


  export default function Printer() {

    const dispatch= useDispatch()
    
    const data = [
      {
        label: "Standard",
        value: "0.2mm Standard Quality",
        desc: "0.2mm Standard Quality",
      },
      {
        label: "Medium",
        value: "0.5mm medium quality",
        desc: "0.5mm medium quality",
      },
   
      {
        label: "High",
        value: "0.1mm High Quality",
        desc: "0.1mm High Quality",
      },
   
      {
        label: "Ultra ",
        value: "0.05mm ultra High Quality",
        desc: "0.05mm ultra High Quality",
      }
    ];
   
    return (
      <Tabs id="custom-animation" value="html">
        <TabsHeader >
          {data.map(({ label, value }) => (
           <Tab onClick={()=>{
            dispatch(setSelectedPrinter(value))
           }}  key={value} value={value}>
             <span className="bg-slate-400 px-8 py-1 rounded-full " >{label}</span> 
            </Tab>
          
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 500 },
            mount: { y: 0 },
            unmount: { y: 500 },
          }}
        >
            <div className="text-center mt-8">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <span >{desc} </span>
            </TabPanel>
          ))}
          </div>
        </TabsBody>
      </Tabs>
    );
  }