function contains(target, pattern) {
  let value = 0;
  pattern.forEach((word) => {
    value += target.includes(word);
  });
  return (value === 1);
}
export default contains;
