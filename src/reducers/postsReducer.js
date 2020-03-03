export default (state = [], action) => {
  // return values must be other than undefined
  // do not mutate state
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
  
};