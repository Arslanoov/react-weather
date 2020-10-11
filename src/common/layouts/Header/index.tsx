import * as React from 'react';
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// @ts-ignore
import logo from './logo.svg';

const Header: React.FunctionComponent = () => {
  return (
    <>
      <header className='header'>
        <Navbar>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Weather
          </Navbar.Brand>

          <Nav
            activeKey="/"
          >
            <Nav.Item href="/">
              <Nav.Link as={Link} to="/" >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item href="/">
              <Nav.Link as={Link} to="/weather" >
                Weather
              </Nav.Link>
            </Nav.Item>

            <Nav.Item href="/">
              <Nav.Link as={Link} to="/404" >
                404
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </header>
    </>
  )
};

export default Header;