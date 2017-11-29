<template>
  <div class="v-popper-tooltip-demo">
    <slot></slot>
  </div>
</template>

<script>
  import Tooltip from '../../sources/plugins/tooltip'

  export default {
    name: 'VTooltip',

    props: {
      title: String
    },

    created () {},

    mounted () {
      // Get the default slot with the first node as the trigger element
      const elTrigger = this.$slots.default[0].elm

      // Setup Tooltip
      this._instanceTooltip = new Tooltip(elTrigger, {
        title: this.title,
        trigger: 'hover',
        placement: 'bottom',
        offset: 0
      })

    },

    beforeDestroy () {
      this._instanceTooltip.dispose()
    }
  }
</script>

<style lang="scss" type="text/scss">
  .v-popper-tooltip {
    position: absolute;
    background: #1c1e26;
    color: white;
    max-width: 250px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    padding: 8px 10px;
    text-align: center;
    font-size: 12px;
    z-index: 21;
  }

  .v-popper-tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }

  .v-popper-tooltip .tooltip-arrow {
    border-color: #1c1e26;
  }

  .v-popper-tooltip[x-placement^="top"] {
    margin-bottom: 5px;
  }

  .v-popper-tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-popper-tooltip[x-placement^="bottom"] {
    margin-top: 5px;
  }

  .v-popper-tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-popper-tooltip[x-placement^="right"] {
    margin-left: 5px;
  }

  .v-popper-tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .v-popper-tooltip[x-placement^="left"] {
    margin-right: 5px;
  }

  .v-popper-tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
</style>