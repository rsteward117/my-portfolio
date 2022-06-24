import React from 'react';
import './App.css';
import react, {useState} from "react";
import Navbar from "./navigation/navbar";
import Sidebar from "./navigation/sidebar";
import About from './pageComponents/about';
import Projects from './pageComponents/projects';
import Contact from './pageComponents/contact';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  function toggle (){
      setIsOpen(!isOpen)
  }
  return(
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Router>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
