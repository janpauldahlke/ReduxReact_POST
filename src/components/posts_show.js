import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
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
        <h3>{this.props.post.title}</h3>
        <h6>categories: {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);


//TODO
//create action creator to fetch a single post
