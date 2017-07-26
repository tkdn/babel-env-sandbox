/**
 * Arrow Function and constant, let
 * 
 */
const arrowFunction = () => {
  const arr = [1, 2, 3]
  let x = 0
  arr.map( v => {
    x += v
  })
  return x === 6
}

export default arrowFunction()
