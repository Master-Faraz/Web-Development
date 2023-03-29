import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(53,54,58)";

    }
  }



  return (
    <>
      <Navbar title="TextUtils" prop1="My Home" prop2="About US" mode = {mode} toggleMode = {toggleMode}/>
      {/* container class in bootstrap for alligning in center  and my-3 -> margin 3 in y*/}
      <div className="container my-3">
        <TextForm heading="Enter the text to analize"  mode = {mode}/>

      </div>


    </>
  );
}

export default App;
