import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

//map route and component here // export them, give atribs to component in index!


/* <IndexRoute component={PostsIndex} /> renders all component in parent path*/
export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ PostsIndex } />
  </Route>
);
