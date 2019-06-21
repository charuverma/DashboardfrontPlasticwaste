import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "../style/material-dashboard.css";
import "../style/demo.css";
import axios from 'axios';
import { Link } from "react-router-dom";

class showproduct extends React.Component{
    state = {
        data:[]
    };
    async componentDidMount(){
        var options={
            method:'POST',
            url:'http://localhost:8000/products/list',
            data:{}
        }
        const {data}= await axios(options)
        this.setState({data:data.result});
    }
    async delete(id) {
        var options = {
          method: "POST",
          url: "http://localhost:8000/products/delete",
          data: { id }
        };
        await axios(options);
        this.setState({
          data: this.state.data.filter(item => item.id !== id)
        });
      }

    render(){
        return(
        <div>
            <Row>
                <Button variant="secondary" href="/Productdetail">
                    Add Product
                </Button>
            </Row>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>File</th>
                    <th>Weight</th>
                    <th>Rate</th>
                    <th>HSN Number</th>
                    <th>other</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.File}</td>
                        <td>{item.weight}</td>
                        <td>{item.rate}</td>
                        <td>{item.HSNnumber}</td>
                        <td>{item.other}</td>
                        <td>
                            <Link to={`/showproduct/edit/${item.id}`}>Edit</Link>
                        </td>
                        <td><Button variant="danger" onClick={()=> this.delete(item.id)}>Delete</Button></td>
                    </tr>
                    ))}
                </tbody>
             </Table>
        </div>
        )
    }
}

export default showproduct;