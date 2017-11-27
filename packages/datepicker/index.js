import Datepicker from './impl.vue'
import InputDatepicker from './impl_input.vue'

Datepicker.install = function (Vue) {
  Vue.component(Datepicker.name, Datepicker)
  Vue.component(InputDatepicker.name, InputDatepicker)
}

export {
  Datepicker as default,
  InputDatepicker
}
