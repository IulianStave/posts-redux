import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  //calls the action creator fetchPosts
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return <div> Post List</div>;
  }
}

//export default Postlist;
export default connect(
  null,
  {fetchPosts: fetchPosts}
  )(PostList);