import Cascade from './impl.vue'
import CascadePanel from './impl_panel.vue'
import CascadeMenu from './impl_menu.vue'
import CascadeInput from './impl_input.vue'

Cascade.install = function (Vue) {
  Vue.component(Cascade.name, Cascade)
  Vue.component(CascadePanel.name, CascadePanel)
  Vue.component(CascadeMenu.name, CascadeMenu)
  Vue.component(CascadeInput.name, CascadeInput)
}

export default Cascade