import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStockChart } from '../actions/stock_actions';
import StockChart from './stockNFO';

const mapSTP = (state, ownProps) => {
  return {
    stocks: state.stocks,
    current: ownProps.match.params.sym || 'MSFT',
    ownProps,
  };
};

const mapDTP = (dispatch) => ({
  fetchStockChart: (ticker, range) => dispatch(fetchStockChart(ticker, range)),
});

export default withRouter(connect(mapSTP, mapDTP)(StockChart));
