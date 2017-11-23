/**
 * Created by charlie on 9/30/16.
 */

import Vue from 'vue'
import VNotification from './impl.vue'
import VNotificationPopup from './impl_popup.vue'

let NotificationConstructor = Vue.extend(VNotificationPopup)

let instance
let instances = []
let seed = 1

const GUTTER_NOTICE = 16

let NotificationFactory = function (options) {
  options = options || {}

  let userOnClose = options.onClose
  let id = `v-notification_${seed}++`

  options.onClose = function () {
    NotificationFactory.close(id, userOnClose)
  }

  instance = new NotificationConstructor({
    data: options
  })

  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  instance.vm.visible = true
  instance.dom = instance.vm.$el

  let topDist = 0
  for (let i = 0, len = instances.length; i < len; i++) {
    topDist += instances[i].$el.offsetHeight + GUTTER_NOTICE
  }
  topDist += GUTTER_NOTICE
  instance.top = topDist
  instances.push(instance)

  return instance
}

NotificationFactory.close = function (id, userOnClose) {
  let index
  let removedHeight
  let len = instances.length
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      index = i
      removedHeight = instances[i].dom.offsetHeight
      instances.splice(i, 1)
      break
    }
  }

  if (len > 1) {
    for (let i = index; i < len - 1; i++) {
      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - GUTTER_NOTICE + 'px'
    }
  }
}

;['alert', 'warn', 'error', 'info', 'success'].forEach(type => {
  NotificationFactory[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }

    options.type = type
    options.title = options.title || '提示'

    return NotificationFactory(options)
  }
})

VNotification.install = function (Vue) {
  Vue.component(VNotification.name, VNotification)

  Vue.prototype.$VNotification = NotificationFactory
}

export {
  VNotification as default,
  NotificationFactory
}