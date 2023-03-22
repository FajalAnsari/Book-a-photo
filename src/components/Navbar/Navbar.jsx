import React from 'react';
import "./Navabar.css";
import logo from "../images/icones/Logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div>
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><span className='logo'><img src={logo} alt="logo"/></span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span id="menuicone" class="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Book a photo</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to="/photographers" className="nav-link active" aria-current="page">Explore</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link active btn btn-warning text-dark" aria-current="page">Register now</Link>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-warning" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</div>
    </>
  );
}

export default Navbar;
