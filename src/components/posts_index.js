import React, { Component } from 'react';
//makethis comp a container, cuase it uses action
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//use this as <Link in router and point the sticky end to the route you want to achive
//best feature of react-router LINK!!
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
  //this method is called when React is about to render Component the first time
  componentWillMount() {
    //console.log('call action creator here to fetch post');
    this.props.fetchPosts();
  }

  renderPosts () {
    return this.props.posts.map((post) => {
      return(
        <li className="list-group-item" key={ post.id }>
          <span className="pull-xs-right">{ post.categories }</span>
          <strong> {post.title} </strong>
        </li>
      );
    });
  }


  render () {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary" >
            Add a new Post
          </Link>
        </div>
        <h3>post</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts : state.posts.all };
}

/*function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}*/

//export default connect(null, mapDispatchToProps)(PostsIndex);
                                //shortcut version to avoid function mapDispatchToProps
export default connect(mapStateToProps, { fetchPosts : fetchPosts })(PostsIndex);

/* TODO
  get a list of all blog posts and render/include them here
*/
