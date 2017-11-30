import utils from 'core-util-is'

const toString = Function.prototype.toString

function fnBody (fn) {
  return toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '')
}

export const isClass = function (fn) {
  return (typeof fn === 'function' &&
    (/^class\s/.test(toString.call(fn)) ||
      (/^.*classCallCheck\(/.test(fnBody(fn)))) // babel.js
  )
}

export const isFinite = function (obj) {
  return Number.isFinite(obj)
}

export const isNaN = function (obj) {
  return Number.isNaN(obj)
}

export const isGenerator = function (obj) {
  return obj
    && 'function' === typeof obj.next
    && 'function' === typeof obj.throw
}

export const isGeneratorFunction = function (obj) {
  return obj
    && obj.constructor
    && 'GeneratorFunction' === obj.constructor.name
}

export const isAsyncFunction = function (obj) {
  return obj
    && obj.constructor
    && 'AsyncFunction' === obj.constructor.name
}

export const isPromise = function (obj) {
  return obj
    && 'function' === typeof obj.then
}

const MAX_INT_31 = Math.pow(2, 31)

export const isInt = function (obj) {
  return utils.isNumber(obj)
    && obj % 1 === 0
}

export const isInt32 = function (obj) {
  return isInt(obj)
    && obj < MAX_INT_31
    && obj >= -MAX_INT_31
}

export const isLong = function (obj) {
  return isInt(obj)
    && (obj >= MAX_INT_31 || obj < -MAX_INT_31)
}

export const isDouble = function (obj) {
  return utils.isNumber(obj)
    && !isNaN(obj)
    && obj % 1 !== 0
}

/**
 * override core-util-is
 */
export const isNullOrUndefined = utils.isNullOrUndefined
export const isNumber = utils.isNumber
export const isSymbol = utils.isSymbol
export const isString = utils.isString
export const isUndefined = utils.isUndefined
export const isBoolean = utils.isBoolean
export const isObject = utils.isObject
export const isNull = utils.isNull
export const isPrimitive = utils.isPrimitive
export const isBuffer = utils.isBuffer
export const isFunction = utils.isFunction
export const isDate = function isDate (obj) {
  return obj instanceof Date
}
export const isRegExp = function isRegExp (obj) {
  return obj instanceof RegExp
}
export const isError = function isError (obj) {
  return obj instanceof Error
}
export const isArray = function isArray (obj) {
  return Array.isArray(obj)
}

export default utils
