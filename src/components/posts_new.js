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

import { createPost } from '../actions/index';

class PostsNew extends Component {

  render () {
    //props come with reduxForm
    //use on onSubmit handler on form
    const handleSubmit = this.props.handleSubmit;
    const fields = this.props.fields;
    const title = fields.title;
    const categories = fields.categories;
    const content = fields.content;

    //es6 sugar would be like
    //const { fields : {title, categories, content}, handleSubmit} = this.props;

    //logging
    //console.log(title);
                          //handleSubmit is a reduxForm Method
    return (
        <form onSubmit={ handleSubmit(this.props.createPost) } >

          <h3>create a Post</h3>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
          </div>

          <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" {...categories}/>
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" {...content}/>
          </div>

          <button type="submit" className="btn btn-primary">submit</button>
        </form>
    );
  }
}


//connect: 1st arg = mapStateToProps, 2nd arg = mapDispatchToProps
//reduxForm 1st arg = form config, 2nd arg = mapStateToProps, 3rd ARG=  mapDispatchToProps
export default reduxForm({
  //form matches the key that we creted in the reducer_posts
  //behind the sences: user input is recorded in application state
  form : 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
