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
    //repvent inital error message by ternary, where x.TOUCHED, comes along with form
    return (
        <form onSubmit={ handleSubmit(this.props.createPost) } >

          <h3>create a Post</h3>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
            <div className="text-help">
              { title.touched ? title.error : '' }
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" {...categories}/>
              <div className="text-help">
                { categories.touched ? categories.error : ''}
              </div>
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" {...content}/>
              <div className="text-help">
                { content.touched ? content.error : ''}
              </div>
          </div>

          <button type="submit" className="btn btn-primary">submit</button>
        </form>
    );
  }
}

function validate (values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a title';
  }
  if(!values.categories) {
    errors.categories = 'give at least one category';
  }
  if(!values.content) {
    errors.content = 'one might write some content here?';
  }

  return errors;
}
//consume errors by {title.error} on jsx component like line 42

//connect: 1st arg = mapStateToProps, 2nd arg = mapDispatchToProps
//reduxForm 1st arg = form config, 2nd arg = mapStateToProps, 3rd ARG=  mapDispatchToProps
export default reduxForm({
  //form matches the key that we creted in the reducer_posts
  //behind the sences: user input is recorded in application state
  //add validate by applying it to the configuration object
  form : 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);