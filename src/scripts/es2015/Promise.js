/**
 * Promise Sample
 * 
 */
const promise = new Promise( resolve =>{
  setTimeout( ()=> {
    resolve(true)
  }, 1000)
})

export default promise
