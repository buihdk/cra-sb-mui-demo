import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import users from './users/reducers';

const allReducers = combineReducers({
  users,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(allReducers, {}, composeEnhancers(applyMiddleware(thunk)));
