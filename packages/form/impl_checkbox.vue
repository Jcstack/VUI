<template>
  <label class="v-checkbox"
         :class="[
            sizeModifier,
            disabledModifier,
            fakeFace && 'is-fake-face'
         ]"
         ref="label"
         :disabled="disabled"
         @keydown.prevent.enter.space="$refs.label.click()">

    <!-- native input -->
    <input v-model="localValue"
           :tabindex="disabled ? false : 0"
           type="checkbox"
           :disabled="disabled"
           :name="nativeName"
           :value="nativeValue"
           :true-value="trueValue"
           :false-value="falseValue"
           ref="checkbox"
    >

    <!-- fake face -->
    <span class="v-fake-checkbox" v-if="fakeFace"></span>

    <!-- label text -->
    <span class="v-control-label"><slot></slot></span>
  </label>
</template>

<script>
  import {createMixins} from '../../sources/utils/mixin'

  export default {
    name: 'VCheckbox',

    mixins: [createMixins(['size', 'disabled'])],

    props: {
      value: {},
      nativeValue: {},
      nativeName: String,
      trueValue: {
        type: [String, Number, Boolean, Object, Array, Symbol],
        'default': true
      },
      falseValue: {
        type: [String, Number, Boolean, Object, Array, Symbol],
        'default': false
      },
      fakeFace: Boolean,
      indeterminate: Boolean
    },

    data() {
      return {
        localValue: this.value
      }
    },

    mounted () {
      const {checkbox} = this.$refs

      this.$watch('indeterminate', t => {
        checkbox.indeterminate = t
      }, {
        immediate: true
      })
    },

    watch: {
      value(value) {
        this.localValue = value
      },

      localValue(value) {
        this.$emit('input', value)
      }
    }
  }
</script>