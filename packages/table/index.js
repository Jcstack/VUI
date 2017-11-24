import Table from './impl.vue'

Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}

export default Table