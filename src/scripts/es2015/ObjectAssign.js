const obj1 = { a: 1 }
const obj2 = { hoge: 'fuga' }
const obj3 = Object.assign({}, obj1, obj2)

export default obj3.hasOwnProperty('a') && obj3.hasOwnProperty('hoge')
