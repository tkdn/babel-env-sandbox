/**
 * log 表示
 * 
 * @export
 * @param {boolean} checkBool 
 * @param {string} elemId 
 */
export default function log (checkBool, elemId) {
  const elem = document.getElementById(elemId)
  if (checkBool) {
    elem.setAttribute('class', 'ok')
    elem.innerText = '[ OK ]'
    console.log(`${elemId} : ${checkBool}`)
  } else {
    console.log(`${elemId} : ${checkBool}`)
  }
}
