<template>
  <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
      @after-leave="_afterAnimatedLeave"
  >
    <div class="v-message-popup"
         v-show="visible"
    >
      <article class="v-message"
               :class="[ `is-${typeClass}`, `is-${size}` ]"
               @mouseenter="_clearTimer"
               @mouseleave="_startTimer"
      >
        <div class="v-message-body">
          <slot>
            <div class="has-message">
              {{ message }}
            </div>
          </slot>
        </div>
      </article>
    </div>
  </transition>
</template>

<script>
  import is from 'is-type-of'

  const typeMaps = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'danger'
  }

  export default {
    name: 'VMessage',

    data () {
      return {
        message: '',
        type: '',
        size: 'normal', // small, medium, large
        visible: false,
        onClose: null,
        duration: 3000,
        timer: null,
        closed: false // immediate `close` state to ignore animation pending
      }
    },

    watch: {
      'closed' (a) {
        if (a) {
          this.visible = false
        }
      }
    },

    computed: {
      typeClass () {
        return this.type && typeMaps[this.type] ? typeMaps[this.type] : ''
      }
    },

    methods: {
      _destroyElement () {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },

      _afterAnimatedLeave () {
        // Clear
        this.$nextTick(() => {
          this._destroyElement()
        })
      },

      close () {
        this.closed = true

        if (is.function(this.onClose)) {
          this.onClose(this)
        }
      },

      open () {
        if (!this.visible) {
          this.closed = false
          this.visible = true

          this._startTimer()
        }
      },

      _clearTimer () {
        clearTimeout(this.timer)
      },

      _startTimer (e) {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, is.object(e) ? 1000 : this.duration)
        }
      }
    }
  }
</script>