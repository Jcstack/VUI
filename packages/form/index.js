/**
 * User: charlie
 * Date: 17/10/2017 2:21 PM
 **/

import Form from './impl.vue'
import Field from './impl_field.vue'
import Input from './impl_input.vue'
import Select from './impl_select.vue'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
  Vue.component(Field.name, Field)
  Vue.component(Input.name, Input)
  Vue.component(Select.name, Select)
}

export {
  Form as default,
  Field, Input,
  Select
}
