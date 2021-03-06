import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

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
            isEditing: false,
            editBoxes: []
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleCreate(e){
        let docs = this.state.docs;
        docs.push(this.refs.add.value)
        this.setState({ docs: docs })
        e.preventDefault();
    }
    handleUpdate(id, e){
        let docs = this.state.docs;
        docs[id] = e.target.value;
        console.log(e.target);
        if(this.state.isEditing){
            this.setState({docs: docs})
        }
        this.setState({isEditing: !this.state.isEditing})
    }
    handleDelete(id, e){
        console.log("Handling Delete Document" + id.toString());
        let docs = this.state.docs;
        docs.splice(id, 1);
        this.setState({
            docs: docs
        })
    }
    handleChange(e){
        this.setState({
            value: this.refs.add.value,
            value2: this.refs.filter.value
        })
    }
    handleSearch(e){
        let filtered = this.state.docs.filter( obj => obj == this.refs.filter.value);
        this.setState({
            docs: filtered
        })
        e.preventDefault();
    }
    handleReset(e){
        this.setState({ docs: [1,3,4,5,6,7,8,10,2]})
        e.preventDefault();
    }
    enableEditMode(){
        console.log("Enable edit mode");
        this.setState({
            isEditing: true
        })
    }
    updateName(newName){
        this.setState({name: newName})
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
        let isEditing = this.state.isEditing;
        return (
            <div>
                <h3>Document List</h3>
                <ListGroup>
                    {this.state.docs.map((item,index)=>{
                        return (
                            <Doc name={item} uuid={index} />
                        );
                    })}
                </ListGroup>
                <form>
                    <input type="text" ref="add" onChange={this.handleChange} />
                    <button onClick={this.handleCreate}>Add</button>
                </form>
                <form>
                    <input type="text" ref="filter" onChange={this.handleChange} />
                    <button onClick={this.handleSearch}>Search</button>
                    <button onClick={this.handleReset}>Reset</button>
                </form>
            </div>
        );
    }
}

Documents.defaultProps = {
    color: 'blue',
    docs: [1, 2, 3, 4, 5, 6, 7]
  };

class Doc extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
        }
    }

    updateName(){
        this.props.updateName("NewNameHAHAHA")
    }

    render(){
        let styles = {
            editbutton: {
                float: 'right'
            },
            deleteButton: {
                float: 'right'
            }
        };
        return(
            <div>
                <ListGroupItem key={props.uuid}>
                    <div>
                        {this.state.name}
                        <button style={styles.editbutton} onClick={this.updateName}>Edit</button>
                        <button style={styles.deleteButton}>Delete</button>
                    </div>
                </ListGroupItem>
            </div>
        );
    }
}