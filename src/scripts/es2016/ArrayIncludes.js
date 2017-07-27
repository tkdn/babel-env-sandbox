/**
 * Array.prototype.include
 * 
 */
function arrayInludes(arr, val) {
  return arr.includes(val)
}

/**
 * 上記関数はbabelが型推論までしないのでトランスパイルされない
 * const arr = [1, 2, 3]
 * arr.includes(3)
 * 上記もトランスパイルしない
 */

export default [1, 2, 3].includes(3)
