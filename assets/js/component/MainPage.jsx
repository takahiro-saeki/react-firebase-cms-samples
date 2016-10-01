import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../data/mui.js';
import Header from './Header';
import Test from './Test';
import SideMenu from './SideMenu';
import style from '../../css/style.css';

export default class Main extends Component {
  render() {
    const checkTest = () => {
      if(this.props.check) {
        return(<div>true</div>)
      } else {
        return(<div>false</div>)
      }
    }
    return (
      <MuiThemeProvider muiTheme={Mui}>
        <main>
          <Header title="メニュー"/>
          <Test test='これはテストです'/>
          <div
            className={style['content-wrap']}
            onClick={this.props.onAlertTest}>
              <section>
                テスト
                {this.props.check}
              </section>
          </div>
          {checkTest()}
        </main>
      </MuiThemeProvider>
    )
  }
}
