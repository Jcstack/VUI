/**
 * User: charlie
 * Date: 17/10/2017 2:21 PM
 **/

import Form from './impl.vue'
import Field from './impl_field.vue'
import Control from './impl_control.vue'
import Input from './impl_input.vue'
import Select from './impl_select.vue'
import Checkbox from './impl_checkbox.vue'
import Radio from './impl_radio.vue'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
  Vue.component(Field.name, Field)
  Vue.component(Control.name, Control)
  Vue.component(Input.name, Input)
  Vue.component(Select.name, Select)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Radio.name, Radio)
}

export {
  Form as default,
  Field, Control,
  Input, Select,
  Checkbox, Radio
}
