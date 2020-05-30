import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

function PostList({ posts }) {
  if(!posts.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <div>
      {posts.map(post => {
        return (
          <Post post={ post } key={ post.id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
)(PostList);