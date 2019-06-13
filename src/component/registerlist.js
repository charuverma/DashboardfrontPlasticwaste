import React from "react";
import axios from "axios";
import "../style/registerlist.css";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Pagination from 'react-bootstrap/Pagination';

class registerlist extends React.Component {
  state = {
    data: [],
    currentPage:0,
    pageCount:0
  };
  async componentDidMount() {
    var options = {
      method: "POST",
      url: "http://localhost:8000/post/list1",
      data: {}
    };
    const { data } = await axios(options);
    this.setState({
      data: data.data,
      currentPage: data.currentPage,
      pageCount: data.pageCount
    });
  }
  async delete(id) {
    var options = {
      method: "POST",
      url: "http://localhost:8000/post/delete",
      data: { id }
    };
    await axios(options);
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    });
  }
  render(){
    return (
      <div>
        <Row>
          <Button variant="secondary" href="./registerform">
            Add Customer Details
          </Button>
        </Row>

        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>EmailId</th>
                <th>Businessprofile</th>
                <th>Companyname</th>
                <th>JobTitle</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Country</th>
                <th>MobileNo</th>
                <th>Address</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.Lastname}</td>
                  <td>{item.emailid}</td>
                  <td>{item.BusinessProfile}</td>
                  <td>{item.CompanyName}</td>
                  <td>{item.JobTitle}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.State}</td>
                  <td>{item.zip}</td>
                  <td>{item.Country}</td>
                  <td>{item.MobileNo}</td>
                  <td>{item.Address}</td>
                  <td>
                    {" "}
                    <Link to={`/registerlist/edit/${item.id}`}>Edit</Link>
                    <Button
                      variant="danger"
                      onClick={() => this.delete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        {this.renderPaging()}
      </div>
    );
  }

  renderPaging(){
    const items = [];
    for (let number = 1; number <= this.state.pageCount; number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.state.currentPage}>
          {number}
        </Pagination.Item>,
      );
    }
    return(
      <Pagination bsPrefix="list-pagination">{items}</Pagination>
    ) 
  }
}

export default registerlist;
