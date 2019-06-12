import React from "react";
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
import axios from "axios";
import "../style/material-dashboard.css";
import "../style/demo.css";

class productform extends React.Component {
  constructor() {
    super();
    this.state = {
      field: {},
      errors: {}
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
    if (this.validateForm()) {
      let field = {};
      field["ProductName"] = "";
      field["ProductType"] = "";
      field["Country"] = "";
      field["Price"] = "";
      field["ManufacturingDate"] = "";
      field["ExpireyDate"] = "";
      field["Size"] = "";
      field["File"] = "";
      this.setState({ field: field });
      alert("Product added");
    }
    const formdata = new FormData(e.target);
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      url: "http://localhost:8000/index/save",
      data: formdata
    };
    await axios(options);
  }

  validateForm() {
    let field = this.state.field;
    let errors = {};
    let formIsValid = true;
    if (!field["ProductName"]) {
      formIsValid = false;
      errors["ProductName"] = "*Please enter your Product Name.";
    }
    if (typeof field["ProductName"] !== "undefined") {
      if (!field["ProductName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["ProductName"] = "*Please enter alphabet characters only.";
      }
    }
    if (!field["ProductType"]) {
      formIsValid = false;
      errors["ProductType"] = "*Please enter your Product Type.";
    }
    if (typeof field["ProductType"] !== "undefined") {
      if (!field["ProductType"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["ProductType"] = "*Please enter alphabet characters only.";
      }
    }
    if (!field["Country"]) {
      formIsValid = false;
      errors["Country"] = "*Please enter your Country.";
    }
    if (typeof field["Country"] !== "undefined") {
      if (!field["Country"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["Country"] = "*Please enter alphabet characters only.";
      }
    }
    if (!field["Price"]) {
      formIsValid = false;
      errors["Price"] = "*Please enter your Price .";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      var options = {
        method: "POST",
        url: "http://localhost:8000/index/get",
        data: {
          id: this.props.match.params.id
        }
      };
      const { data } = await axios(options);
      this.setState({
        field: {
          id: data.result.id,
          ProductName: data.result.ProductName,
          ProductType: data.result.ProductType,
          Country: data.result.Country,
          Price: data.result.Price,
          Size: data.result.Size
        }
      });
    }
  }

  render() {
    return (
      <Container>
        <Form className="Form" onSubmit={this.submit}>
          <p className="main">
            {" "}
            <h3>Registration Form</h3>
          </p>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label className="Input">ProductName</Label>
                <Input
                  className="Input"
                  type="text"
                  name="ProductName"
                  value={this.state.field.ProductName || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.ProductName}</div>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label className="Input1">ProductType</Label>
                <Input
                  type="text"
                  className="Input1"
                  name="ProductType"
                  value={this.state.field.ProductType || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.ProductType}</div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label className="Input">Country</Label>
                <Input
                  type="text"
                  className="Input"
                  name="Country"
                  value={this.state.field.Country || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.Country}</div>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label className="Input1">Price</Label>
                <Input
                  type="text"
                  className="Input1"
                  name="Price"
                  value={this.state.field.Price || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.Price}</div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label className="Input">ManufacturingDate</Label>
                <Input
                  type="date"
                  className="Input"
                  name="ManufacturingDate"
                  value={this.state.field.ManufacturingDate || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">
                  {this.state.errors.ManufacturingDate}
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label className="Input1">ExpireyDate</Label>
                <Input
                  type="date"
                  className="Input1"
                  name="ExpireyDate"
                  value={this.state.field.ExpireyDate || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.ExpireyDate}</div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label className="Input">Size</Label>
                <Input
                  type="select"
                  className="Input"
                  name="Size"
                  value={this.state.field.Size || ""}
                  onChange={this.handlechange}
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label className="Input1">File</Label>
                <Input
                  type="file"
                  className="Input1"
                  name="File"
                  value={this.state.field.File || ""}
                  onChange={this.handlechange}
                />
                <div className="errorMsg">{this.state.errors.File}</div>
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
              >
                LOGIN
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default productform;
