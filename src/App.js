
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

import Alert from "./component/Alert";
import { useState } from 'react';

import React from "react";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  //usestate for alert
  const showalert = (message, type) => {
    setAlert
      ({
        msg: message,
        type: type
      });

    setTimeout(() => {
      setAlert(null)
    }, 2500);


  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enables", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("dark mode has been enabled", "success");
    }
  }


  const toggleOrangeMode = () => {
    if (mode === 'light') {
      setMode('warning');
      document.body.style.backgroundColor = '	#90EE90';
      showalert("orange mode has been enables", "success");


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enables", "success");

    }
  }
  return (
   


      

<div>

        <Navbar title="Textility" mode={mode} toggleMode={toggleMode} toggleOrangeMode={toggleOrangeMode} />
        <Alert alert={alert} />
        <div className="container my-3">


         
        <TextForm showalert={showalert} mode={mode} heading="Enter the text to analyze" />
    
        

          
        {/* </Routes> */}
             
         

          {/* <About/> */}
        </div>
  </div>
 
  );
}

export default App;
