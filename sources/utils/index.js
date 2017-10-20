const utils = {
  isEmpty (obj) {
    if (obj === null) return true
    if (obj.length > 0) return false
    if (obj.length === 0) return true
    if (typeof obj !== 'object') return true
    let flag = true
    Object.keys(obj).every((key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        flag = false
        return false
      }
      return true
    })
    return flag
  },

  isFunction (obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply)
  },

  getScroll (target, top) {
    if (typeof window === 'undefined') {
      return 0
    }

    const prop = top ? 'pageYOffset' : 'pageXOffset'
    const method = top ? 'scrollTop' : 'scrollLeft'
    const isWindow = target === window

    let ret = isWindow ? target[prop] : target[method]
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
      ret = window.document.documentElement[method]
    }

    return ret
  }
}

export function trust (val) {
  return val && val !== 'false' && val !== '0'
}

export function makeOptions (arr) {
  return arr.map((name) => {
    return {
      text: `is-${name}`,
      value: name
    }
  })
}

// For Modal scrollBar hidden
let cached

export function getScrollBarSize (fresh) {
  if (fresh || cached === undefined) {
    const inner = document.createElement('div')
    inner.style.width = '100%'
    inner.style.height = '200px'

    const outer = document.createElement('div')
    const outerStyle = outer.style

    outerStyle.position = 'absolute'
    outerStyle.top = 0
    outerStyle.left = 0
    outerStyle.pointerEvents = 'none'
    outerStyle.visibility = 'hidden'
    outerStyle.width = '200px'
    outerStyle.height = '150px'
    outerStyle.overflow = 'hidden'

    outer.appendChild(inner)

    document.body.appendChild(outer)

    const widthContained = inner.offsetWidth
    outer.style.overflow = 'scroll'
    let widthScroll = inner.offsetWidth

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth
    }

    document.body.removeChild(outer)

    cached = widthContained - widthScroll
  }
  return cached
}

export const TransitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend',
  transition: 'transitionend'
}

export function transitionEndTest () {
  const el = document.createElement('bootstrap')
  for (const name in TransitionEndEvent) {
    if (el.style[name] !== undefined) {
      return {
        end: TransitionEndEvent[name]
      }
    }
  }
  return false
}

export function isVNode (node) {
  return typeof node === 'object' && node.hasOwnProperty('componentOptions')
}

export function getFirstComponentChild (children) {
  return children && children.filter(c => c && c.tag)[0]
}

/**
 * zero index base
 * @param step {Number}
 * @param ptrIndex {Number|null}
 * @param maxLen {Number}
 */
export function pluckValidCircleIndex (step = 1, ptrIndex = null, maxLen) {
  if (step && maxLen && step < maxLen) {
    if (ptrIndex == null) {
      ptrIndex = step > 0 ? 0 : (maxLen - 1)
    } else {
      ptrIndex = ptrIndex + step
      ptrIndex = ptrIndex < 0 ? (maxLen - 1) : (
        ptrIndex >= maxLen ? 0 : ptrIndex
      )
    }
  }

  return ptrIndex
}

export default utils

