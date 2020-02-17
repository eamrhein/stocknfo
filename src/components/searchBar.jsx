import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { filterStocks } from '../util/helpers';
import {
  Results, Result, SearchHeading, Label, Symbol, Name, Search,
} from './styles';

// Display Results
const ResultsComponent = ({
  allStocks, handleClick, cursor, hover, setHover, input,
}) => {
  if (input && input.length) {
    return (
      <Results>
        <SearchHeading>
          <Label>Symbol</Label>
          <Label>Name</Label>
        </SearchHeading>
        {filterStocks(allStocks, input).map((stock, i) => (
          <Result
            onClick={() => handleClick(stock.symbol)}
            className={cursor === i || hover === i ? 'active' : null}
            key={stock.symbol}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <Symbol className="result">{stock.symbol}</Symbol>
            <Name>
              {stock.name
                .split(' ')
                .slice(0, 3)
                .join(' ')}
            </Name>
          </Result>
        ))}
      </Results>
    );
  } return null;
};

// Prop Validation
ResultsComponent.defaultProps = {
  allStocks: [],
  cursor: 0,
  input: '',
  hover: 0,
  handleClick() {},
  setHover() {},
};
ResultsComponent.propTypes = {
  allStocks: PropTypes.arrayOf(PropTypes.shape({})),
  handleClick: PropTypes.func,
  cursor: PropTypes.number,
  input: PropTypes.string,
  hover: PropTypes.number,
  setHover: PropTypes.func,
};


const SearchBar = (props) => {
  const { allStocks, history } = props;
  const [cursor, setCursor] = useState(0);
  const [input, setInput] = useState('');
  const [hover, setHover] = useState(null);
  const handleClick = (symbol) => {
    setInput('');
    history.push(`/${symbol}`);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < allStocks.length) {
      setCursor(cursor + 1);
    }
    if (e.keyCode === 13) {
      const elements = [...document.getElementsByClassName('active')];
      const symbol = elements[0].childNodes[0].innerText;
      setInput('');
      history.push(`/${symbol}`);
    }
  };
  return (
    <>
      <Search>
        {/* <FontAwesomeIcon icon={faSearch} /> */}
        <input
          type="text"
          className="searcbar-input"
          placeholder="  Search"
          value={input}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
        />
      </Search>
      <ResultsComponent
        allStocks={allStocks}
        handleClick={handleClick}
        hover={hover}
        setHover={setHover}
        cursor={cursor}
        setCursor={setCursor}
        input={input}
        setInput={setInput}
      />
    </>
  );
};
SearchBar.defaultProps = {
  allStocks: [],
  history: {},
};
SearchBar.propTypes = {
  allStocks: PropTypes.arrayOf(PropTypes.shape({})),
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(SearchBar);
