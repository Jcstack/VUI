<template>
  <label class="v-switch"
         :class="[sizeModifier, disabledModifier]"
         ref="label"
         :disabled="disabled"
         :tabindex="disabled ? false : 0"
         @keydown.prevent.enter.space="$refs.label.click()"
         @mousedown="isMouseDown = true"
         @mouseup="isMouseDown = false"
         @mouseout="isMouseDown = false"
         @blur="isMouseDown = false">
    <input v-model="localValue"
           type="checkbox"
           :name="name"
           :disabled="disabled"
           :true-value="trueValue"
           :false-value="falseValue">
    <span class="check" :class="[{ 'is-elastic': isMouseDown }, colorModifier]"></span>
    <span class="control-label"><slot></slot></span>
  </label>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VSwitch',

    mixins: [createMixins(['size', 'disabled', 'color'])],

    props: {
      name: String,
      value: {},
      nativeValue: {},
      trueValue: {
        type: [String, Number, Boolean, Object, Array, Symbol],
        'default': true
      },
      falseValue: {
        type: [String, Number, Boolean, Object, Array, Symbol],
        'default': false
      }
    },
    data () {
      return {
        localValue: this.value,
        isMouseDown: false
      }
    },
    watch: {
      /**
       * When v-model change, set internal value.
       */
      value (value) {
        this.localValue = value
      },
      /**
       * Emit input event to update the user v-model.
       */
      localValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>
