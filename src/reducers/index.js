import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
//make redux-form work - naming convention says reducer AS ... to avoid naming conflicts
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer,
  form : formReducer
});

export default rootReducer;
