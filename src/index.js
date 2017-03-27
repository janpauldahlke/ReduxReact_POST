//prove of existence
console.log('scio non scire');

//

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
// www.foo.com/<browserHistoryObject>
// alternative { hashHistory } --> www.foo.com/#posts/12<starts with hash>
// alternative { memoryHistory } -->
import reducers from './reducers';
import routes from './routes';



const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>
  , document.querySelector('#root')
);


/*
TODO:
  define all possible valid routes //configure them
  see src/routes.js
*/
