import { takeLatest } from "redux-saga/effects";
import { FETCH_ALL, UPDATE_DATA, COMMENT, DELETE_DATA, CREATE, LIKE_COUNT } from '../ducks/posts'
import { LOGIN, REGISTER } from '../ducks/auth'
import {handleGetPosts, handleCreatePosts, handleUpdatePosts, handleDeletePosts, handleUpdateLikeCount, handleUserLogin, handleRegisterUser,handleCommentPost} from './handlers/posts'


export function* watcherSaga(){
    yield takeLatest(FETCH_ALL, handleGetPosts);
    yield takeLatest(CREATE, handleCreatePosts);
    yield takeLatest(UPDATE_DATA, handleUpdatePosts)
    yield takeLatest(DELETE_DATA, handleDeletePosts)
    yield takeLatest(LIKE_COUNT, handleUpdateLikeCount)
    yield takeLatest(LOGIN, handleUserLogin)
    yield takeLatest(REGISTER, handleRegisterUser)
    yield takeLatest(COMMENT, handleCommentPost)
}