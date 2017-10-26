// install all packages
import Button from './button'

const components = [
  Button
]

export function install (Vue) {
  components.forEach((it) => {
    it.install(Vue)
  })
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}

export default components
