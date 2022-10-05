import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import allReduce from '../reducers/allReduce';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReduce,
    composeEnhancers(applyMiddleware(thunk))
)  

export default store;

