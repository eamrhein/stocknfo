import React, { useEffect } from "react";
import SearchBar from "./nav/searchBar";
import { connect } from "react-redux";
import { receiveStocks } from "../actions/stock_actions";
import "./nav.css";
const Nav = ({ allStocks, loadStocks }) => {
  useEffect(() => {
    loadStocks();
  }, [loadStocks]);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <h1>InvestmentSpy</h1>
        </li>
        <SearchBar allStocks={allStocks} />
      </ul>
    </nav>
  );
};
const mSTP = state => ({
  allStocks: state.entities.stocks.allStocks
});
const mDTP = dispatch => ({
  loadStocks: () => dispatch(receiveStocks())
});
export default connect(mSTP, mDTP)(Nav);
