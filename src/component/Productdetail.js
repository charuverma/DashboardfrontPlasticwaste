import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../style/material-dashboard.css";
import "../style/demo.css";
import "../style/regsiter.css";
import axios from 'axios';
class productdetail extends React.Component{
    constructor(){
        super();
        this.state={
            fields:{
                name:"",
                File:"",
                weight:"",
                rate:"",
                HSNnumber:"",
                other:""
            },
            errors:{}
        }
        this.handlechange=this.handlechange.bind(this);
        this.submit=this.submit.bind(this);
    }

    handlechange(e){
        let fields=this.state.fields;
        fields[e.target.name]=[e.target.value];
        this.setState({fields});
    }

    async submit(e){
        e.preventDefault();
        if(this.Validateform()){
            let fields={};
            fields['name']= " ";
            fields['File']="";
            fields['weight']="";
            fields['rate']="";
            fields['HSNnumber']="";
            fields['other']="";
            this.setState({
                fields:fields
            });
        }
        const formdata =new FormData(e.target);
        
        if(this.state.fields && this.state.fields.id) {
            formdata.append('id', this.state.fields.id);
        }

        var options={
            method:'POST',
            headers: {
                "Content-Type": "multipart/form-data"
            },
            url:"http://localhost:8000/products/save",
            data:formdata,
        }

        await axios(options);

        alert("Product Form Submitted");
        window.location.href='/showproduct';
    }

    async componentDidMount(){
        if(this.props.match.params.id){
            var options={
                method:'POST',
                url:'http://localhost:8000/products/get',
                data:{
                    id:this.props.match.params.id
                }
            };
            const {data} = await axios (options);
            this.setState({
                fields:{
                    id:data.result.id,
                    name:data.result.name,
                    weight:data.result.weight,
                    rate:data.result.rate,
                    HSNnumber:data.result.HSNnumber,
                    other:data.result.other
                }
            });
        }
    }
    
    Validateform(){
        let fields=this.state.fields;
        let errors={};
        let isFormvalid=true;
            if(!fields['name']){
                isFormvalid=false;
                errors['name']=" * Please enter the name";
            }
            if(!fields['weight']){
                isFormvalid=false;
                errors['weight']=" * Please Select the weight";
            }
             if(!fields['rate']){
                isFormvalid=false;
                errors['rate']=" * Please Select the rate";
            }
            this.setState({errors:errors});
            return isFormvalid;
    }
  
    render(){
        return(
            <Form className="Form" onSubmit={this.submit}>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                                <Form.Control type="text" 
                                name="name"
                                value={this.state.fields.name || ""}
                                onChange={this.handlechange}
                                />
                                <div className="errorMsg1">{this.state.errors.name}</div>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Image</Form.Label>
                                <Form.Control type="file"
                                name="File"
                                value={this.state.fields.File || ""}
                                onChange={this.handlechange}  />
                                    <div className="errorMsg1">{this.state.errors.File}</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Weight</Form.Label>
                                <Form.Control type="text"
                                name="weight"
                                value={this.state.fields.weight || ""}
                                onChange={this.handlechange} />
                                <div className="errorMsg1">{this.state.errors.weight}</div>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Rate</Form.Label>
                                <Form.Control type="number" 
                                name="rate"
                                value={this.state.fields.rate || ""}
                                onChange={this.handlechange} />
                                    <div className="errorMsg1">{this.state.errors.rate}</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>HSN Number</Form.Label>
                                <Form.Control type="number" 
                                name="HSNnumber"
                                value={this.state.fields.HSNnumber || ""}
                                onChange={this.handlechange} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Others</Form.Label>
                                <Form.Control type="text" 
                                name="other"
                                value={this.state.fields.other || ""}
                                onChange={this.handlechange} />
                                    <div className="errorMsg1">{this.state.errors.other}</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                   <Col md={8}>
                   <Button variant="primary"
                        size="lg"
                        block 
                        type="submit"
                        >
                        Submit
                   </Button>
                   </Col>
               </Row>
            </Form> 
        )
    }
}
export default productdetail;