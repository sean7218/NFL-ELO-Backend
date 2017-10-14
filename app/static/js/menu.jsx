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

export function Boards(props) {
    const boards = [1, 2, 3, 4, 5];
    const listBoards = boards.map((num)=>{
        <li key={num.toString()}>{num}</li>
    });
    return (
        <ul>
            {listBoards}
        </ul>
    );
}


