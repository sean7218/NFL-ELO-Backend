import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
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
            items: this.props.docs
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRead = this.handleRead.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);
    }

    handleCreate(e){
        let arr = this.state.items;
        arr.push(this.state.value)
        this.setState({
            items: arr
        })
        e.preventDefault();
    }

    handleRead(){
        alert("Handling Read Document");
        // This encompasses read from API and also filter based on search
    }

    handleUpdate(id, e){
        console.log("Handling Update Document" + id.toString());
    }

    handleDelete(id, e){
        console.log("Handling Delete Document" + id.toString());
    }

    handleChange(e){
        this.setState({
            value: this.refs.add.value,
            value2: this.refs.filter.value
        })
    }

    handleFilter(e){
        let filtered = this.state.items.filter( obj => obj > this.refs.filter.value);
        this.setState({
            items: filtered
        })
        e.preventDefault();
    }

    handleResetFilter(e){
        this.setState(
            {
                items: this.props.docs
            }
        )
        e.preventDefault();
    }
    componentWillMount(){
        // fetch('http://swapi.co/api/people/?format=json')
        //     .then( response => response.json())
        //     .then( data => {})
    }
    enableEditMode(){
        console.log("Enable edit mode");
    }
    render() {
        let styles = {
            editbutton: {
                float: 'right'
            },
            deleteButton: {
                float: 'right'
            }
        };

        return (
            <div>
                <h3>Document List</h3>
                <ListGroup>
                    {this.state.items.map((item,index)=>{
                        return (
                            <ListGroupItem key={index.toString()}>
                                <div onDoubleClick={this.enableEditMode.bind(this)}>
                                {item}    
                                <button style={styles.editbutton} onClick={(event) => this.handleUpdate(index, event)}>Edit</button>
                                <button style={styles.deleteButton} onClick={this.handleDelete.bind(this, index)}>Delete</button>
                                </div>
                                
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
                <form>
                    <input type="text" ref="add" onChange={this.handleChange} />
                    <button onClick={this.handleCreate}>Add</button>
                </form>
                <form>
                    <input type="text" ref="filter" onChange={this.handleChange} />
                    <button onClick={this.handleFilter}>Search</button>
                    <button onClick={this.handleResetFilter}>Reset</button>
                </form>
            </div>
        );
    }
}

Documents.defaultProps = {
    color: 'blue',
    docs: [1, 2, 3, 4, 5, 6, 7]
  };