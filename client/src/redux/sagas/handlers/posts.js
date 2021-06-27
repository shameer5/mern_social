import { call, put } from 'redux-saga/effects';
import { setPosts } from '../../ducks/posts';
import { takeAUTH } from '../../ducks/auth';
import { requestGetPosts, requestPostPosts, requestUpdatePosts, requestDeletePosts, requestUpdateLikeCount, requestUser, requestRegisterUser } from '../requests/posts'

export function* handleGetPosts() {
    try{
        const response = yield call(requestGetPosts);
        const {data} = response;
        yield put(setPosts(data));
    } catch(error) {
        console.log(error)
    }
}

export function* handleCreatePosts(action) {
    try{
         yield call(requestPostPosts, action.post);
        const {data} = yield call(requestGetPosts);
        yield put(setPosts(data));
    } catch(error) {
        console.log(error)
    }
}

export function* handleUpdatePosts(action) {
    try {
         yield call(requestUpdatePosts, action.post, action.id)
        const {data} = yield call(requestGetPosts)
        yield put(setPosts(data));
    } catch (error) {
        console.log(error)
    }
}

export function* handleDeletePosts(action){
    try {
        yield call(requestDeletePosts, action.id)
        const {data} = yield call(requestGetPosts)
        yield put(setPosts(data));
    } catch (error) {
        console.log(error)
    }
}

export function* handleUpdateLikeCount(action) {
    try {
        yield call(requestUpdateLikeCount, action.id)
        const {data} = yield call(requestGetPosts)
        yield put(setPosts(data));
    } catch (error) {
        console.log(error)
    }
}

export function* handleUserLogin (action) {
    try{
        const {data} = yield call(requestUser, action.loginData)
        yield put(takeAUTH(data))
        const {result, token} = data;
        yield put(takeAUTH(result, token))
        action.history.push('/')
    } catch (error) { 
        console.log(error)
    }
}

export function* handleRegisterUser (action) {
    try{
        const {data} = yield call(requestRegisterUser, action.loginData)
        const {result, token} = data;
        yield put(takeAUTH(result, token))
        action.history.push('/')
    } catch (error) {
        console.log(error)
    }
}