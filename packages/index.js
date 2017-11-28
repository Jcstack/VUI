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
import Message from './message'
import Notification from './notification'
import Progress from './progress'
import RangeSlider from './slider'
import Switch from './switch'
import Table from './table'
import Pagination from './pagination'
import Datepicker from './datepicker'
import Carousel from './carousel'
import Cascade from './cascade'

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
  Tag,
  Message,
  Notification,
  Progress,
  RangeSlider,
  Switch,
  Table,
  Pagination,
  Datepicker,
  Carousel,
  Cascade
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
