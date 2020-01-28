import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AiOutlineStock } from 'react-icons/ai';
import styled from 'styled-components';
import { fetchSymbols } from '../actions/stock_actions';
import SearchBar from './searchBar';

const Navbar = styled.nav`
  background-color: ${(props) => props.theme.colors.navbar};
`;
const Logo = styled.i`
  text-shadow: 1px 1px black; 
  padding: 6px;
  margin-right: 10px;
  font-size: 34pt;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.primary};
`;
const LogoText = styled.h3`
  text-shadow: 1px 1px black;
  font-family: Roboto Condensed;
  font-weight: lighter;
  strong {
    font-family: Eczar;
    font-weight: bolder;
    color: ${(props) => props.theme.colors.primary}
  }
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
        <LogoText>
          Stock
          <strong>NFO</strong>
        </LogoText>
        <Logo>
          <AiOutlineStock />
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
  allStocks: state.stocks.allStocks,
});
const mDTP = (dispatch) => ({
  loadStocks: () => dispatch(fetchSymbols()),
});
export default connect(mSTP, mDTP)(Nav);
