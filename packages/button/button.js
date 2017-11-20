import { elementMixins } from '../../sources/utils/mixin'

export default {
  name: 'VButton',

  mixins: [elementMixins],

  props: {
    isLoading: Boolean,
    isOutlined: Boolean
  },

  render (h) {
    return h(this.$attrs.hasOwnProperty('anchor') ? 'a' : 'button', {
      staticClass: 'v-btn',
      class: [this._modeClass]
    }, [
      this.$slots.default
    ])
  },

  computed: {
    _modeClass () {
      let mode = []

      mode.push(this.colorModifier)
      mode.push(this.sizeModifier)
      mode.push(this.disabledModifier)
      mode.push(this.stateModifier)

      this.isLoading && mode.push(`is-loading`)
      this.isOutlined && mode.push(`is-outlined`)

      return mode
    }
  }
}
