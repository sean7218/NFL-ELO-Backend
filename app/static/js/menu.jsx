import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

export class Welcome extends React.Component {
    render() {
        return (
            <h1>Hello, World! From Welcome </h1>
        );
    }
}

// An Example of Functional Component
export const Menu = (props) => {
    return (
        <p>From Menu {props.name}</p>
    );
}

export const Boards = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

export const NavbarInstance = (props) => { 
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }


