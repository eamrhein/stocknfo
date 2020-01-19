import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "../reducers/root_reducer";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExt = window._REDUX_DEVTOOLS_EXTENSION_;

  if (typeof devToolsExt === "function") {
    enhancers.push(devToolsExt());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

export default store;
