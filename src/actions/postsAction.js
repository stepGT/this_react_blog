export const addPosts = posts => ({ type: 'ADD_POSTS', payload: posts });
export const addPost = postID => ({ type: 'GET_POSTS', payload: postID });
export const setLike = postID => ({ type: 'SET_LIKE', payload: postID });
export const deletePost = postID => ({ type: 'DELETE_POST', payload: postID });
export const editPost = post => ({ type: 'EDIT_POST', payload: post });
