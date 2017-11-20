import Container from './impl.vue'
import Row from './impl_row.vue'
import Col from './impl_col.vue'

Container.install = function (Vue) {
  Vue.component(Container.name, Container)
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
}

export {
  Container as default,
  Row, Col
}