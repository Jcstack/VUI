import PopoverPopper from './impl_popper.vue'

PopoverPopper.install = function (Vue) {
  // install it
  Vue.component(PopoverPopper.name, PopoverPopper)
}

export {
  PopoverPopper as default,
}