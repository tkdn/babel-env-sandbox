/**
 * Rest + Spread
 * 
 */
function withRestParams (x, ...y) {
  return x + y.length;
}
function withSpreadParams (x, y, z) {
  return x + y + z;
}

export default (
  withRestParams(3, 'ho', true, 1) === 6 &&
  withSpreadParams(...[1, 2, 3]) === 6
)
