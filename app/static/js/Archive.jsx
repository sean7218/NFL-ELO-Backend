import React from 'react';
import ReactDOM from 'react-dom';

export class Welcome extends React.Component {
    render() {
        return (
            <h1>Hello, World!</h1>
        );
    }
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

// First Method Creating a Component
// class AppS extends React.Component {
//   render() {
//     return <h1>Hello World</h1>
//   }
// }

// Second Method Creating a Component
// const AppS = () => <h1>Hello Stateless</h1>

// Third Point: Making You Wrap All in One Div
// class AppS extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <b>Bold</b>
//       </div>
//     )
//   }
// }

// Fourth Point: Passing data to Component and default values
// class AppS extends React.Component {
//   render(){
//     let txt = this.props.txt
//     return <h1>{txt}</h1>
//   }
// }
// AppS.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
// AppS.defualtProps = {
//   txt: "this is the "
// }

// // Fifth Point: manage React Component State with setState
// class AppS extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       txt: "this is the state txt"
//     }
//   }
//   // This is custome component
//   update(e) {
//     this.setState({txt: e.target.value})
//   }

//   render(){
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)} />
//         <h1>{this.state.txt}</h1>
        
//       </div>
//     )
//   }
// }

// const Widget = (props) =>  <input type="text" onChange={props.update} />

// An Example of Functional Component
export const Menu = (props) => {
    return (
        <p>Sport Prediction Site by {props.name}</p>
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