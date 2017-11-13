import Cascade from './impl.vue'

Cascade.install = function (Vue) {
  Vue.component(Cascade.name, Cascade)
}

export default Cascade