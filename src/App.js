import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Router>
        <NavigationBar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path = "About" element = {<About/>} />
          <Route path = "Services" element = {<Services/>} />
          <Route path = "Contact" element = {<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
