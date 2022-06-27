import React from 'react';
import './App.css';
import react, {useState} from "react";
import Navbar from "./navigation/navbar";
import Sidebar from "./navigation/sidebar";
import About from './pageComponents/about';
import Projects from './pageComponents/projects';
import Contact from './pageComponents/contact';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  function toggle (){
      setIsOpen(!isOpen)
  }
  return(
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
