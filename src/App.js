import React from 'react';
import './App.css';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light')//whether darkmode is enabled or not 
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null)
    }, 1500);
  };
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled" , "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success")
    }

  }
  return (
    <>
      <Navbar1 title="Text Utils" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert ={alert}/>

      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze below" mode={mode} />
      </div>
      <About/>
    </>
  );
}

export default App;
