/**
 * Created by charlie on 9/30/16.
 */

import Vue from 'vue'
import VNotification from './impl.vue'

let NotificationConstructor = Vue.extend(VNotification)

let instance
let instances = []
let seed = 1

const GUTTER_NOTICE = 16

let Notification = function (options) {
  options = options || {}
  let userOnClose = options.onClose
  let id = `v-notification_${seed}++`

  options.onClose = function () {
    Notification.close(id, userOnClose)
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

Notification.close = function (id, userOnClose) {
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

let NotificationFactory = {
  alert (message, options) {
    options = options || {}
    options.message = message
    options.title = options.title || '提示'

    return Notification(options)
  },

  success (message, options) {
    options = options || {}
    options.type = 'success'
    options.message = message
    options.title = options.title || '提示'

    return Notification(options)
  },

  warn (message, options) {
    options = options || {}
    options.type = 'warning'
    options.message = message
    options.title = options.title || '提示'

    return Notification(options)
  },

  error (message, options) {
    options = options || {}
    options.type = 'error'
    options.message = message
    options.title = options.title || '提示'

    return Notification(options)
  },

  info (message, options) {
    options = options || {}
    options.type = 'info'
    options.message = message
    options.title = options.title || '提示'

    return Notification(options)
  }
}

export {
  NotificationFactory as default,
  Notification
}