import {trust} from '../utils'

export default {
  props: {
    color: {
      type: [Boolean, String],
      default: false
    },
    size: {
      type: [Boolean, String],
      default: false
    },
    extras: {
      type: Array,
      default: Array
    },
    state: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flex: {
      type: [Boolean, String],
      default: false
    },
    col: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: ''
    },
    textField: {
      type: String,
      default: 'text'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    options: {
      type: Array,
      default: Array
    },
    option: {
      type: Object,
      default: Object
    },
    type: {
      type: [Number, String],
      default: 0
    },
    align: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorModifier () {
      return trust(this.color) ? `is-${this.color}` : ''
    },
    sizeModifier () {
      return trust(this.size) ? `is-${this.size}` : ''
    },
    extrasModifier () {
      if (!this.extras || !Array.isArray(this.extras)) {
        return ''
      }

      return this.extras.map(it => {
        return `is-${it}`
      })
    },
    stateModifier () {
      return trust(this.state) ? `is-${this.state}` : ''
    },
    colModifier () {
      return trust(this.col) ? `is-${this.col}` : ''
    },
    offsetModifier () {
      return trust(this.offset) ? `is-offset-${this.offset}` : ''
    },
    disabledModifier () {
      return trust(this.disabled) ? `is-disabled` : ''
    },
    activeModifier () {
      return this.active ? `is-active` : ''
    },
    hoverableModifier () {
      return this.hoverable ? `is-hoverable` : ''
    },
    flexModifier () {
      return trust(this.flex) ? `is-${this.flex}` : ''
    },
    typeModifier () {
      return trust(this.type) ? `is-${this.type}` : ''
    },
    alignModifier () {
      return trust(this.align) ? `is-${this.align}` : ''
    },
    blockModifier () {
      return this.block ? `is-block` : ''
    },
    inlineModifier () {
      return this.inline ? `is-inline` : ''
    },
    verticalModifier () {
      return trust(this.vertical) ? `is-vertical` : ''
    }
  }
}
