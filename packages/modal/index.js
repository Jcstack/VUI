/**
 * User: charlie
 * Date: 17/10/2017 2:05 PM
 **/

import Vue from 'vue'
import Modal from './impl.vue'

export const modalShared = {
  rootCtx: null
}

/* istanbul ignore next */
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)

  Vue.prototype.$VDialog = {
    open,
    modalShared
  }
}

export function open($slots, options = {}, slotData = {}) {
  let vm = null
  const deferred = {}

  const Dialog = Vue.extend({
    name: 'VDialog',
    mixins: [Modal],
    parent: modalShared.rootCtx, // setup `context` shared data
    beforeCreate() {
      if (typeof $slots === 'string') {
        $slots = {
          default: $slots
        }
      }

      // compile slots to vNodes
      Object.keys($slots).forEach((k) => {
        const renderer = Vue.compile($slots[k])
        const slotCtx = {
          data() {
            slotData = typeof slotData === 'function' ? slotData.call(this) : slotData

            if (slotData) {
              slotData.onEvent = function (type, $event) {
                if (typeof type === 'string') {
                  this.$emit(type, $event)
                }

                if (typeof slotData._userEvent === 'function') {
                  slotData._userEvent.apply(vm, [type, $event])
                }
              }
            }

            return slotData
          },
          render: renderer.render,
          staticRenderFns: renderer.staticRenderFns,
          components: options.components || {},
          computed: options.computed || {},
          methods: Object.assign(options.methods || {}, {
            getTopDialog() {
              let dialog = this.$parent || null

              while (dialog) {
                if (dialog.$options.name === 'VDialog') {
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

  vm = new Dialog(Object.assign(_defaults, options))

  return new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject

    // render it
    vm.$mount()

    document.body.appendChild(vm.$el)

    function forceDestroyElement() {
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
