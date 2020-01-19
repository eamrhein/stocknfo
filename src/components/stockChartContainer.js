import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStockChart } from '../actions/stock_actions';
import StockChart from './stockChartWidget';

const mapSTP = (state, ownProps) => ({
  stocks: state.entities.stocks,
  current: 'MSFT',
  ownProps,
});

const mapDTP = (dispatch) => ({
  fetchStockChart: (ticker, range) => dispatch(fetchStockChart(ticker, range)),
});

export default withRouter(connect(mapSTP, mapDTP)(StockChart));
