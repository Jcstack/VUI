/**
 * User: charlie
 * Date: 17/10/2017 2:05 PM
 **/
import Tooltip from './impl.vue'
import { installSavTip } from '../../sources/plugins/tip'
import savTipDirective from '../../sources/directives/tip'

Tooltip.install = function (Vue) {
  // install component
  Vue.component(Tooltip.name, Tooltip)

  // install directive
  Vue.directive('tip', savTipDirective)

  installSavTip()
}

export default Tooltip
