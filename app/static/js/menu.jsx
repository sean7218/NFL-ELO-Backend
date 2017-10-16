import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Welcome extends React.Component {
    render() {
        return (
            <h1>Hello, World!</h1>
        );
    }
}

// An Example of Functional Component
export const Menu = (props) => {
    return (
        <p>Sport Prediction Site by {props.name}</p>
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
            <a href="#">Sports Prediction</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">NBA</NavItem>
          <NavItem eventKey={2} href="#">NFL</NavItem>
          <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Login</MenuItem>
            <MenuItem eventKey={3.2}>Register</MenuItem>
            <MenuItem eventKey={3.3}>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }


export const Appbar = () => {
    return (
        <AppBar
        title="Sports Prediction"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    );
}

export class Documents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            desc: "",
            rev: 1.0,
            docs: this.props.docs,
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRead = this.handleRead.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleCreate(){
        alert("Handling Add Document");
        let arr = this.state.docs;
        arr.push(20)
        this.setState({
            docs: arr
        })
    }

    handleRead(){
        alert("Handling Read Document");
    }

    handleUpdate(){
        alert("Handling Update Document");
    }

    handleDelete(){
        alert("Handling Delete Document");
    }

    componentWillMount(){
        this.setState({
            name: "Show Drawing"
        })
    }

    render() {
        return (
            <div>
                <h3>Document List</h3>
                <ul>
                    {this.props.docs.map((item)=>{return <li key={item.toString()}>{item}</li>})}
                </ul>
                <button onClick={this.handleCreate}>Add</button>
            </div>
        );
    }
}

Documents.defaultProps = {
    color: 'blue',
    docs: [1, 2, 3, 4, 5, 6, 7]
  };