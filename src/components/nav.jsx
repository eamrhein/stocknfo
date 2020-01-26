import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { receiveStocks } from '../actions/stock_actions';
import SearchBar from './nav/searchBar';

const Navbar = styled.nav`
  background-color: #555555;
  border-bottom: 1px solid black;
`;
const Logo = styled.i`
  background-color: #fafafa;
  padding: 6px;
  border: 1px solid black;
  border-radius: 3px;
  margin-right: 10px;
  font-size: 24pt;
  color: #7b1fa2;
`;

const NavItems = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav = ({ allStocks, loadStocks }) => {
  useEffect(() => {
    loadStocks();
  }, [loadStocks]);
  return (
    <Navbar>
      <NavItems>
        <Logo>
          <FontAwesomeIcon icon={faPencilAlt} />
        </Logo>
        <SearchBar allStocks={allStocks} />
      </NavItems>
    </Navbar>
  );
};

Nav.defaultProps = {
  allStocks: [],
};
Nav.propTypes = {
  allStocks: PropTypes.arrayOf(PropTypes.shape({})),
  loadStocks: PropTypes.func.isRequired,
};


const mSTP = (state) => ({
  allStocks: state.entities.stocks.allStocks,
});
const mDTP = (dispatch) => ({
  loadStocks: () => dispatch(receiveStocks()),
});
export default connect(mSTP, mDTP)(Nav);
