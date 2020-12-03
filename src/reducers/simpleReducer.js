
const defaultState = {
  events: ['sau','mou','sam'],
  name:{fname: 'sau'}
};

export default (state = defaultState, action) => {
  console.log("state", state)
  switch (action.type) {
    case 'ADD_ELEMENT':
    state.name.fname='mou'
    return {...state, name: state.name }
    default:
      return state
  }
}
