export default function countSample(state = {sample: 'なし'}, action) {
  let check = state.check;
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return {sample: sample + action.sample};
    default:
      return state;
  }
}
