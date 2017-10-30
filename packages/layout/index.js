import Container from './impl.vue'
import Row from './impl_row.vue'
import Col from './impl_col.vue'

Container.install = function (Vue) {
  Vue.install(Container.name, Container)
  Vue.install(Row.name, Row)
  Vue.install(Col.name, Col)
}

export {
  Container as default,
  Row, Col
}