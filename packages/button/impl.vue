<template>
  <button
      class="v-btn"
      :class="_modeClass"
  >
    <slot></slot>
  </button>
</template>

<script>
  import { elementMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VButton',

    mixins: [ elementMixins ],

    props: {
      isLoading: {
        type: Boolean,
        'default': false
      }
    },

    computed: {
      _modeClass () {
        let mode = []

        mode.push(this.colorModifier)
        mode.push(this.sizeModifier)

        this.isLoading && mode.push(`is-loading`)

        return mode
      }
    }
  }
</script>