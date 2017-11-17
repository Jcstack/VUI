import { elementMixins } from '../../sources/utils/mixin'

export default {
  name: 'VButton',

  mixins: [elementMixins],

  props: {
    isLoading: {
      type: Boolean,
      'default': false
    }
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

      return mode
    }
  }
}
