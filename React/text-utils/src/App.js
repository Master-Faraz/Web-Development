import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white";
      Show_Alert("Light mode has been enabled", "success")
      document.title = "TextUtils"
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(53,54,58)";
      Show_Alert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"

    }
  }

  // *****************************************  Alert **********************************************************
  const [alert, setAlert] = useState()

  const Show_Alert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  // *****************************************  React Router **********************************************************




  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" prop1="My Home" prop2="About US" mode={mode} toggleMode={toggleMode} />
        
        <Routes>
          <Route path='/' element = {} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

<Alert alert={alert} />

{/* container class in bootstrap for alligning in center  and my-3 -> margin 3 in y*/}
<div className="container my-3">

      <TextForm heading="Enter the text to analize" Show_Alert={Show_Alert} mode={mode} />

</div>