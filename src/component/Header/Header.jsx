import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className={"he_a"}>Home</NavLink>
            <NavLink to="/add_student" className={"he_a"}>Add Students</NavLink>
            <NavLink to="/view_student" className={"he_a"}>View Students</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header