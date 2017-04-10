import { FETCH_POSTS, FETCH_POST } from '../actions/index';

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
    //http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
      //console.log('reducer', action);
      return { ...state, all : action.payload.data }; //fency eS6 <3
    case FETCH_POST:
        return {...state, post: action.payload.data};
    default:
      return state;
  }
}

/* TODO
  apply actionCreator to URL change
  to do so, use React Lifecycle
  https://gist.github.com/monicao/243958d7498ed9fabe78
  ComponentWillMount()
*/
