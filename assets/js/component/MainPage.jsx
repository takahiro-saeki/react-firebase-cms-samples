import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../data/mui.js';
import Header from './Header';
import SideMenu from './SideMenu';
import style from '../../css/style.css';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={Mui}>
        <main>
          <Header title="メニュー"/>
          <SideMenu />
          <div
            className={style['content-wrap']}
            onClick={this.props.onClickCheck}>
              <section>
                
              </section>
          </div>
        </main>
      </MuiThemeProvider>
    )
  }
}
