import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default props => {
	return (
		<Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
 {/*      <Nav.Link href="./registerform">Add Customer</Nav.Link>
      <Nav.Link href="./productform">Add Product</Nav.Link> */}
       < Button href="/login" >Logout</Button>
    </Nav>
  </Navbar>
	);
};
