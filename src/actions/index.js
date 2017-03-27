import axios from 'axios';

export constant FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1337unique';


export function fetchPosts() {
  const request = axios.get(`${ ROOT_URL }/posts${ API_KEY }`);

  return{
    type : FETCH_POSTS,
    paylod: request
  };
}
