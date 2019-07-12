import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import category from "./component/category";
import Role from "./component/Role";
import Rolelist from "./component/Rolelist";
import Productdetail from "./component/Productdetail";
import Header from "./routes/header";
import Sidebar from "./routes/sidebar";
import Footer from "./routes/footer";
import Dashboard from "./routes/Dashboard";
import showproduct from "./component/showproduct";
import categorylist from './component/categorylist';
import "../src/style/material-dashboard.css";
import "../src/style/demo.css";
import login from "./component/login";
import register from "./component/register";
import Cookies from "universal-cookie";
const cookies = new Cookies();


class MainContainer extends React.Component {
  render() {
    if (!cookies.get('emailid') || cookies.get('emailid') === '') {
      return (
        <div>
          <Route path="/login" component={login} />
          <Route path="/register" component={register} />
        </div>
      );
    } else {
      return (
        <div container-fluid>
          <Row className="wrapper">
            <Col md={12}>
              <Header />
            </Col>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9} className='main-panel'>
              <Switch>
                <Route path='/category' component={category} />
                <Route path='/categorylist/edit/:id' component={category} />
                <Route path='/categorylist' component={categorylist} />
                <Route path='/Role' component={Role} />
                <Route path='/Rolelist/edit/:id' component={Role} />
                <Route path='/Rolelist' component={Rolelist} />
                <Route path='/Productdetail' component={Productdetail} />
                <Route path='/showproduct/edit/:id' component={Productdetail} />
                <Route path='/showproduct' component={showproduct} />
                <Route path='/' component={Dashboard} />
              </Switch>
            </Col>
            <Col md={12}>
              <Footer />
            </Col>
          </Row>
        </div>
      );
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <MainContainer />
      </Router>
    );
  }
}
export default App;
