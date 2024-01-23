import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../js.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark" >
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img id="logo" src={logo} alt="Loading" width="100" height="100" />
          <br />
          <h5 id="head" className="text-light">
            No Poverty
          </h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto" id="list">
            <Nav.Item>
              <Link to="/Home" className="nav-link" aria-current="page">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/About" className="nav-link">
                About us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Welfare" className="nav-link">
              Welfare for the Needy
              </Link>
            </Nav.Item>
            <NavDropdown title="Donate" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Money</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Food</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cloths</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Others</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Link to="/Contact" className="nav-link">
                Contact us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;