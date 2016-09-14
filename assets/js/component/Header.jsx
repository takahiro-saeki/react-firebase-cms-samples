import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

const Header = ({title}) => (
  <AppBar
    title={title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Header;
