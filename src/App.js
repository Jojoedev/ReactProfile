
import './App.css';
import Nav from './components/Nav';
import AboutMe  from './components/AboutMe';
import { useState } from "react";
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';
import MoviesLayout from './components/MoviesLayout';



function App() {
 
   return (
    <div className="App">
      
          <Nav />   
              <Routes>
              <Route path='/' element ={<MoviesLayout /> } /> 
              <Route path='/aboutme' element ={<AboutMe /> } /> 
              <Route path='/contact' element ={<Contact/> } />  
              </Routes>  

                   
    </div>
  );
}


export default App;
