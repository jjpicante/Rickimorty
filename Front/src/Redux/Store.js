import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';
import { compose } from "redux"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||
compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);
export default store;