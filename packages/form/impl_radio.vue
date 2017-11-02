<template>
  <label class="v-radio"
         ref="label"
         :class="[sizeModifier, disabledModifier]"
         :disabled="disabled"
         :tabindex="disabled ? false : 0"
         @keydown.prevent.enter.space="$refs.label.click()">
    <input v-model="localValue"
           type="radio"
           :disabled="disabled"
           :name="name"
           :value="nativeValue">
    <span class="v-control-label"><slot></slot></span>
  </label>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VRadio',

    mixins: [createMixins(['size', 'disabled'])],

    props: {
      name: String,
      value: {},
      nativeValue: {},
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
        // only trigger input event
        if (value === this.nativeValue) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>