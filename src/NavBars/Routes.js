import Home from "./Home";
import Phones from "./Phones";
import Accessories from "./Accessories";
import Cart from "./Carts";
import Layout from "../Components/Layout"
import React, { Component } from 'react';
import styled from "styled-components"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #42f5e3;
   
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #000000;
    &:hover {
      color: white;
      margin-botom:20px;
    }
  }
`;

class Routes extends Component {
    render() { 
        return ( 
            <div className="App">
                <Styles>
      <React.Fragment>
        <Layout>
        <Router>
        <div>
 

<Navbar expand="xlg">
  <Navbar.Brand href="/">PHONE SHOP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Phones">Phones</Nav.Link>
      <Nav.Link href="/Accessories">Accessories</Nav.Link>
      <Nav.Link href="/Cart">Cart</Nav.Link>

<NavDropdown title="Phones" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Samsung</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Iphones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Others</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

          
          <Switch>
              <div>
            <Route exact path="/" component={Home}/>
            <Route path="/phones" component={Phones}/>

            <Route path="/accessories" component={Accessories}/>
            <Route path="/cart" component={Cart}/>
            </div>
          </Switch>
          </div>
        </Router>
        </Layout>
      </React.Fragment>
      </Styles>
      </div>
     
    );
       
    }
}
 
export default Routes;