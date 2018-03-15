<template>
  <div class="v-modal"
       :class="{ 'is-active' : _visible }"
       v-if="!isCard"
  >
    <div class="v-modal-overlay"></div>
    <div class="v-modal-content"
         :class="[ sizeModifier ]"
    >
      <!-- default modal content -->
      <slot></slot>
    </div>
    <button class="v-modal-close"
            @click="_handleClose"
    >
    </button>
  </div>
  <div class="v-modal"
       :class="{ 'is-active' : _visible }"
       v-else>
    <div class="v-modal-overlay"></div>
    <div class="v-modal-card"
         :class="[ sizeModifier ]"
    >
      <header class="v-modal-card-head">
        <slot name="header">
          <div class="v-modal-card-title">{{ title }}</div>
          <button class="v-close"
                  @click="_handleClose"
          ></button>
        </slot>
      </header>
      <section class="v-modal-card-body">
        <!-- default slot content -->
        <slot></slot>
      </section>
      <footer class="v-modal-card-foot">
        <slot name="footer">
          <button class="v-btn is-primary" @click="$emit('dimission', 'confirm')">{{ confirmText }}</button>
          <button class="v-btn is-link" @click="$emit('dimission', 'cancel')">{{ cancelText }}</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  import { isString, isPromise } from '../../sources/utils/is'
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VModal',

    mixins: [createMixins(['size'])],

    props: {
      title: String,
      visible: {
        type: Boolean,
        required: true
      },
      confirmText: {
        type: String,
        'default': '确定'
      },
      cancelText: {
        type: String,
        'default': '取消'
      },
      preConfirm: {
        type: Function,
        'default': Function
      },
      closable: {
        type: Boolean,
        'default': true
      },
      isCard: {
        type: Boolean,
        'default': false
      }
    },

    data () {
      return {}
    },

    created () {
      // handle events
      this.$on('dimission', (e) => {
        if (isString(e)) {
          switch (e) {
            case 'close':
              this.$emit('close')
              break
            case 'esc':
            case 'cancel':
              this.$emit('close', e)
              break
            case 'confirm':
              Promise.resolve(this.preConfirm.call(this))
              .then(res => {
                this.$emit('ok', res)
              })
              .catch(err => {
                // Handle error by `preConfirm` hook
              })
              break
          }
        } else if (isPromise(e)) {
          e.then(() => {
            this.$emit('ok')
          }, (err) => {
            this.$emit('error')
            console.debug(err)
          })
        }
      })
    },

    mounted () {
      // Esc close
      document.addEventListener('keyup', this._handleEscClose, false)
    },

    computed: {
      _visible () {
        return this.visible
      }
    },

    methods: {
      _handleClose () {
        this.closable && this.$emit('dimission', 'close')
      },

      _handleEscClose (e) {
        if (this._visible && this.closable) {
          if (e.keyCode === 27) {
            this.$emit('dimission', 'esc')
          }
        }
      }
    },

    beforeDestroy () {
      // Clear listeners
      document.removeEventListener('keyup', this._handleEscClose, false)
    }
  }
</script>