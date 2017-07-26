/**
 * Generator Sample
 * 
 */
function* functionGenerator (i) {
  yield i + 1
  yield i + 2
  yield i + 3
}

const gen = functionGenerator(10)
gen.next()
gen.next()

export default gen.next().value === 13
