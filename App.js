import Navbar from "./compnents/Navbar";
import React, { useState } from 'react';
import TextForm from "./compnents/TextForm";

function App() {
  const [mode, setmode] = useState('light');
  console.log(setmode);
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "black"
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <TextForm mode={mode}/>
    </>
  );
}

export default App;
