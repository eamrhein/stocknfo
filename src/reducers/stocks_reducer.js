import { RECEIVE_STOCKS, RECEIVE_STOCK_CHART } from '../actions/stock_actions';

const stockReducer = (state = {}, action) => {
  Object.freeze(state);
  let data = {};
  switch (action.type) {
    case RECEIVE_STOCKS:
      return {
        ...state,
        allStocks: action.symbols,
      };
    case RECEIVE_STOCK_CHART:
      data = {
        ...action.chartData.quote,
        ...action.chartData.stats,
        ...action.chartData.company,
        logo: action.chartData.logo.url,
        chart: action.chartData.chart,
        intraday: action.chartData.intraDay,
        news: action.chartData.news,
      };
      return {
        ...state,
        [action.ticker]: data,
      };

    default:
      return state;
  }
};

export default stockReducer;
