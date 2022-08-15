// const sum = 'sum';
// const sum = (a, b) => a * b;

module.exports = {
  sum: (a, b) => (a + b),
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => parseFloat(a / b, 2).toFixed(2),
};
