import Icon from './impl.vue'
import Iconfont from './iconfont'

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
  Vue.component(Iconfont.name, Iconfont)
}

export {
  Icon as default,
  Iconfont
}
