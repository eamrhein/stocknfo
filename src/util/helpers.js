function contains(target, pattern) {
  let value = 0;
  pattern.forEach((word) => {
    value += target.includes(word);
  });
  return (value === 1);
}

const match = (stock, input) => {
  let matchBool = false;
  const matchFunc = (field) => {
    let fstring = '';
    const testInput = input.toLowerCase();
    if (typeof field === 'string') {
      fstring = field.toLowerCase();
    }
    return (
      testInput.length <= field.length
      && fstring.slice(0, testInput.length) === testInput
    );
  };
  if (stock.name && (matchFunc(stock.name) || matchFunc(stock.symbol))) {
    matchBool = true;
  }
  return matchBool;
};

const filterStocks = (allStocks, input) => {
  const results = [];
  const maxSize = 6;
  let i = 0;
  if (allStocks) {
    while (results.length < maxSize && i < allStocks.length) {
      if (match(allStocks[i], input)) {
        results.push(allStocks[i]);
      }
      i += 1;
    }
  }
  return results;
};
export { contains, filterStocks };
