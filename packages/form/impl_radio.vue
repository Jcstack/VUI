<template>
  <label class="v-radio"
         ref="label"
         :class="[
            sizeModifier,
            disabledModifier,
            fakeFace && 'is-fake-face'
         ]"
         :disabled="disabled"
         @keydown.prevent.enter.space="$refs.label.click()">
    <!-- native input -->
    <input v-model="localValue"
           :tabindex="disabled ? false : 0"
           type="radio"
           :disabled="disabled"
           :name="nativeName"
           :value="nativeValue">

    <!-- fake face -->
    <span class="v-fake-radio" v-if="fakeFace"></span>

    <!-- label text -->
    <span class="v-control-label"><slot></slot></span>
  </label>
</template>

<script>
  import {createMixins} from '../../sources/utils/mixin'

  export default {
    name: 'VRadio',

    mixins: [createMixins(['size', 'disabled'])],

    props: {
      value: {},
      nativeName: String,
      nativeValue: {},
      fakeFace: Boolean
    },

    data() {
      return {
        localValue: this.value
      }
    },

    watch: {
      value(value) {
        this.localValue = value
      },

      localValue(value) {
        // only trigger input event
        if (value === this.nativeValue) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>