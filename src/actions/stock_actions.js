import * as APIStockUtil from '../util/stock_util';

export const LOAD_SYMBOLS = 'LOAD_SYMBOLS';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK_CHART = 'RECEIVE_STOCK_CHART';

export const receiveStocks = () => ({
  type: RECEIVE_STOCKS,
});

const receiveStockChart = (chartData, ticker) => ({
  type: RECEIVE_STOCK_CHART,
  ticker,
  chartData,
});

export const fetchStockChart = (ticker, range) => (dispatch) => (
  APIStockUtil.fetchStockChart(ticker, range)
    .then((stats) => dispatch(receiveStockChart(stats, ticker))));
