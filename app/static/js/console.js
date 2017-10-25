import React from 'react';
import ReactDOM from 'react-dom';



export class Console extends React.Component
{
    render(){
        return(
            <div>
                <SelectBox />
            </div>
        );
    }
}

function SelectBox(){
    return(
        <div>
            <select>
                <option value="volvo">UofL</option>
                <option value="saab">UK</option>
                <option value="mercedes">MU</option>
                <option value="audi">Georgia Tech</option>
            </select>
        </div>
    );
}