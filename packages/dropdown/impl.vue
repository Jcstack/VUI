<template>
  <div class="v-dropdown"
       :class="[
         magicModifier,
         _dropdownModifiers, {
         'is-active': active
       }]"
       v-click-outside="_handleClickOutside"
  >
    <div ref="trigger"
         class="v-dropdown-trigger"
         @click="_handleToggle">
      <slot name="trigger"></slot>
    </div>

    <transition :name="transition">
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

    mixins: [createMixins(['disabled', 'hoverable', 'magic'])],

    props: {
      value: {
        type: [String, Number, Boolean, Symbol, Object],
        'default': null
      },

      custom: {
        type: Boolean, // handle trigger event or not
        'default': false
      },

      transition: {
        type: String,
        'default': null
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
        if (this.disabled || this.hoverable || this.custom) return

        this.active = !this.active
      }
    },

    computed: {
      _dropdownModifiers () {
        let cls = []

        cls.push(this.disabledModifier)
        cls.push(this.hoverableModifier)

        return cls
      }
    },

    directives: {
      ClickOutside
    }
  }
</script>
