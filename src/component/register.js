import React from "react";
import axios from "axios";
import "../style/material-dashboard.css";
import "../style/demo.css";
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
    fields[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      fields
    });
  }

  async submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      console.log("Welcome");
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
    }
    //----------------------save api-------------------
    var options = {
      method: "POST",
      url: "http://localhost:8000/register/save",
      data: {
        id: this.state.fields.id || null,
        username: this.state.fields.username,
        emailid: this.state.fields.emailid,
        mobileno: this.state.fields.mobileno,
        password: this.state.fields.password,
        status: this.state.fields.status
      }
    };
    await axios(options);
alert("Register Successfully");
console.log(this.state.fields.status);
console.log(this.state.fields.username);
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

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false; 
       errors["password"] = "*Please enter secure and strong password."; 
      }
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
        <h3>Registration Form</h3>
      </p>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label className="Input">username</Label>
            <Input
              className="Input"
              type="text"
              name="username"
              value={this.state.fields.username || ""}
              onChange={this.handleChange}
            />
            <div className="errorMsg">
              {this.state.errors.username}
            </div>
          </FormGroup>
        </Col>
        <Col md={4}>
						<FormGroup>
							<Label className="Input">Email</Label>
							<Input
         
                type="text"
                className="Input"
                name="emailid"
                value={this.state.fields.emailid || ""}
                onChange={this.handleChange}
							/>
							<div className="errorMsg">
								{this.state.errors.emailid}
							</div>
						</FormGroup>
					</Col>
          </Row>
          <Row>
					<Col md={4}>
						<FormGroup>
							<Label className="Input">MobileNo</Label>
							<Input
               className="Input"
							type="text"
              name="mobileno"
              value={this.state.fields.mobileno || ""}
              onChange={this.handleChange}
							/>
							<div className="errorMsg">
								{this.state.errors.mobileno}
							</div>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label className="Input">Password</Label>
							<Input
                 type="password"
                 className="Input"
                 name="password"
                 value={this.state.fields.password || ""}
                 onChange={this.handleChange}
							/>
							<div className="errorMsg">
								{this.state.errors.password}
							</div>
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
							<div className="errorMsg">
								{this.state.errors.checkbox}
							</div>
						</FormGroup>
					</Col>
				</Row>
        <Row>
					<Col md={8}>
						<Button
							color="primary"
							size="lg"
							block
							className="Button"
							type="submit"
						>Register
						</Button>
					</Col>
				</Row>
</Form>
    );
  }
}

export default register;
