import { combineReducers } from 'redux'
import stockReducer from './stocks_reducer'

const entitiesReducer = combineReducers({
    stocks: stockReducer
})
// stocks,
// news
// watches

export default entitiesReducer;

