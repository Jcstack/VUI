// install all packages
import Layout from './layout'
import Button from './button'
import Dropdown from './dropdown'
import Icon from './icon'

const components = [
  Layout,
  Icon,
  Button,
  Dropdown
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
