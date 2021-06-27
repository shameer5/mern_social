/* Read Functionality */
export const FETCH_ALL = "FETCH_ALL";
const SET_POST = "SET_POST";
/* Action creator */
export const getPosts = () => ({
    type: FETCH_ALL
});

export const setPosts = (posts) => ({
    type: SET_POST,
    posts: posts
});

/* Create Functionality */
export const CREATE = "CREATE";
/* Action creator */
export const createPost = (post) => ({
    type: CREATE,
    post: post
})

/* Update Functionality */
export const UPDATE_DATA = 'updatePost'
/* Action creator */
export const updatePost = (id, post) => ({
    type: UPDATE_DATA,
    post: post,
    id: id
})

/* Delete Functionality */
export const DELETE_DATA = 'deletePost'
/* Action creator */
export const deletePost = (id) => ({
    type: DELETE_DATA,
    id: id
})

/* LikeCount Functionality */
export const LIKE_COUNT = 'updateLikeCount'
/* Action creator */
export const updateLikeCount = (id) => ({
    type: LIKE_COUNT,
    id: id
})

const initialState = {
    posts: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type){
        case SET_POST:
            const { posts } = action
            return {...state, posts: posts};
        default :
            return state;
    }
};