import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class register extends React.Component {
 
  logout() {
    cookies.remove('emailid');
    window.location.href = '/login';
  }

  render(){
    return (
      <Navbar bg="light" variant="light" style={{marginLeft:'2px',borderRadius:'20px'}}>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Row><Col md={4}>
          <Image src="download.jpeg" roundedCircle  /></Col>
          <Col md={4}>
            <Button  onClick={this.logout}>Logout</Button></Col></Row>
        </Nav>
      </Navbar>
    );
  }
};

