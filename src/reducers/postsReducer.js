const initialState = {
  posts: {
    count: 0,
    items: [],
  },
};
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'SET_LIKE':
      const newPosts = state.posts.items.map(el =>
        el.id === action.payload ? { ...el, liked: !el.liked } : el
      );
      return {
        ...state,
        posts: {
          ...state.posts,
          items: newPosts,
        },
      };
    default:
      return state;
  }
}
