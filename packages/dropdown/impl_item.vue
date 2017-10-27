<template>
  <hr v-if="divider" class="v-dropdown-divider">
  <a v-else-if="!custom && !hasLink"
     class="v-dropdown-item"
     :class="{
      'is-disabled': disabled,
      'is-active': _isActive
     }"
     @click="_handleItemSelected"
  >
    <slot></slot>
  </a>
  <div :class="{
        'v-dropdown-item': !hasLink,
        'is-disabled': disabled,
        'is-active': _isActive,
        'has-link': hasLink
       }"
       @click="_handleItemSelected"
       v-else
  >
    <slot></slot>
  </div>
</template>

<script>
  import EmitterMixin from '../../sources/mixins/emitter'

  export default {
    name: 'VDropdownItem',

    mixins: [ EmitterMixin ],

    props: {
      value: {
        type: [String, Number, Boolean, Symbol, Object],
        'default': null
      },
      divider: Boolean,
      hasLink: Boolean,
      custom: Boolean,
      disabled: Boolean
    },

    methods: {
      _handleItemSelected () {
        this.vDispatch('VDropdown', 'item-selected', this.value)
      }
    },

    computed: {
      _isActive () {
        return this.value !== null && this.value === this.$parent.selected
      }
    }
  }
</script>