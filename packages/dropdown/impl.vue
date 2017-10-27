<template>
  <div class="v-dropdown"
       :class="[ _dropdownModifiers, {
         'is-active': active
       }]"
       v-click-outside="_handleClickOutside"
  >
    <div ref="trigger"
         class="v-dropdown-trigger"
         @click="_handleToggle">
      <slot name="trigger"></slot>
    </div>

    <transition name="v-ani-menu">
      <div v-show="active || hoverable"
           ref="dropdownMenu"
           class="v-dropdown-menu">
        <div class="v-dropdown-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'
  import ClickOutside from '../../sources/directives/click-outside'

  export default {
    name: 'VDropdown',

    mixins: [createMixins(['disabled', 'hoverable'])],

    props: {
      value: {
        type: [String, Number, Boolean, Symbol, Object],
        'default': null
      },
      position: {
        type: String,
        validator (val) {
          return !val || ['up', 'up-right'].indexOf(val) > -1
        }
      }
    },

    data () {
      return {
        selected: this.value,
        active: false
      }
    },

    created () {
      this.$on('item-selected', val => {
        this.selected = val
        this.active = false
      })
    },

    watch: {
      'selected' (val) {
        this.$emit('input', val)
        this.$emit('change', val)
      },

      'value' (val) {
        if (val === this.selected) return

        console.debug('new', val, 'selected', this.selected)
        // support v-model
        this.$emit('item-selected', val)
      }
    },

    methods: {
      _handleClickOutside () {
        this.active = false
      },

      _handleToggle () {
        if (this.disabled || this.hoverable) return

        this.active = !this.active
      }
    },

    computed: {
      _dropdownModifiers () {
        let cls = []

        cls.push(this.disabledModifier)
        cls.push(this.hoverableModifier)

        if (this.position) {
          cls.push('is-up')
          !!~this.position.indexOf('right') && cls.push('is-right')
        }

        return cls
      }
    },

    directives: {
      ClickOutside
    }
  }
</script>