export default function count(state = {check: false, sideCheck: false}, action) {
  let check = state.check;
  let sidebar = state.sideCheck;
  switch (action.type) {
    case 'CHECK_ACTION':
      return {check: true};
    case 'SIDEBAR_CHECK_MOBILE':
      return console.log('tests');
    case 'SIDEBAR_CHECK_PC':
      return {sideCheck: true};
    default:
      return state;
  }
}
