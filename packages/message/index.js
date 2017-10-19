import Vue from 'vue'
import Message from './impl.vue'
import PopupManager from '../../sources/utils/popup'
import { isVNode } from '../../sources/utils/index'

const MessageConstructor = Vue.extend(Message)

let instance
let instances = []
let seed = 1

const MessageFactory = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let userOnClose = options.onClose
  let id = 'v_message_' + seed++

  options.onClose = function () {
    MessageFactory.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message]
    instance.message = null
  }
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  instance.vm.open()

  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = PopupManager.nextZIndex()
  instances.push(instance)

  return instance.vm
};

['success', 'warning', 'info', 'error'].forEach(type => {
  MessageFactory[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return MessageFactory(options)
  }
})

MessageFactory.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

MessageFactory.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export {
  MessageFactory as default,
  Message
}
