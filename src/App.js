import './App.css';
import Header from './Header';
import Popup from './Popup';
import {useEffect} from 'react';
import { useDisplay } from './slices/cssSlice';



function App() {
  const display=useDisplay().blur


  useEffect(()=>{
    const offlineHandler=()=>{
         
    }
    const onlineHandler=()=>{

    }
    window.addEventListener("offline",offlineHandler)
    window.addEventListener("online",onlineHandler)
  },[])
  return (
    <div className="App">
      {!display && <Header/>}
     {display && <Popup />}
    
    </div>
  );
}

export default App;
