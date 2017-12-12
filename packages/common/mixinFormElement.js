import { createMixins } from '../../sources/utils/mixin'

export default {
  mixins: [createMixins(['size', 'color'])],

  props: {
    outlined: Boolean,
    expanded: Boolean,
    loading: Boolean,
    icon: [Boolean, String],

    // Native options to use in HTML5 validation
    autocomplete: String,
    maxlength: [Number, String]
  },

  methods: {},

  computed: {
    parentField () {
      let parent = this.$parent
      for (let i = 0; i < 3; i++) {
        if (parent && parent.$options.name !== 'VField') {
          parent = parent.$parent
        }
      }
      return parent
    },

    /**
     * Get the type prop from parent if it's a Field.
     */
    statusType () {
      if (!this.parentField) return

      return this.parentField.typeModifier
    }
  }
}
