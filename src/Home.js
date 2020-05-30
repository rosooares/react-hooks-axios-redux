import React from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';

const stylesApp = {
  marginTop: 40
};

function App() {
  return (
    <div className="container">
      <h1> Procure seu heroí </h1>
      <div className="row" style={ stylesApp }> 
        <div className="col-md-6">
          <CreatePost />
        </div>
        <div className="col-md-6">
          <PostList />
        </div>
      </div>
    </div>
  );
}


export default App;
