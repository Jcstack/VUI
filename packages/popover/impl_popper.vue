<template>
  <div class="v-popover-wrap">
    <transition :name="transition" @after-leave="_handleTransitionAfterLeave">
      <div
          class="v-popover"
          :class="[ popperClass ]"
          ref="popper"
          v-show="!disabled && showPopper"
          :style="{ width: width + 'px' }">
        <div class="v-popover-inner">
          <span class="has-title"
                v-if="title">
            {{ title }}
          </span>
          <div class="v-popover-body">
            <div class="has-content">
              <slot>{{ content }}</slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <slot name="reference"></slot>
  </div>
</template>

<script>
  import PopperMixin from '../../sources/mixins/popper'
  import { on, off } from '../../sources/utils/dom'

  export default {
    name: 'VPopover',

    mixins: [PopperMixin],

    props: {
      trigger: {
        type: String,
        'default': 'click',
        validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
      },
      openDelay: {
        type: Number,
        'default': 0
      },
      title: String,
      disabled: Boolean,
      content: String,
      reference: {},
      popperClass: [String, Array, Object],
      width: {},
      autoDestroy: {
        type: Boolean,
        'default': true
      },
      visibleArrow: {
        type: Boolean,
        'default': true
      },
      transition: {
        type: String,
        'default': 'popover-fade'
      }
    },

    watch: {
      showPopper (newVal, oldVal) {
        newVal ? this.$emit('show') : this.$emit('hide')
      }
    },

    mounted () {
      let reference = this.reference || this.$refs.reference
      const popper = this.popper || this.$refs.popper
      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm
      }
      if (this.trigger === 'click') {
        on(reference, 'click', this.doToggle)
        on(document, 'click', this.handleDocumentClick)
      } else if (this.trigger === 'hover') {
        on(reference, 'mouseenter', this.handleMouseEnter)
        on(popper, 'mouseenter', this.handleMouseEnter)
        on(reference, 'mouseleave', this.handleMouseLeave)
        on(popper, 'mouseleave', this.handleMouseLeave)
      } else if (this.trigger === 'focus') {
        let found = false
        if ([].slice.call(reference.children).length) {
          const children = reference.childNodes
          const len = children.length
          for (let i = 0; i < len; i++) {
            if (children[i].nodeName === 'INPUT' ||
              children[i].nodeName === 'TEXTAREA') {
              on(children[i], 'focus', this.doShow)
              on(children[i], 'blur', this.doClose)
              found = true
              break
            }
          }
        }
        if (found) return
        if (reference.nodeName === 'INPUT' ||
          reference.nodeName === 'TEXTAREA') {
          on(reference, 'focus', this.doShow)
          on(reference, 'blur', this.doClose)
        } else {
          on(reference, 'mousedown', this.doShow)
          on(reference, 'mouseup', this.doClose)
        }
      }
    },

    methods: {
      _handleTransitionAfterLeave () {
        return this.autoDestroy && this.doDestroy()
      },

      doToggle () {
        this.showPopper = !this.showPopper
      },

      doShow () {
        this.showPopper = true
      },

      doClose () {
        this.showPopper = false
      },

      handleMouseEnter () {
        clearTimeout(this._timer)
        if (this.openDelay) {
          this._timer = setTimeout(() => {
            this.showPopper = true
          }, this.openDelay)
        } else {
          this.showPopper = true
        }
      },

      handleMouseLeave () {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.showPopper = false
        }, 200)
      },

      handleDocumentClick (e) {
        let reference = this.reference || this.$refs.reference
        const popper = this.popper || this.$refs.popper
        if (!reference && this.$slots.reference && this.$slots.reference[0]) {
          reference = this.referenceElm = this.$slots.reference[0].elm
        }
        if (!this.$el ||
          !reference ||
          this.$el.contains(e.target) ||
          reference.contains(e.target) ||
          !popper ||
          popper.contains(e.target)) return
        this.showPopper = false
      }
    },

    beforeDestroy () {
      const reference = this.reference
      off(reference, 'click', this.doToggle)
      off(reference, 'mouseup', this.doClose)
      off(reference, 'mousedown', this.doShow)
      off(reference, 'focus', this.doShow)
      off(reference, 'blur', this.doClose)
      off(reference, 'mouseleave', this.handleMouseLeave)
      off(reference, 'mouseenter', this.handleMouseEnter)
      off(document, 'click', this.handleDocumentClick)
    }
  }
</script>