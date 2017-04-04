import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//map route and component here // export them, give atribs to component in index!


/* <IndexRoute component={PostsIndex} /> renders all component in parent path*/
export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ PostsIndex } />
    <Route path="posts/new" component={ PostsNew } />
    <Route path="posts/:id" component={ PostsShow } />
  </Route>
);


//TODO
// <Route path="post:/id" make :id accessible
// this.props.param.id (whereby param comes with URL)
