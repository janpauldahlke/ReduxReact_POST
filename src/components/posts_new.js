/* TODO
  1.  scaffold component, that show newPost form
  2.  add component to routes file as new URL
  3.  implement button in index <create new Post>
  4.  add the relevant forms (&validate them) to the new Post component //
      --> npm install --save redux-form
      downgrade this to met react 0.14.8
  5.  create action to save content and update the reducer
*/


import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; //similar to { connect }

class PostsNew extends Component {
  render () {
    return (
        <form>
          <h3>create a Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">submit</button>
        </form>
    );
  }
}

//export default reduxform({**})(PostNew) connect alike
export default reduxForm({
  //form matches the key that we creted in the reducer_posts
  //behind the sences: user input is recorded in application state
  form : 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
