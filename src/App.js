import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import JCLocation from './components/JCLocation';
//import Careers from './pages/Careers';
import Careers from './pages/Careers';
import ToTop from './components/ToTop';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toTop, setToTop] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 100){
            setToTop(true)
        }
        else{
            setToTop(false)
        }
    })
}, [])

  return (
    <div className='app'>
      <ToTop toTop={toTop} setToTop={setToTop}/>
      <Router>
        <NavigationBar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path = "About" element = {<About/>} />
          <Route path = "Services" element = {<Services/>} />
          <Route path = "Contact" element = {<Contact/>} />
          <Route path = "Careers" element = {<Careers/>} />
          <Route path = "JCLocation" element = {<JCLocation/>} />
          {/* <Route path = "ToTop" element = {<ToTop/>} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
