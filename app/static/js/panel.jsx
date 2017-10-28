import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const DocumentCard = () => (
    <Card>
      <CardHeader
        title="V17498-ICND-0001"
        subtitle="PID Diagram"
        avatar=""
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="" alt="" />
      </CardMedia>
      <CardTitle title="V17498-ICND-0001" subtitle="Control System PID Diagram" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  );
  

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