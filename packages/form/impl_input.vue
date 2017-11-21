<template>
  <div class="v-control"
       :class="[iconPosition, {
            'is-expanded': expanded,
            'is-loading': loading,
            'is-clearfix': !hasMessage
        }]">

    <input v-if="type !== 'textarea'"
           ref="input"
           class="v-input"
           :class="[statusType, sizeModifier]"
           :type="localType"
           :autocomplete="autocomplete"
           :maxlength="maxlength"
           :value="localValue"
           v-bind="$attrs"
           @input="_handleInput"
           @blur="$emit('blur', $event)"
           @focus="$emit('focus', $event)">

    <textarea v-else
              ref="textarea"
              class="v-textarea"
              :class="[statusType, sizeModifier]"
              :maxlength="maxlength"
              :value="localValue"
              v-bind="$attrs"
              @input="_handleInput"
              @blur="$emit('blur', $event)"
              @focus="$emit('focus', $event)"></textarea>

    <!-- icons .etc -->
    <slot name="icon"></slot>

    <small class="v-help is-counter" v-if="maxlength && hasCounter">{{ valueLength }} / {{ maxlength }}</small>
  </div>
</template>

<script>
  import mixinElement from '../common/mixinFormElement'

  export default {
    name: 'VInput',

    mixins: [mixinElement],

    props: {
      value: [Number, String],
      type: {
        type: String,
        'default': 'text'
      },
      passwordReveal: Boolean, // @todo
      hasCounter: {
        type: Boolean,
        'default': true
      }
    },

    data () {
      return {
        localValue: this.value,
        localType: this.type, // maybe write
        isPasswordVisible: false,
        _elementRef: this.type === 'textarea'
          ? 'textarea'
          : 'input'
      }
    },

    computed: {
      hasIconRight () {
        return this.passwordReveal || this.loading || this.statusType
      },

      iconPosition () {
        if (this.icon && this.hasIconRight) {
          return 'has-icons-left has-icons-right'
        } else if (!this.icon && this.hasIconRight) {
          return 'has-icons-right'
        } else if (this.icon) {
          return 'has-icons-left'
        }
      },

      hasMessage () {
        return this.$parent.localMessage
      },

      passwordVisibleIcon () {
        return !this.isPasswordVisible ? 'visibility' : 'visibility_off'
      },

      valueLength () {
        return this.localValue ? this.localValue.length : 0
      }
    },

    watch: {
      /**
       * When v-model is changed:
       *   1. Set internal value.
       *   2. If it's invalid, validate again.
       */
      value (value) {
        this.localValue = value
      },

      localValue (value) {
        this.$emit('input', value)
      }
    },

    methods: {
      /**
       * Toggle the visibility of a password-reveal input
       * by changing the type and focus the input right away.
       */
      _togglePasswordVisibility () {
        this.isPasswordVisible = !this.isPasswordVisible
        this.localType = this.isPasswordVisible ? 'text' : 'password'
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      },
      /**
       * Input's 'input' event listener, 'nextTick' is used to prevent event firing
       * before ui update, helps when using masks (Cleavejs and potentially others).
       */
      _handleInput (event) {
        this.$nextTick(() => { this.localValue = event.target.value })
      }
    }
  }
</script>