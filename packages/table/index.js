import Table from './impl.vue'

Table.install = function (Vue) {
  Vue.install(Table.name, Table)
}

export default Table