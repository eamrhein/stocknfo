import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const SearchBar = ({ allStocks }) => {
  const [focused, setFocused] = useState(true);
  const [input, setInput] = useState("");
  const match = stock => {
    let match = false;
    const _match = field => {
      let testInput = input.toLowerCase();
      if (typeof field === "string") {
        field = field.toLowerCase();
      }
      return (
        testInput.length <= field.length &&
        field.slice(0, testInput.length) === testInput
      );
    };
    if (stock.name && (_match(stock.name) || _match(stock.symbol)))
      match = true;
    return match;
  };

  const filterStocks = () => {
    const results = [];
    const maxSize = 6;
    let i = 0;
    if (allStocks) {
      while (results.length < maxSize && i < allStocks.length) {
        if (match(allStocks[i])) {
          results.push(allStocks[i]);
        }
        i++;
      }
    }
    return results;
  };

  const renderResults = () => {
    if (input.length > 0 && focused === true) {
      return (
        <ul className="search-results">
          {filterStocks().map((stock, i) => (
            <li key={i} className="search-item">
              {stock.name} {stock.symbol}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="searchbar">
      o-
      <input
        type="text"
        className="searcbar-input"
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
      />
      {renderResults()}
    </div>
  );
};
export default SearchBar;
