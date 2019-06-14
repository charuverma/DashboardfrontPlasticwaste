import React from "react";
import axios from "axios";
import "../style/material-dashboard.css";
import "../style/demo.css";
import "../style/regsiter.css";
import { Col, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";

class register extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      fields
    });
  }
  async submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      console.log(this.state.fields.username);
      fields["emailid"] = "";
      console.log(this.state.fields.emailid);
      fields["mobileno"] = "";
      console.log(this.state.fields.mobileno);
      fields["password"] = "";
      console.log(this.state.fields.password);
      fields["status"] = "";
      console.log(this.state.fields.status);
      this.setState({ fields: fields });
      alert("Register Sucessfully");
      console.log(this.state.field);
    }
    //----------------------save api-------------------
    var options = {
      method: "POST",
      url: "http://localhost:8000/register/save",
      data: {
        id: this.state.fields.id,
        username: this.state.fields.username,
        emailid: this.state.fields.emailid,
        mobileno: this.state.fields.mobileno,
        password: this.state.fields.password,
        status: this.state.fields.status
      }
    };
    await axios(options);
    //------------------
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  ///----------------------update api---------------------
  async componentDidMount() {
    if (this.props.match.params.id) {
      var options = {
        method: "POST",
        url: "http://localhost:8000/post/get",
        data: {
          id: this.props.match.params.id
        }
      };
      const { data } = await axios(options);
      this.setState({
        fields: {
          id: data.result.id,
          username: data.result.username,
          emailid: data.result.emailid,
          mobileno: data.result.mobileno
        }
      });
    }
  }

  render() {
    return (
      <Form className="Form" onSubmit={this.submituserRegistrationForm}>
        <p className="main">
          {" "}
          <b>Registration Form</b>
        </p>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label className="Input">Username</Label>
              <Input
                className="Input"
                type="text"
                name="username"
                value={this.state.fields.username || ""}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.username}</div>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label className="Input">Email</Label>
              <Input
                type="text"
                className="Input"
                name="emailid"
                value={this.state.fields.emailid || ""}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.emailid}</div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label className="Input">MobileNo</Label>
              <Input
                className="Input"
                type="text"
                name="mobileno"
                value={this.state.fields.mobileno || ""}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.mobileno}</div>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label className="Input">Password</Label>
              <Input
                type="password"
                className="Input"
                name="password"
                value={this.state.fields.password || ""}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.password}</div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label className="Input">Checkbox</Label>
              <Input
                type="checkbox"
                className="Input"
                name="status"
                checked={this.state.fields.status}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.checkbox}</div>
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
              Register
            </Button>
          </Col>
          <Col md={3}>
            <Button
              color="primary"
              size="lg"
              block
              className="Button"
              href="./login"
            >
              Back to Login
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default register;
