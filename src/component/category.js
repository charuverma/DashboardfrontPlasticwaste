import React from "react";
import "../style/material-dashboard.css";
import "../style/demo.css";
import "../style/regsiter.css";
import {Row, Col,Button, Form,FormGroup} from "react-bootstrap";
import {  Input} from "reactstrap";
import axios from 'axios';

class category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {
                Parentcategory:'',
                Categoryname: '',
                Description: '',
                Status: false
            },
            data:[],
            errors: {}
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.type === "checkbox"
            ? e.target.checked
            : e.target.value;
        this.setState({
            fields
        });
    }
    async submit(e){
        e.preventDefault();
        if(this.validateform()){
            let fields = {};
            fields['Parentcategory']="";
            fields['Categoryname'] = "";
            fields['Description'] = "";
            fields['Status'] = "";
            this.setState({fields});
        }
        var options={
            method:'POST',
            url:"http://localhost:8000/categories/save",
            data:{
                id:this.state.fields.id || null, 
                Parentcategory:this.state.fields.Parentcategory,
                Categoryname:this.state.fields.Categoryname,
                Description:this.state.fields.Description,
                Status:this.state.fields.Status
            } 
        }
        const data = await axios(options);
        console.log(data);
    }
    async componentDidMount() {
        var options = {
          method: "POST",
          url: "http://localhost:8000/categories/list",
          data: {}
        };
        const { data } = await axios(options);
        this.setState({
          data: data.result
        });
      }
    validateform(){
        let fields=this.state.fields;
        let errors={};
        let isFormValid=true;
        if(!fields['Categoryname']){
            isFormValid=false;
            errors['Categoryname']='* Please enter the category name';
        }
        if(!fields['Description']){
            isFormValid=false;
            errors['Description']="* Please enter the Description";
        }
        
        this.setState({
            errors:errors
        });
        return isFormValid;
       }
    render(){
        return(
            <Form className="Form" onSubmit={this.submit}>
                <b className="main1"> Category Form</b>
                <Row>
                <Col md={6}>
                    <FormGroup>
                        <Input type="select" name="Parentcategory"
                            value={this.state.fields.Parentcategory }
                            onChange={this.handleChange}>
                             <option>Parent category</option>
                            {this.state.data.map(item =>( 
                            <option key={item.id} value={item.id}>
                            {item.Categoryname}</option>))}; 
                           
                        </Input>
                    </FormGroup>
                </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Categoryname"
                                value={this.state.fields.Categoryname} 
                                onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.Categoryname}</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="Description" 
                                value={this.state.fields.Description } 
                                onChange={this.handleChange}/>
                            <div className="errorMsg">{this.state.errors.Description}</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group inline controlId="formBasicChecbox">
                            <Form.Check
                                bsPrefix="customcheckbox"
                                name="Status"
                                checked={this.state.fields.Status } 
                                onChange={this.handleChange}
                                type="checkbox"
                                label="Check me out" />
                            <div className="errorMsg">{this.state.errors.Status}</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button
                            color="primary"
                            size="lg"
                            block
                            type='submit'>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default category;