import React, {Component} from 'react';
import { connect } from 'react-redux';
import MainPage from '../component/MainPage';
import { CHECK_ACTION } from '../action/index';

function mapStateToPropsContainer (state) {
  console.log(state)
  return {
    check: state.check
  };
}

function mapDispatchToPropsContainer (dispatch) {
  return {
    onClickCheck: () => dispatch(CHECK_ACTION)
  };
}

let Main = connect(
  mapStateToPropsContainer,
  mapDispatchToPropsContainer
)(MainPage);

export default Main;
