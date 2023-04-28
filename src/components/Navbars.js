import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    
      <div className='ennavbars' style={{position:"fixed", width:"100%", top:"0px", zIndex:"2" }}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{boxShadow:"0 3px 5px 0 rgba(0,0,0,.3)"}}>
      
        <Navbar.Brand href="#home" style={{paddingLeft:"30px"}}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Bio</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mail</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tweter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
    )
}

export default Navbars
