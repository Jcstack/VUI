/**
 * User: charlie
 * Date: 17/10/2017 2:05 PM
 **/

import Vue from 'vue'
import Modal from './impl.vue'

/* istanbul ignore next */
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)
}

export const modalShared = {
  rootCtx: null
}

export function open ($slots, options = {}, slotData = {}) {
  let _onResolved = () => {}
  let _onRejected = () => {}

  const Dialog = Vue.extend({
    name: 'XVDialog',
    mixins: [Modal],
    parent: modalShared.rootCtx, // setup `context` shared data
    beforeCreate () {
      if (typeof $slots === 'string') {
        $slots = {
          default: $slots
        }
      }

      // compile slots to vNodes
      Object.keys($slots).forEach((k) => {
        const renderer = Vue.compile($slots[k])
        const slotCtx = {
          data () {
            slotData = typeof slotData === 'function' ? slotData.call(this) : slotData

            if (slotData) {
              slotData.onResolved = _onResolved
              slotData.onRejected = _onRejected
            }

            return slotData
          },
          render: renderer.render,
          staticRenderFns: renderer.staticRenderFns,
          components: options.components || {},
          computed: options.computed || {},
          methods: Object.assign(options.methods || {}, {
            getTopDialog () {
              let dialog = this.$parent || null

              while (dialog) {
                if (dialog.$options.name === 'XVDialog') {
                  break
                }

                dialog = dialog.$parent
              }

              return dialog
            }
          })
        }

        // setup array
        $slots[k] = [this.$createElement(slotCtx)]
      })

      Object.assign(this.$slots, $slots)
    }
  })

  const _defaults = {
    propsData: {
      visible: true
    }
  }

  // @todo merge strategy
  if (options.propsData) {
    Object.assign(_defaults.propsData, options.propsData)
    delete options.propsData
  }

  const vm = new Dialog(Object.assign(_defaults, options))

  return new Promise((resolve, reject) => {
    _onResolved = resolve
    _onRejected = reject

    // render it
    vm.$mount()

    document.body.appendChild(vm.$el)

    function forceDestroyElement () {
      // vm.visible = false
      vm.$destroy()
      vm.$el.parentNode.removeChild(vm.$el)
    }

    // preConfirm ?:> ok
    vm.$on('ok', (e) => {
      resolve(e)
      vm.$emit('close')
    })

    vm.$on('close', (e) => {
      (!e || e === 'esc' || e === 'cancel') && forceDestroyElement()
    })

    // Fatal error !!
    vm.$on('error', e => {
      reject(e)
      vm.$emit('close')
    })
  })
}

export default Modal
