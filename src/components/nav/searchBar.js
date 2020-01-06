import React, { useState } from "react";
import "./searchBar.css";
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

  const focusSearch = e => {
    const searchBar = document.querySelector(".searchbar");
    const searchBarInput = document.querySelector(".search-bar-input");
    const searchBarSVG = document.querySelector(".searchbar-svg");
    if (searchBar) {
      searchBar.classList.add("focus");
    }
    if (searchBarInput) {
      searchBarInput.classList.add("focus");
    }
    if (searchBarSVG) {
      searchBarSVG.classList.add("focus");
    }
    if (e.type === "focus") {
      setFocused(true);
    }
  };
  const blurSearch = e => {
    const searchBar = document.querySelector(".searchbar");
    const searchBarInput = document.querySelector(".search-bar-input");
    const searchBarSVG = document.querySelector(".searchbar-svg");
    if (searchBar) {
      searchBar.classList.remove("focus");
    }
    if (searchBarInput) {
      searchBarInput.classList.remove("focus");
    }
    if (searchBarSVG) {
      searchBarSVG.classList.remove("focus");
    }
    if (e.type === "blur") {
      setFocused(false);
    }
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
          <h3>Stocks</h3>
          {filterStocks().map((stock, i) => (
            <li key={i} className="search-item">
              <li>{stock.name}</li>
              <li>{stock.symbol}</li>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div
      className="searchbar"
      onMouseEnter={focusSearch}
      onMouseLeave={blurSearch}
      onFocus={focusSearch}
      onBlur={blurSearch}
    >
      <div className="searchbar-svg"></div>
      <input
        type="search"
        className="search-bar-input"
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
      />
      {renderResults()}
    </div>
  );
};
export default SearchBar;
