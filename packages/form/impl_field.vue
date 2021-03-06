<template>
  <div class="v-field" :class="[
        fieldType,
        localPosition,
        {
          'is-grouped-multiline': groupMultiline
        }]">
    <label class="v-label" :for="labelFor" v-if="label">{{ label }}</label>
    <!-- control elements -->
    <slot></slot>
    <p class="v-help" :class="[typeModifier]" v-if="localMessage" v-html="formattedMessage"></p>
  </div>
</template>

<script>
  import {createMixins} from '../../sources/utils/mixin'

  export default {
    name: 'VField',

    mixins: [createMixins(['type', 'magic'])],

    props: {
      label: String,
      labelFor: String,
      message: [String, Array],
      grouped: Boolean,
      groupMultiline: Boolean,
      position: String, // centered , right, fullwidth
      horizontal: Boolean, // @todo implementation
      addons: {
        type: Boolean,
        'default': true // for convinces
      }
    },

    data() {
      return {
        localMessage: this.message
      }
    },

    computed: {
      /**
       * This is not kept like the others (is-small, etc.),
       * because since 'has-addons' is set automatically it
       * doesn't make sense to teach users what addons are exactly.
       */
      localPosition() {
        if (this.position === undefined) return
        const position = this.position.split('-')
        if (position.length < 1) return
        const prefix = this.grouped
            ? 'is-grouped-'
            : 'has-addons-'
        if (this.position) return prefix + position[1]
      },
      /**
       * Field has addons if there are more than one slot
       * (element / component) in the Field.
       * Or is grouped when prop is set.
       */
      fieldType() {
        if (this.grouped) {
          return 'is-grouped'
        } else if (this.$slots.default !== undefined && this.$slots.default.length > 1 && this.addons) {
          return 'has-addons'
        }
      },

      /**
       * Formatted message in case it's an array
       * (each element is separated by <br> tag)
       */
      formattedMessage() {
        if (this.localMessage) {
          if (Array.isArray(this.localMessage)) {
            return this.localMessage.filter((value) => {
              if (value) {
                return value
              }
            }).join(' <br> ')
          } else {
            return this.localMessage
          }
        } else {
          return this.localMessage
        }
      }
    }
  }
</script>