import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

/* This is a function that happens on each one of our resuests that we make.
This helps our middleware to work */
/* we need to send our token back to our backend. so that middleware knows we are logged in */
/* THis allows our backend to get a specific header adn based on that header we can use our middleware or perform other fucntions */
API.interceptors.request.use((req) => {
    if(window.localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(window.localStorage.getItem('profile')).token}`;
    }

    return req;
});

// eslint-disable-next-line require-yield
export function requestGetPosts(){
    return API.request({
        method: "get",
        url: "/posts"
    });
}

export function requestPostPosts(newPost){
    return API.request({
        method: "post",
        url: "/posts",
        data: newPost
    });
}

export function requestUpdatePosts(updatePost, id){
    return API.request({
        method: "patch",
        url: `/posts/${id}`,
        data: updatePost
    })
}

export function requestDeletePosts(id){
    return API.request({
        method: "delete",
        url: `/posts/${id}`,
    })
}

export function requestUpdateLikeCount(id){
    return API.request({
        method: "patch",
        url: `/posts/${id}/likePost`
    })
}

export function requestUser(loginData){
    return API.request({
        method: "post",
        url: `/user/login`,
        data: loginData
    })
}

export function requestRegisterUser(loginData){
    return API.request({
        method: "post",
        url: `/user/register`,
        data: loginData
    })
}

export function requestCommentPost(value, id){
    return API.request({
        method: "post",
        url: `/posts/${id}/commentPost`,
        data: { value }
    })
}