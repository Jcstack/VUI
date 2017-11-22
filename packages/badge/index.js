import Badge from './impl.vue'

Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge
