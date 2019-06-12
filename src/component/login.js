import React from "react";
import axios from "axios";
import "../style/regsiter.css";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container
} from "reactstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();
class login extends React.Component {
  constructor() {
    super();
    this.state = {
      field: {},
      errors: {},
      
    };
    this.handlechange = this.handlechange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handlechange(e) {
    let field = this.state.field;
    field[e.target.name] = e.target.value;
    this.setState({
      field
    });
  }
  async submit(e) {
    e.preventDefault();
    const { field } = this.state,
      errors = {};

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!field.emailid) {
      errors.emailid = "This is a required field.";
    } else if (!pattern.test(field["emailid"])) {
      errors.emailid = "Invalid email.";
    }

    if (!field.password) {
      errors.password = "This is a required field.";
    }

    if (Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      console.log("Login API");
    }
    var options = {
      method: "POST",
      url: "http://localhost:8000/user/login",
      data: {
        emailid: this.state.field.emailid,
        password: this.state.field.password
      }
    };
    const { data } = await axios(options);
    if (!data.status) {
      alert("Invalid login details");
    } else {
      alert("Login Successfully");
      cookies.set("emailid", this.state.field.emailid);

      window.location.href = "/";
    }
  }

  render() {
    return (
      <Container>
        <Form className="loginform" onSubmit={this.submit}>
          <Row>
            <Col xs={6} md={4}>
            </Col>
          </Row>
          <p className="login">
            {" "}
            <b>Login Form</b>
          </p>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="Input">Emailid</Label>
                <Input
                  type="email"
                  className="Input"
                  name="emailid"
                  value={this.state.field.emailid || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.emailid}</div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="Input1">Password</Label>
                <Input
                  type="password"
                  className="Input1"
                  name="password"
                  value={this.state.field.password || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.password}</div>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Button
                color="primary"
                size="lg"
                block
                className="Button"
                type="submit"
              >
                LOGIN
              </Button>
            </Col>
            <Col md={3}>
              <Button
                color="primary"
                size="lg"
                href="/register"
                block
                className="Button"
              >
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default login;
