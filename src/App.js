import React from 'react';
import './App.css';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <div>
      <BrowserRouter>
      <Navbar1 title="Text Utils" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
        <Routes>
          <Route path='/About' element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
