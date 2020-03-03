import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  //calls the action creator fetchPosts
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    console.log(this.props.posts);
    return <div> Post List</div>;
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts};
}

//export default Postlist;
export default connect(
  mapStateToProps,
  {fetchPosts: fetchPosts}
  )(PostList);