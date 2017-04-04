/* TODO
  1.  scaffold component, that show newPost form
  2.  add component to routes file as new URL
  3.  implement button in index <create new Post>
  4.  add the relevant forms (&validate them) to the new Post component //
      --> npm install --save redux-form
      downgrade this to met react 0.14.8
  5.  create action to save content and update the reducer
*/


import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'; //similar to { connect }
import { Link } from 'react-router';

import { createPost } from '../actions/index';

class PostsNew extends Component {
  // context() usage
  static contextTypes = {
    router : PropTypes.object
  };

  onSubmit (props) {
    this.props.createPost(props)
      .then(() => {
        //blogpost has been created, now navgiagte back to index
        //"listen" to resolve of payload.promise()
        //navigate by this.context.router.push() with
        //the new path to go to
        this.context.router.push("/");
      })
  };
  //define on object on PostNew Class so PostNew.contextTypes would be a valid call where it references to Router instances

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
    // .VALID() from form TODO highlight error fields red + bootstrap
    return (
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >

          <h3>create a Post</h3>

          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
            <div className="text-help">
              { title.touched ? title.error : '' }
            </div>
          </div>

          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Category</label>
            <input type="text" className="form-control" {...categories}/>
              <div className="text-help">
                { categories.touched ? categories.error : ''}
              </div>
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea className="form-control" {...content}/>
              <div className="text-help">
                { content.touched ? content.error : ''}
              </div>
          </div>

          <button type="submit" className="btn btn-primary">submit</button>
          <Link to="/" className="btn btn-danger">cancel</Link>
        </form>
    );
  }
}

//TODO feedback to user after POST success
// 'react-router'.push() method is valid
// react context() //avoid it, only use it when working with react-router //

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
