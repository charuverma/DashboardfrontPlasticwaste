import React from "react";
import axios from "axios";
import "../style/material-dashboard.css";
import "../style/demo.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../style/productlist.css";
class categorylist extends React.Component {
  state = {
    data: []
  };
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
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.Parentcategory}</td>
                  <td>{item.Categoryname}</td>
                  <td>{item.Description}</td>
                  <td>{item.Status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
}

export default categorylist;
