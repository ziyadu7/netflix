import React from "react";
import Navbar from "./Components/Navbar/navbar";
import './App.css'
import {action,originals,horror,comedy} from './url'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      {/* <App/> */}
      <Navbar/>
      <Banner/>
      <RowPost title = 'Netflix Originals' url = {originals}/>
      <RowPost title = 'Action' isSmall url = {action}/>
      <RowPost title = 'Horror' isSmall url = {horror}/>
      <RowPost title = 'Comedy' isSmall url = {comedy}/>
    </div>
  );
}

export default App;
