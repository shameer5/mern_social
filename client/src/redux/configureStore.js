import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import postsReducer from './ducks/posts'
import postDataReducer from './ducks/form'
import authReducer from './ducks/auth'
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    posts: postsReducer,
    postData: postDataReducer,
    auth: authReducer
})
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];


const store = createStore(reducer, {}, applyMiddleware(...middleware));


sagaMiddleware.run(watcherSaga);

export default store;