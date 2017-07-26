/**
 * Rest + Spread
 * 
 */
function functionForRest (x, ...y) {
  return x + y.length;
}
function functionForSpread (x, y, z) {
  return x + y + z;
}

export default (
  functionForRest(3, 'ho', true, 1) === 6 &&
  functionForSpread(...[1, 2, 3]) === 6
)
