import React from "react";
import ReactDOM from "react-dom";
import { Appbar, Documents}  from "./menu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Doc from './docs';


export default class App extends React.Component {
  render () {
    return (
      <div>
          <MuiThemeProvider>
            <Appbar />
          </MuiThemeProvider>
          <Doc />
      </div>

    );
  }
}