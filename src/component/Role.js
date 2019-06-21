import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/material-dashboard.css";
import "../style/demo.css";
import "../style/regsiter.css";
import axios from "axios";
import Card from "react-bootstrap/Card";

class Role extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			errors: {},
			fields: {
				name:'',
				Status: false,
				rolepermissions: {}
			},
			data: [],
			permissions: {}
		};
		this.handleperissions = this.handleperissions.bind(this);
		this.handlechange = this.handlechange.bind(this);
		this.submit = this.submit.bind(this);
	}

	handlechange(e) {
		let fields = this.state.fields;
		fields[e.target.name] =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		this.setState({
			fields
		});
    }
    
	handleperissions(e) {
		const rolepermissions = {
			...this.state.fields.rolepermissions,
		};
		rolepermissions[e.target.name] = e.target.checked;
		this.setState({
			fields: {
				...this.state.fields,
				rolepermissions,
			}
		});
	}

	async submit(e) {
		e.preventDefault();

		if (this.validateform()) {
			let fields = {};
			fields["name"] = "";
			fields["Status"] = "";
			fields["rolepermissions"] = "";
			this.setState({ fields: fields });
		}

		const permissionIds = [];
		Object.keys(this.state.fields.rolepermissions).forEach(item => {
			if(this.state.fields.rolepermissions[item]) {
				permissionIds.push(item);
			}
		});

		var options = {
			method: "POST",
			url: "http://localhost:8000/Roles/save",
			data: {
				id: this.state.fields.id,
				name: this.state.fields.name,
				Status: this.state.fields.Status,
				permissionIds
			}
		};
		const data = await axios(options);
		console.log(data);
		alert("Role Added");
		window.location.href = "/Rolelist";
	}

	async componentDidMount() {
		var option1 = {
			method: "POST",
			url: "http://localhost:8000/Roles/permissions",
			data: {}
		};
		const { data: permissions } = await axios(option1);
		const permission = {}, rolepermissions = {};
		permissions.result.forEach(item => {
			rolepermissions[item.id] = false;
			if (permission[item.module]) {
				permission[item.module].push(item);
			} else {
				permission[item.module] = [item];
			}
		});

		const fields = {
			id: '',
			name: '',
			Status: '',
		}

		if (this.props.match.params.id) {
			var options = {
				method: "POST",
				url: "http://localhost:8000/Roles/get",
				data: {
					id: this.props.match.params.id
				}
			};
			const { data: {result} } = await axios(options);
			fields.id = result.data.id;
			fields.name = result.data.name;
			fields.Status = result.data.Status;
			result.data.rolepermissions.forEach(item => {
				rolepermissions[item.permissionId] = true;
			}); 
		}
		
		this.setState({
			loading: false,
			permissions: permission,
			fields: {
				...this.state.fields,
				...fields,
				rolepermissions
			}
		});
	}


	validateform() {
		let fields = this.state.fields;
		let errors = {};
		let isFormvalid = true;
		if (!fields["name"]) {
			isFormvalid = false;
			errors["name"] = "*Please Enter the name";
		}

		this.setState({ errors: errors });
		return isFormvalid;
	}

	render() {
		if(this.state.loading) return 'Loading...';
		return (
			<Form className="Form" onSubmit={this.submit}>
				<Row>
					<Col md={6}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter name"
								name="name"
								value={this.state.fields.name || ""}
								onChange={this.handlechange}
							/>
							<div className="errorMsg">
								{this.state.errors.name}{" "}
							</div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Form.Group inline controlId="formBasicChecbox">
							<Form.Check
								bsPrefix="customcheckbox"
								name="Status"
								checked={this.state.fields.Status || ""}
								onChange={this.handlechange}
								type="checkbox"
								label="Check me out"
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col md={10}>
						<Card>
							<Row>
								{Object.keys(this.state.permissions).map(
									item => {
										const permission = this.state.permissions[item];
										return (
											<Col md={4}>
												<div className="product1">
													{item}
												</div>
												{permission.map(action => (
													<Form.Group
														bsPrefix="custom"
														inline
														controlId={
															action.module_action
														}
													>
														 <Form.Check
															className="product2"
															bsPrefix="customcheckbox"
															name={action.id}
															checked={
																this.state
																	.fields
																	.rolepermissions[
																	action.id
																]
															}
															onChange={
																this
																	.handleperissions
															}
															type="checkbox"
															label={action.slug}
														/> 
													</Form.Group>
												))}
											</Col>
										);
									}
								)}
							</Row>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Button variant="primary" size="lg" block type="submit">
							Submit
						</Button>
					</Col>
				</Row>
			</Form>
		);
	}
}

export default Role;