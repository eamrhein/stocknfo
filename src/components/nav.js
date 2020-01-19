import React, { useEffect } from "react";
import SearchBar from "./nav/searchBar";
import { connect } from "react-redux";
import { receiveStocks } from "../actions/stock_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Navbar = styled.nav`
  margin-left: 30vw;
  margin-right: 30vw;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const Logo = styled.i`
  margin-right: 10px;
  font-size: 24pt;
  color: #7b1fa2;
`;
const Nav = ({ allStocks, loadStocks }) => {
  useEffect(() => {
    loadStocks();
  }, [loadStocks]);
  return (
    <Navbar>
      <Logo>
        <FontAwesomeIcon icon={faPencilAlt} />
      </Logo>
      <SearchBar allStocks={allStocks} />
    </Navbar>
  );
};
const mSTP = state => ({
  allStocks: state.entities.stocks.allStocks
});
const mDTP = dispatch => ({
  loadStocks: () => dispatch(receiveStocks())
});
export default connect(mSTP, mDTP)(Nav);
