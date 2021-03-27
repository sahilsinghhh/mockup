
import React, { Component } from 'react';
import {
  BrowserRouter as Router,  
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import Product from './Product'
import Description from './Description'
import Attributes from './Attributes'

class Navigation extends Component {
  
  render() { 
    return ( 
<>

<Router>
      <div> 
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>         
          </ul>
        

          <Route exact path="/" component = {Home} />   
          <Route exact path="/product" component = {Product} />  
          <Route exact path="/description" component = {Description} />  
          <Route exact path="/attributes" component = {Attributes} />     
      </div>
    </Router>

</>

     );
  }
}
 
export default Navigation;