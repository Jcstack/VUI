import Datepicker from './impl.vue'
import InputDatepicker from './impl_input.vue'

Datepicker.install = function (Vue) {
  Vue.install(Datepicker.name, Datepicker)
  Vue.install(InputDatepicker.name, InputDatepicker)
}

export {
  Datepicker as default,
  InputDatepicker
}
