import Popover from './impl.vue'
import PopoverPopper from './impl_popper.vue'

Popover.install = function (Vue) {
  // install it
  Vue.component(Popover.name, Popover)
}

export {
  Popover as default,
  PopoverPopper
}