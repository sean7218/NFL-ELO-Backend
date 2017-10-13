import React from 'react';
import ReactDOM from 'react-dom';


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




