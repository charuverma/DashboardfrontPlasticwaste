import React from "react";
import { Col, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import axios from 'axios';
import "../style/material-dashboard.css";
import "../style/demo.css";

class registerform extends React.Component {
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
		console.log(e.target);
		this.setState({
			field
		});
	}
	submit(e) {
		e.preventDefault();
		if (this.validateForm()) {
			let field = {};
			field["firstname"] = "";
			field["Lastname"] = "";
			field["emailid"] = "";
		    field["BusinessProfile"] = "";
			field["CompanyName"] = "";
			field["JobTitle"] = "";
			field["street"] = "";
			field["city"] = "";
			field["State"] = "";
			field["zip"] = "";
			field["Country"] = "";
			field["MobileNo"] = "";
			field["Address"] = "";
            this.setState({ field: field });
            alert("Register Sucessfully");
            console.log(this.state.field);
        }
        var options = { 
            method: 'POST',
            url: 'http://localhost:8000/post/save',
            data: {
				id: this.state.field.id || null,
                firstname :this.state.field.firstname,
                Lastname:this.state.field.Lastname,
                emailid:this.state.field.emailid,
                BusinessProfile:this.state.field.BusinessProfile,
                CompanyName:this.state.field.CompanyName,
                JobTitle:this.state.field.JobTitle,
                street:this.state.field.street,
                city:this.state.field.city,
                State:this.state.field.State,
                zip:this.state.field.zip,
                Country:this.state.field.Country,
                MobileNo:this.state.field.MobileNo,
                Address:this.state.field.Address
            }
          };
          const data =  axios(options);
          console.log(data);
	}
	validateForm() {
		let field = this.state.field;
		let errors = {};
		let formIsValid = true;

		if (!field["firstname"]) {
			formIsValid = false;
			errors["firstname"] = "*Please enter your firstname.";
		}

		if (typeof field["firstname"] !== "undefined") {
			if (!field["firstname"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["firstname"] = "*Please enter alphabet characters only.";
			}
		}
		if (!field["Lastname"]) {
			formIsValid = false;
			errors["Lastname"] = "*Please enter your Lastname.";
		}

		if (typeof field["Lastname"] !== "undefined") {
			if (!field["Lastname"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["Lastname"] = "*Please enter alphabet characters only.";
			}
		}
		if (!field["emailid"]) {
			formIsValid = false;
			errors["emailid"] = "*Please enter your email-ID.";
		}

		if (typeof field["emailid"] !== "undefined") {
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(field["emailid"])) {
				formIsValid = false;
				errors["emailid"] = "*Please enter valid email-ID.";
			}
		}
		if (!field["BusinessProfile"]) {
			formIsValid = false;
			errors["BusinessProfile"] = "*Please enter your Business Profile.";
		}

		if (typeof field["BusinessProfile"] !== "undefined") {
			if (!field["BusinessProfile"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["BusinessProfile"] =
					"*Please enter alphabet characters only.";
			}
		}
		if (!field["CompanyName"]) {
			formIsValid = false;
			errors["CompanyName"] = "*Please enter your Company Name.";
		}

		if (typeof field["CompanyName"] !== "undefined") {
			if (!field["CompanyName"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["CompanyName"] =
					"*Please enter alphabet characters only.";
			}
		}
		if (!field["JobTitle"]) {
			formIsValid = false;
			errors["JobTitle"] = "*Please enter your JobTitle.";
		}

		if (typeof field["JobTitle"] !== "undefined") {
			if (!field["JobTitle"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["JobTitle"] = "*Please enter alphabet characters only.";
			}
		}
		if (!field["street"]) {
			formIsValid = false;
			errors["street"] = "*Please enter your street.";
		}

		if (typeof field["street"] !== "undefined") {
			if (!field["street"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["street"] = "*Please enter alphabet characters only.";
			}
		}
		if (!field["city"]) {
			formIsValid = false;
			errors["city"] = "*Please enter your city.";
		}

		if (typeof field["city"] !== "undefined") {
			if (!field["city"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["city"] = "*Please enter alphabet characters only.";
			}
		}
		if (!field["State"]) {
			formIsValid = false;
			errors["State"] = "*Please enter your State.";
		}

		if (typeof field["State"] !== "undefined") {
			if (!field["State"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["State"] = "*Please enter alphabet characters only.";
			}
		}
        if (!field["zip"]) {
			formIsValid = false;
			errors["zip"] = "*Please enter your zipcode.";
		}

		if (typeof field["zip"] !== "undefined") {
			if (!field["zip"].match(/^[0-9]{6}$/)) {
				formIsValid = false;
				errors["zip"] = "*Please enter valid zip code.";
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
		if (!field["MobileNo"]) {
			formIsValid = false;
			errors["MobileNo"] = "*Please enter your mobile no.";
		}

		if (typeof field["MobileNo"] !== "undefined") {
			if (!field["MobileNo"].match(/^[0-9]{10}$/)) {
				formIsValid = false;
				errors["MobileNo"] = "*Please enter valid mobile no.";
			}
		}
		if (!field["Address"]) {
			formIsValid = false;
			errors["Address"] = "*Please enter your Address.";
		}

		if (typeof field["Address"] !== "undefined") {
			if (!field["Address"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["Address"] = "*Please enter alphabet characters only.";
			}
		}

		this.setState({
			errors: errors
		});
		return formIsValid;
	}
	async componentDidMount(){
		if(this.props.match.params.id){
			var options={
				method:'POST',
				url:'http://localhost:8000/post/get',
				data:{
					id:this.props.match.params.id,
				}
			};
			const {data}= await axios (options);
			this.setState({
				field:{
				id :data.result.id,
				firstname :data.result.firstname,
                Lastname:data.result.Lastname,
                emailid:data.result.emailid,
                BusinessProfile:data.result.BusinessProfile,
                CompanyName:data.result.CompanyName,
                JobTitle:data.result.JobTitle,
                street:data.result.street,
                city:data.result.city,
                State:data.result.State,
                zip:data.result.zip,
                Country:data.result.Country,
                MobileNo:data.result.MobileNo,
                Address:data.result.Address
				}
			})
		}
	}

	render() {
		return (
			<Form className="Form" onSubmit={this.submit}>
				<p className="main">
					{" "}
					<h3>Registration Form</h3>
				</p>
				<Row>
					<Col md={4}>
						<FormGroup>
							<Label className="Input">Firstname</Label>
							<Input
								className="Input"
								type="text"
								name="firstname"
								value={this.state.field.firstname || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.firstname}
							</div>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label className="Input1">Lastname</Label>
							<Input
								type="text"
								className="Input1"
								name="Lastname"
								value={this.state.field.Lastname || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.Lastname}
							</div>
						</FormGroup>
					</Col>
				</Row>
				<Row >
					<Col md={4}>
						<FormGroup>
							<Label className="Input">Email</Label>
							<Input
								type="email"
								className="Input"
								name="emailid"
								value={this.state.field.emailid || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.emailid}
							</div>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label className="Input1">BusinessProfile</Label>
							<Input
								type="text"
								className="Input1"
								name="BusinessProfile"
								value={this.state.field.BusinessProfile || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.BusinessProfile}
							</div>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<FormGroup>
							<Label className="Input">CompanyName</Label>
							<Input
								type="text"
								className="Input"
								name="CompanyName"
								value={this.state.field.CompanyName || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.CompanyName}
							</div>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label className="Input1">JobTitle</Label>
							<Input
								type="text"
								className="Input1"
								name="JobTitle"
								value={this.state.field.JobTitle || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.JobTitle}
							</div>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={8}>
						<FormGroup>
							<Label className="Input">Street</Label>
							<Input
								type="text"
								className="Input"
								name="street"
								value={this.state.field.street || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.street}
							</div>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<FormGroup>
							<Label className="Input">City</Label>
							<Input
								type="text"
								className="Input"
								name="city"
								value={this.state.field.city || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.city}
							</div>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label className="Input1">State</Label>
							<Input
								type="text"
								className="Input1"
								name="State"
								value={this.state.field.State || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.State}
							</div>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<FormGroup>
							<Label className="Input">ZipCode</Label>
							<Input
								type="text"
								className="Input"
								name="zip"
								value={this.state.field.zip || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.zip}
							</div>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label className="Input1">Country</Label>
							<Input
								type="text"
								className="Input1"
								name="Country"
								value={this.state.field.Country || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.Country}
							</div>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<FormGroup>
							<Label className="Input">MobileNo</Label>
							<Input
								type="text"
								className="Input"
								name="MobileNo"
								value={this.state.field.MobileNo || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.MobileNo}
							</div>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label className="Input1">Address</Label>
							<Input
								type="text"
								className="Input1"
								name="Address"
								value={this.state.field.Address || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.Address}
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
						>
							LOGIN
						</Button>
					</Col>
				</Row>
			</Form>
			);
	}
}
export default registerform;
