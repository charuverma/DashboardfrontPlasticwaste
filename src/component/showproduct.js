import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "../style/material-dashboard.css";
import "../style/demo.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
const baseurl = "http://192.168.100.22:8000/";
class showproduct extends React.Component{
    state = {
        data:[],
        currentPage:0,
        pageCount:0
    };

    async componentDidMount(){
       this.loadData();
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
      changePage(number){
        this.loadData(number);
      }
      async loadData(page = 1){
        var options = {
          method: "POST",
          url: "http://localhost:8000/products/list1",
          data: {page}
        };
        const {data } = await axios(options);
        this.setState({
          data: data.data,
          currentPage: data.currentPage,
          pageCount: data.pageCount
        });
      }
    render(){
        return(
            <div>
                <Button variant="secondary" href="/productdetail">
                    Add Product
                </Button>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>File</th>
                              <th>Weight</th>
                              <th>Rate</th>
                              <th>HSN Number</th>
                              <th>Other</th>
                              <th></th>
                              <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img src={baseurl + item.File} className="Image"/></td> 
                                    <td>{item.weight}</td>
                                    <td>{item.rate}</td>
                                    <td>{item.HSNnumber}</td>
                                    <td>{item.other}</td>
                                    <td>
                                      <Link to={`/showproduct/edit/${item.id}`}>Edit</Link>
                                    </td>
                                    <td className="button"><Button variant="danger" onClick={()=> this.delete(item.id)} >Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {this.renderPaging()}
                    </div>
            
        )
    }
    renderPaging(){
        const items = [];
        for (let number = 1; number <= this.state.pageCount; number++) {
          items.push(
            <Pagination.Item
              key={number}
              active={number === this.state.currentPage}
              onClick={() => this.changePage(number)}>
              {number}
            </Pagination.Item>,
          );
        }
        return(
          <Pagination bsPrefix="list-pagination">{items}</Pagination>
        ) 
      }
}

export default showproduct;