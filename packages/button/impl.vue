<template>
  <button
      class="v-btn"
      :class="_modeClass"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'VButton',

    props: {
      colorModifier: {
        type: String,
        'default': ''
      },
      sizeModifier: {
        type: String,
        'default': ''
      },
      isLoading: {
        type: Boolean,
        'default': false
      }
    },

    computed: {
      _modeClass () {
        let mode = {}

        mode[`is-${this.colorModifier}`] = (this.colorModifier !== '')
        mode[`is-${this.sizeModifier}`] = (this.sizeModifier !== '')
        mode[`is-loading`] = this.isLoading

        return mode
      }
    }
  }
</script>