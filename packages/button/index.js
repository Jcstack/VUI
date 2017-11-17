import Button from './button.js'

/* istanbul ignore next */
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
