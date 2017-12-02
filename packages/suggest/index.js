import Suggest from './impl.vue'
import SuggestInput from './impl_input.vue'
import SuggestSearch from './impl_search.vue'
import SuggestSelect from './impl_select.vue'

Suggest.install = function (Vue) {
  Vue.component(Suggest.name, Suggest)
  Vue.component(SuggestInput.name, SuggestInput)
  Vue.component(SuggestSearch.name, SuggestSearch)
  Vue.component(SuggestSelect.name, SuggestSelect)
}

export {
  Suggest as default,
  SuggestInput
}
