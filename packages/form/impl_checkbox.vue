<template>
  <label class="v-checkbox"
         :class="[sizeModifier, disabledModifier]"
         ref="label"
         :disabled="disabled"
         :tabindex="disabled ? false : 0"
         @keydown.prevent.enter.space="$refs.label.click()">
    <input v-model="localValue"
           type="checkbox"
           :disabled="disabled"
           :name="name"
           :value="nativeValue"
           :true-value="trueValue"
           :false-value="falseValue">
    <span class="v-control-label"><slot></slot></span>
  </label>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VCheckbox',

    mixins: [createMixins(['size', 'disabled'])],

    props: {
      value: {},
      nativeValue: {},
      name: String,
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
        localValue: this.value
      }
    },
    watch: {
      value (value) {
        this.localValue = value
      },
      localValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>