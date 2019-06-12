import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import productform from "./component/productform";
import productlist from "./component/productlist";
import registerlist from "./component/registerlist";
import registerform from "./component/registerform";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Footer from "./component/footer";
import Dashboard from "./routes/Dashboard";
import "../src/style/material-dashboard.css";
import "../src/style/demo.css";
import login from "./component/login";
import register from "./component/register";

class MainContainer extends React.Component {
	render() { if(!login.status){
		return(
		<div><Route path="/login" component={login} />
			<Route path ="/register" component={register} />
		
		</div>
		)
	} 
	else{ 
		return (
			<div>
        <div className='wrapper'>
          <Header />
          <Sidebar />
          <div className='main-panel'>
				<Switch>
            
						<Route path ="/register" component={register} />
						<Route path="/productform" component={productform} />
						<Route
						path="/productlist/edit/:id"
						component={productform}
					/>
						<Route path="/productlist" component={productlist} />
						<Route path="/registerform" component={registerform} /> 
						<Route
						path="/registerlist/edit/:id"
						component={registerform}
					/>
						<Route path="/registerlist" component={registerlist} />
            <Route path="/" component={Dashboard} />
				</Switch>
				
         	 </div>
        </div>
			<div>
					<Footer />
				</div>
			</div>
	
		);}
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
