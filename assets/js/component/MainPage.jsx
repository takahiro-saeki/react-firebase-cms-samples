import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../data/mui.js';
import Header from './Header';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={Mui}>
        <main>
          <Header title="メニュー"/>
          <div onClick={this.props.onClickCheck}>テストです</div>
        </main>
      </MuiThemeProvider>
    )
  }
}
