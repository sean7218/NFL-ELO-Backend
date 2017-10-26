import React from 'react';
import ReactDOM from 'react-dom';

export class Panel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            isHidden: false
        }
    }

    render(){
        return (
            <div>
                <button>Check In</button>
            </div>
        );
    }
}