import React ,{useState} from "react";
import Navbar from "./Components/Navbar/navbar";
import './App.css'
import {action,originals,horror,comedy} from './url'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { appContext } from "./appContext";
function App() {
  const [url,setUrl] = useState('')
  return (
    <div className="App">
      <appContext.Provider value={{url,setUrl}}>
      <Navbar/>
      <Banner/>
      <RowPost title = 'Netflix Originals' url = {originals}/>
      <RowPost title = 'Action' isSmall url = {action}/>
      <RowPost title = 'Horror' isSmall url = {horror}/>
      <RowPost title = 'Comedy' isSmall url = {comedy}/>
      </appContext.Provider>
    </div>
  );
}

export default App;
