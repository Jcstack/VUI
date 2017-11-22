// install all packages
import Layout from './layout'
import Button from './button'
import Dropdown from './dropdown'
import Icon from './icon'
import Form from './form'
import Modal from './modal'
import Popover from './popover'
import Tooltip from './tooltip'
import Badge from './badge'
import Tag from './tag'

const components = [
  Layout,
  Icon,
  Button,
  Dropdown,
  Form,
  Modal,
  Popover,
  Tooltip,
  Badge,
  Tag
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
