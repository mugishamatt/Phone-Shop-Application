import Home from "./Home";
import Phones from "./Phones";
import Accessories from "./Accessories";
import Cart from "./Carts";
import Layout from "../Components/Layout"
import React, { useEffect } from 'react';
import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { getNumbers } from "../actions/getActions"
import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";

// style component

const Styles = styled.div`
  .navbar {
    background-color: #42f5e3;
   
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #000000;
    &:hover {
      color: #ff8000;
      margin-botom:20px;
    }
  }
`;

const Routes = (props) => {
  console.log(props.basketProps)

  useEffect(() => {
    getNumbers();

  }, []);
  return (
    <div className="App">
      <Styles>
        <React.Fragment>
          <Layout>
            <Router>
              <div>


                <Navbar expand="lg">
                  <Navbar.Brand href="/">PHONE SHOP</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/Phones">Shop</Nav.Link>
                      <Nav.Link href="/Accessories">Accessories</Nav.Link>


                      <NavDropdown title="Phones" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Samsung</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Iphones</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Others</NavDropdown.Item>
                        <NavDropdown.Divider />
                      </NavDropdown>
                      {/* <Nav.Link className="cart" href="/Cart"><FaShoppingCart/>Cart</Nav.Link> */}
                      <div className="carticon">
                        <Navbar.Brand className="cart" href="cart">Cart<FaShoppingCart /><span>{props.basketProps.basketNumbers}</span></Navbar.Brand>
                      </div>
                    </Nav>
                    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
                  </Navbar.Collapse>
                </Navbar>


                <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/phones" component={Phones} />
                    <Route path="/accessories" component={Accessories} />
                    <Route path="/cart" component={Cart} />
                  </Switch>
                </div>
              </div>
            </Router>

          </Layout>
        </React.Fragment>
      </Styles>
    </div>

  );

}

const mapStateToProps = (state) => ({
  basketProps: state.basketState
})
export default connect(mapStateToProps, { getNumbers })(Routes);