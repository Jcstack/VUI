<template>
  <div class="main-body">
    hello body

    <p>
      <v-tooltip title="hello, body">
        <button>click me</button>
      </v-tooltip>
    </p>
    <p>
      <button v-tooltip.bottom="`this is not`">hover me</button>
      <button v-tooltip.right="`this is not`">hover me</button>
      <button v-tooltip.bottom-start="xtip">hover me</button>
    </p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VTooltip from '../../../packages/tooltip/impl_popper.vue'
  import VTooltipDirective from  '../../../sources/directives/tooltip'
  import { isObject } from '../../../sources/utils/is'

  Vue.directive('tooltip', VTooltipDirective)

  export default {
    created () {},

    data () {
      return {
        xtip: {
          content: '<strong>i am html</strong>',
          classes: 'my-xtip'
        }
      }
    },

    components: {
      VTooltip
    }
  }
</script>

<style lang="scss" type="text/scss">
  .my-xtip {
    background-color: rgba(248, 247, 200, 0.5) !important;
    color: #0a0a0a !important;
  }
</style>