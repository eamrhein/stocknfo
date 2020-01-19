import {
  RECEIVE_STOCKS,
  RECEIVE_STOCK_CHART,
} from "../actions/stock_actions";
import NSYE from "../util/nyse.json";
import NASDAQ from "../util/nasdaq.json";

const stockList = NSYE.concat(NASDAQ);

const stockReducer = (state = {}, action) => {
  Object.freeze(state);
  let data = {};
  switch (action.type) {
    case RECEIVE_STOCKS:
      return {
        ...state,
        allStocks: stockList
      };
    case RECEIVE_STOCK_CHART:
      data = {
        ...action.chartData.quote,
        ...action.chartData.stats,
        company: action.chartData.company,
        chart: action.chartData.chart,
        intraday: action.chartData.intraDay
      };
      return {
        ...state,
        [action.ticker]: data
      };

    default:
      return state;
  }
};

export default stockReducer;
