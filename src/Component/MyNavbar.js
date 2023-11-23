import React from 'react'
import {Container , Navbar, Nav} from 'react-bootstrap'

function MyNavbar() {
  return (
    <div>
       <Navbar expand="lg" className="bg-dark" fixed='top'>
      <Container>
        <Navbar.Brand href="#" className='text-white'>Coffee<span className='text-danger fs-2'>.</span>Co</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto column-gap-5">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Products</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Place</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar
