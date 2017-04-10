import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {

  // context() usage
  static contextTypes = {
    router : PropTypes.object
  };


  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick () {
                    //id on this.props.params.id
    this.props.deletePost(this.props.params.id)
      .then(() => {
        //navigate back to index
        //after the action
        // do not forget to import PropTypes and create static contextTypes
        this.context.router.push('/');
      });
  }

  render() {
    //logging tes
    //console.log(this.props.post);

    //Handle inital null due network delay
    //loading spinner here for exmaple
    if(!this.props.post) {
      return <div>Loading...</div>
    }

    return (
      <div className="post">
        <Link className="btn btn-primary pull-xs-left" to="/">Back to Index</Link>
        <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post</button>
        <br></br>
        <hr></hr>
        <h3>{this.props.post.title}</h3>
        <h6>categories: {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
        <hr></hr>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);


//TODO
//create action creator to fetch a single post
