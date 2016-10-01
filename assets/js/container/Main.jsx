import React, {Component} from 'react';
import { connect } from 'react-redux';
import MainPage from '../component/MainPage';
import { CHECK_ACTION, SIDEBAR_CHECK_MOBILE, SIDEBAR_CHECK_PC } from '../action';

function mapStateToPropsContainer (state) {
  console.log(state)
  return {
    check: state.count.check,
    sideCheck: state.sideCheck
  };
}

function mapDispatchToPropsContainer (dispatch) {
  return {
    onClickCheck: () => dispatch(CHECK_ACTION),
    onSideBarMobile: () => dispatch(SIDEBAR_CHECK_MOBILE),
    onSideBarPc: () => alert('test用'),
    onTest: () => alert('test用'),
    onAlertTest: () => dispatch(CHECK_ACTION)
  };
}

let Main = connect(
  mapStateToPropsContainer,
  mapDispatchToPropsContainer
)(MainPage);

export default Main;
