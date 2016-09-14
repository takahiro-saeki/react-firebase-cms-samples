import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../data/mui.js';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={Mui}>
        <main>
          <div onClick={this.props.onClickCheck}>テストです</div>
        </main>
      </MuiThemeProvider>
    )
  }
}
