import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Dashboard extends React.Component {
  render() {
    return (
      <CardGroup>
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
        </CardGroup>
    )
  }
}

export default Dashboard;
