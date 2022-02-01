import { combineReducers } from 'redux';

import blogReducer from './Blog/blog-reducer';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
