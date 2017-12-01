import Suggest from './impl.vue'
import SuggestInput from './impl_input.vue'

Suggest.install = function (Vue) {
  Vue.component(Suggest.name, Suggest)
  Vue.component(SuggestInput.name, SuggestInput)
}

export {
  Suggest as default,
  SuggestInput
}
