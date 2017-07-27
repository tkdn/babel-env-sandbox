import 'babel-polyfill'
import es2015ArrowFunction from './es2015/ArrowConstLet'
import es2015Classes from './es2015/Classes'
import es2015GeneratorFunction from './es2015/Generator'
import es2015ObjectAssign from './es2015/ObjectAssign'
import es2015Promise from './es2015/Promise'
import es2015RestSpread from './es2015/RestSpread'

import es2016ArrayIncludes from './es2016/ArrayIncludes'
import es2016Exponentiation from './es2016/Exponentiation'

import es2017Async from './es2017/Async'
import es2017StringPadding from './es2017/StringPadding'

import log from './util/Log'

log(es2015ArrowFunction, 'arrow-function')
log(es2015Classes, 'classes')
log(es2015GeneratorFunction, 'generator-function')
log(es2015ObjectAssign, 'object-assign')
es2015Promise.then( (bool) => {
  log(bool, 'promise')
})
log(es2015RestSpread, 'rest-spread')
log(es2016ArrayIncludes, 'array-includes')
log(es2016Exponentiation, 'exponentiation')
es2017Async().then( (res) => {
  log(res.name === 'mediba inc.', 'async')
})
log(es2017StringPadding, 'string-padding')
