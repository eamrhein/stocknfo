import { 
    RECEIVE_STOCK,
    RECEIVE_STOCKS,
    RECEIVE_COMPANY_INFO,
    RECEIVE_STOCK_STATS,
    RECEIVE_STOCK_CHART,
    RECEIVE_HISTORICAL_DATA,
    RECEIVE_LATEST_STOCK_PRICE,
    RECEIVE_INTRADAY_DATA,
    TICKER_NOT_FOUND
} from '../actions/stock_actions'
import NSYE from '../util/nyse.json'
import NASDAQ from '../util/nasdaq.json'

const stockList = NSYE.concat(NASDAQ)

const stockReducer = (state={}, action) => {
    Object.freeze(state)
    let stockState = {...state};
    switch(action.type) {
        case RECEIVE_STOCKS:
            return {
                ...state,
                allStocks: stockList
            }
        default:
            return stockState
    }
}

export default stockReducer;