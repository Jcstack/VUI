/**
 * User: charlie
 * Date: 17/10/2017 2:05 PM
 **/

import Modal from './impl.vue'

/* istanbul ignore next */
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)
}

export default Modal
