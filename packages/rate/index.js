import Rate from './impl.vue'

Rate.install = function (Vue) {
  Vue.component(Rate.name, Rate)
}

export default Rate