// import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components_1/home';
import AboutUs from './Components_1/about';
import AboutUs1 from './Components_1/aboutUs';
import Contact from './Components_1/contact';
import Gallery from './Components_1/gallery';
import Portals from './Components_1/portals';
import SPortal from './Components_1/SPortal';
import TPortal from './Components_1/TPortal';
import PhotoUpload from './Components_1/PhotoUpload';
import Signup from './Components_1/signup';
import Auth from './Components_1/Auth';

function App() {
  return (
    <>
      <Router>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about1" element={<AboutUs1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/portals" element={<Portals />} />
          <Route path='/auth' element={<Auth/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/student-portal" element={<SPortal/>} />
          <Route path="/teacher-portal" element={<TPortal/>} />
          <Route path="/photoupload" element={<PhotoUpload/>} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Default fallback route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
