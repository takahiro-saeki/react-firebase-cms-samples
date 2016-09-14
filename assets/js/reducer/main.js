export default function count(state = {check: 'なし'}, action) {
  let check = state.check;
  switch (action.type) {
    case 'CHECK_ACTION':
      return {check: check + action.check};
    default:
      return state;
  }
}
