function sum(a, b) {
  return a + b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}
// RETO
function rest(a, b) {
  return a - b;
}

module.exports = {
  sum,
  mult,
  div,
  rest,
};
