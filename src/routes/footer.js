import React from "react";
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
const Footer = (props) => {
  console.log(props.count);
  console.log(props.increment);
  console.log(props.decrement);
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="copyright float-right">
          &copy;
          <script>document.write(new Date().getFullYear())</script>,made with by
          <a href="/" target="_blank">
            Creative Tim
          </a>
          for a better web.
        </div>
        <div>
        <p>{props.count}</p>
            <Button onClick={props.increment}>+</Button>
            <Button onClick={props.decrement}>-</Button>
          </div>
      </div>
    </footer>
  );
};

function mapStateToProps(state){
  return{
    count:state
  }
};
function mapDispatchToProps(dispatch){
  return{
    increment: ()=> dispatch({type:'Increment'}),
    decrement: ()=> dispatch({type:'Decrement'})
  }
};
export default connect(mapDispatchToProps,mapStateToProps)(Footer);