import React from "react";
import axios from "axios";
import "../style/material-dashboard.css";
import "../style/demo.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import "../style/productlist.css";
import Pagination from 'react-bootstrap/Pagination';
class categorylist extends React.Component {
  state = {
    data: [],
    currentPage:0,
    pageCount:0
  };
  async componentDidMount() {
   this.loadData();
  }
  async delete(id) {
    var options = {
      method: "POST",
      url: "http://localhost:8000/categories/delete",
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
  async loadData(page = 1) {
    var options = {
      method: "POST",
      url: "http://localhost:8000/categories/list1",
      data: {page}
    };
    const { data } = await axios(options);
    this.setState({
      data: data.data,
      currentPage: data.currentPage,
      pageCount: data.pageCount
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Button variant="secondary" href="/category">
            Add category
          </Button>
        </Row>

        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Parentcategory</th>
                <th>Categoryname</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.Parent}</td>
                  <td>{item.Categoryname}</td>
                  <td>{item.Status}</td>
                  <td><Link to ={`categorylist/edit/${item.id}`}>Edit
                  </Link></td>
                  <td><Button
                      variant="danger"
                      onClick={() => this.delete(item.id)}
                    >
                      Delete
                    </Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          {this.renderPaging()}
        </Row>

      </div>
    );
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

export default categorylist;
