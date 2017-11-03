import React from 'react';
import ReactDOM from 'react-dom';


export default class Docs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "NULLL",
            docs: ["V17498-ICND-0001", "V17498-ICND-0002", "V17498-BDND-0003", "V17498-SRXD-0001"]
        }
    }
    updateName(newName){
        this.setState({ name: newName })
    }
    render(){
        return(
            <div>
                <ul>
                    <Doc docs={this.state.docs} />
                </ul>    
            </div>
        );
    }
}
class Doc extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            docs: this.props.docs
        }
    }
    render(){
        return(
            <div>{this.state.docs.map((item, index) => {
                return (
                    <li key={item}>
                        <input type="checkbox" />
                        {item}
                    </li>
                );
                
            })}</div>
        );
    }
}