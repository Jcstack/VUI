<template>
  <div class="v-control"
       :class="{
          'is-expanded': expanded,
          'has-icons-left': icon
        }"
  >
        <span class="v-select"
              :class="[sizeModifier, statusType, {
                'is-fullwidth': expanded,
                'is-loading': loading,
                'is-multiple': multiple,
                'is-empty': selected == null
            }]">

            <select v-model="selected"
                    ref="select"
                    :multiple="multiple"
                    :size="nativeSize"
                    @blur="$emit('blur', $event)"
                    @focus="$emit('focus', $event)">

                <option
                    v-if="placeholder"
                    :value="null"
                    selected
                    disabled
                    hidden>
                    {{ placeholder }}
                </option>
                <slot></slot>

            </select>
        </span>
    <!-- icon .etc -->
    <slot name="icon"></slot>
  </div>
</template>

<script>
  import mixinElement from '../common/mixinFormElement'

  export default {
    name: 'VSelect',

    mixins: [mixinElement],

    props: {
      value: {
        type: [String, Number, Boolean, Object, Array, Symbol],
        'default': null
      },
      placeholder: String,
      multiple: Boolean,
      nativeSize: [String, Number]
    },

    data () {
      return {
        selected: this.value,
        _elementRef: 'select'
      }
    },

    watch: {
      /**
       * When v-model is changed:
       *   1. Set the selected option.
       *   2. If it's invalid, validate again.
       */
      value (value) {
        this.selected = value
      },
      /**
       * When selected:
       *   1. Emit input event to update the user v-model.
       *   3. If it's invalid, validate again.
       */
      selected (value) {
        this.$emit('input', value)
      }
    }
  }
</script>