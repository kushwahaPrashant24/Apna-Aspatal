import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';



function Navbar() {
  return <>
      <div id="Navbar">
       
       <div id="Navbarone">
        <p>Apna Aspatal</p>
        </div>
        <div id="Navbartwo">
        <Link to="/" style={{ textDecoration: 'none' }}><p>Home</p></Link>
        <Link to="/doctor" style={{ textDecoration: 'none' }}><p>Doctors</p></Link>
        <Link to="/Appointment" style={{ textDecoration: 'none' }}><p>Take Appointment</p></Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}><p>Contact us</p></Link>
        <Link to="/About" style={{ textDecoration: 'none' }}><p>About us</p></Link>
        </div>
       </div>
  </>

}

export default Navbar;