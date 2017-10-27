/**
 * User: charlie
 * Date: 17/10/2017 2:05 PM
 **/
import Dropdown from './impl.vue'
import DropdownItem from './impl_item.vue'

Dropdown.install = function (Vue) {
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(DropdownItem.name, DropdownItem)
}

export {
  Dropdown as default,
  DropdownItem
}