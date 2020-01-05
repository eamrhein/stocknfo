import React, { useEffect } from "react";
import SearchBar from "./nav/searchBar";
import { connect } from "react-redux";
import { receiveStocks } from "../actions/stock_actions";

const Nav = ({ allStocks, loadStocks }) => {
  useEffect(() => {
    loadStocks();
  }, []);
  return (
    <nav className="navbar">
      <ul>
        <li>LOGO(C)</li>
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
