import { combineReducers } from 'redux';
import postsReducer from '@reducers/postsReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `posts`, handled by `postsReducer`
  postsReducer,
});

export default rootReducer;
