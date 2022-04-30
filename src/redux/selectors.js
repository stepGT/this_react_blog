export const selectAllPosts = state => state.postsReducer.posts;
export const selectPostByID = (state, postID) =>
  state.postsReducer.posts?.items.filter(el => el.id === postID);
