import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
const baseurl="http://192.168.100.22:8000/public/uploads/File/1561548976705.gif";


class Dashboard extends React.Component {
 /*  constructor(props){
    super(props)
    console.log(props)
    const img3= require('../assets/images/images.jpeg');
    const img4= require('../assets/images/images (1).jpeg');
    this.state = {
      index:0,
      imglist:[img3,img4]
    }
    console.log(this.state);
    this.onclickback=this.onclickback.bind(this);
    this.onclickForward=this.onclickForward.bind(this);
  }
  onclickForward(){
    if(this.state.index + 1 === this.state.imglist.length){
      this.setState({
        index:0
      })
    }
    else{
      this.setState({
        index:this.state.index + 1
      })
    }
  }
  onclickback(){
    if(this.state.index - 1 === -1){
      this.setState({
        index:this.state.imglist.length - 1
      })
    }
    else {
      this.setState({
        index:this.state.index - 1
      })
    }
  } */
  render() {
    return (
      
     /*  <div>
        <Image src={this.state.imglist[this.state.index]} alt=""/><br/>
        <Button onClick={this.onclickback}>Back</Button>
        <Button onClick={this.onclickForward} >Forward</Button>
      </div> */
       <Carousel style={{"width":'463px',"backgroundColor":"black","height":"320px","margin-left":"285px"}} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={baseurl}
            alt="First slide"
          />
        </Carousel.Item>
       {/*  <Carousel.Item>
          <img
            className="d-block w-100"
            src="images (1).jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images.jpeg"
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel> 
      ///////////////////////////////////////////////////
     /*  <CardGroup>
        <Row>
          <Col md={4}>
          <Card bg="warning" text="white">
          <Card.Header>150</Card.Header>
            <Card.Body  >
              <Card.Text>
              Many plastics can be recycled. and the materials recovered can be given a second-life. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          </Col>
          <Col md={4}>
          <Card bg="success" text="white">
          <Card.Header>45%</Card.Header>
              <Card.Body>
                <Card.Text>
                Plastics are derived from petroleum or natural gas, giving them a stored energy..{' '}
                </Card.Text>
              </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
        </Card>
          </Col>
          <Col md={4}>
          <Card bg="info" text="white" >
          <Card.Header>89%</Card.Header>
            <Card.Body>
              <Card.Text>
              Biodegradable plastics are plastics that decompose by the action of living organisms.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
        </CardGroup> */
    )
  }
}

export default Dashboard;
