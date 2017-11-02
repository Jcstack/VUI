import Switch from './impl.vue'

Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch)
}

export default Switch