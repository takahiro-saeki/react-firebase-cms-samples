import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {SIDEBAR_CHECK_MOBILE} from '../action/index.js';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true
    }
    this.firstCheck = this.firstCheck.bind(this)
  }

  windowCheck() {
    window.addEventListener('resize', () => {
      this.firstCheck();
    })
  }

  firstCheck() {
    const windowSize = window.innerWidth;
    if(windowSize > 768) {
      this.setState({check: true})
    } else {
      this.setState({check: false})
    }
  }

  componentDidMount() {
    this.firstCheck();
    this.windowCheck()
  }

  render() {
    const sidebarCheck = () => {
      if (this.state.check === true) {
        return (
          <Drawer open={this.props.sideCheck}>
            <MenuItem onClick={this.props.onSideBarMobile}>Menu Item</MenuItem>
            <MenuItem onClick={this.props.onTest}>Menu Item 2</MenuItem>
          </Drawer>
        )
      } else {
        return false;
      }
    }
    return (
      <div>
        {sidebarCheck()}
      </div>
    );
  }
}
