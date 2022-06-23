import './App.css';
import react, {useState} from "react";
import Navbar from "./navigation/navbar";
import Sidebar from "./navigation/sidebar";
import About from './pageComponents/about';
import Projects from './pageComponents/projects';
import Contact from './pageComponents/contact';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

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
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
