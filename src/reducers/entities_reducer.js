import { combineReducers } from "redux";
import stockReducer from "./stocks_reducer";

const entitiesReducer = combineReducers({
  stocks: stockReducer
});

export default entitiesReducer;
