import { combineReducers } from 'redux';
import stockReducer from './stocks_reducer';

const rootReducer = combineReducers({
  stocks: stockReducer,
});

export default rootReducer;
