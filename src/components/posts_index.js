import React, { Component } from 'react';
//makethis comp a container, cuase it uses action
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
  //this method is called when React is about to render Component the first time
  componentWillMount() {
    //console.log('call action creator here to fetch post');
    this.props.fetchPosts();
  }

  render () {
    return(
      <div>list posts...</div>
    );
  }
}

/*function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}*/

//export default connect(null, mapDispatchToProps)(PostsIndex);
                                //shortcut version to avoid function mapDispatchToProps
export default connect(null, { fetchPosts : fetchPosts })(PostsIndex);

/* TODO
  get a list of all blog posts and render/include them here
*/
