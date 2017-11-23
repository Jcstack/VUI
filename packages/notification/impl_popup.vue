<template>
  <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated fadeOut"
      @after-leave="_afterAnimatedLeave"
  >
    <div class="v-notification-popup"
         v-show="visible"
         :style="{ top: top ? top + 'px' : 'auto' }"
         @mouseenter="clearTimer()"
         @mouseleave="startTimer()">
      <div class="v-notification"
           :class="[ `is-${typeClass}` ]"
      >
        <h2 class="has-title">
          {{ title }}
        </h2>
        <div class="has-content">
          {{ message }}
        </div>
        <a class="v-close" @click="_handleClose"></a>
      </div>
    </div>
  </transition>
</template>

<script>
  const typeMaps = {
    success: 'success',
    info: 'info',
    warn: 'warning',
    error: 'danger',
    alert: 'alert'
  }

  export default {
    name: 'VNotificationPopup',

    data () {
      return {
        visible: false,
        title: '',
        message: '',
        duration: 4000,
        type: '',
        onClose: null,
        closed: false,
        top: null,
        timer: null
      }
    },

    computed: {
      typeClass () {
        return this.type && typeMaps[this.type] ? typeMaps[this.type] : ''
      }
    },

    watch: {
      closed: function (newVal) {
        if (true === newVal) {
          this.visible = false
        }
      }
    },

    methods: {
      _afterAnimatedLeave () {
        // Clear
        this.$nextTick(() => {
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el)
        })
      },
      _handleClose () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose()
        }
      },
      clearTimer () {
        clearTimeout(this.timer)
      },
      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this._handleClose()
            }
          }, this.duration)
        }
      }
    },

    created () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this._handleClose()
          }
        }, this.duration)
      }
    }
  }
</script>
