import * as APIStockUtil from '../util/stock_util';

export const LOAD_SYMBOLS = 'LOAD_SYMBOLS';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK_CHART = 'RECEIVE_STOCK_CHART';

const receiveStocks = (symbols) => ({
  type: RECEIVE_STOCKS,
  symbols,
});

const receiveStockChart = (chartData, ticker) => ({
  type: RECEIVE_STOCK_CHART,
  ticker,
  chartData,
});

export const fetchStockChart = (ticker, range) => (dispatch) => (
  APIStockUtil.fetchStockChart(ticker, range)
    .then((stats) => dispatch(receiveStockChart(stats, ticker))));

export const fetchSymbols = () => (dispatch) => (
  APIStockUtil.fetchSymbols()
    .then((symbols) => dispatch(receiveStocks(symbols))));
