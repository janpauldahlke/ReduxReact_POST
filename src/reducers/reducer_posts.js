import { FETCH_POSTS } from '../actions/index';

//define inital state as object
//needing 2 states 1.all posts, 2. single post
//refactor, due the needs of a list of blogposts in array all: []
//single blog post in post: null
const INITIAL_STATE = {
  all: [],
  post: null
};


//get data fro axios request = action.payload.data
export default function(state= INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all:action.payload.data}; //fency eS6 <3
    default:
      return state;
  }
}
