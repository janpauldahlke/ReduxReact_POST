import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

//map route and component here // export them, give atribs to component in index!

const Test = () => {
  return <div>Hi routes Test</div>;
};

export default (
  <Route path="/" component={ App } >
    <Route path="test" component={ Test } />
    <Route path="test2" component={ Test } />
    <Route path="test3" component={ Test } />
  </Route>
);
