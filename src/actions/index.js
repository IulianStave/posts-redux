import jsonPlaceholder from '../apis/jsonPlaceholder';

// action creator fetchPosts with async await pair
// with redux-thunk we can manually dispatch an action
// redux thunk allows returning a function

// export const fetchPosts = async () => {
export const fetchPosts = () => {
  // return async (dispatch, getState) => {
  return async dispatch => {
    //const response = await jsonPlaceholder.get('/posts');
    const response = await jsonPlaceholder.get('/posts');
    // return {
    //   type: 'FETCH_POSTS',
    //   payload: response
    // };
    dispatch({type: 'FETCH_POSTS', payload: response.data})
  };
};