/**
 * String.prototype.padStart
 */
const padStart = 'x'.padStart(5, 'ab')
/**
 * String.prototype.padEnd
 */
const padEnd = 'x'.padEnd(5, 'ab')

export default padStart === 'ababx' && padEnd === 'xabab'
