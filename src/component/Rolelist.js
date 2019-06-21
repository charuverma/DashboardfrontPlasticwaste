import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "../style/material-dashboard.css";
import "../style/demo.css";
import { Link } from "react-router-dom";
import axios from 'axios';

class Rolelist extends React.Component{
    state = {
        data:[],
    };
    async componentDidMount(){
          var options={
            method:'POST',
            url:'http://localhost:8000/Roles/list',
            data:{}
        }
        const {data}= await axios (options);
        this.setState({
            data:data.result
        });
    }
    async delete(id){
      var options={
        method:'POST',
        url:'http://localhost:8000/Roles/delete',
        data:{id}
      }
      await axios (options);
      this.setState({
        data:this.state.data.filter(item => item.id!==id)
      });
    }
    render(){
        return(
            <div>
                    <Row>
          <Button variant="secondary" href="/Role">
            Add Role
          </Button>
        </Row>
          
            <Table striped bordered hover responsive>
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.Status}</td>
                <td><Link to={`/Rolelist/edit/${item.id}`}>Edit</Link></td>
                <td><Button variant="danger"
                onClick={()=> this.delete(item.id)}
                > Delete
                  </Button></td>
              </tr>
            ))}
            
          </tbody>
        </Table>
        </div>
        )
    }
}

export default Rolelist;