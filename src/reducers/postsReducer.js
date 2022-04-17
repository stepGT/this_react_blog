const initialState = {
  posts: [],
};
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'GET_POSTS':
      return { ...state };
    default:
      return state;
  }
}
