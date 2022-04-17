const initialState = {
  posts: [],
};
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'getPosts':
      return state;
    default:
      return state;
  }
}
