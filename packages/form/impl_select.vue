<template>
  <div class="v-control"
       :class="{
          'is-expanded': expanded,
          'has-icons-left': icon
        }"
  >
    <div class="v-select"
         :class="[sizeModifier, statusType, {
                'is-fullwidth': expanded,
                'is-loading': loading,
                'is-multiple': multiple,
                'is-empty': selected == null,
                'is-fake-face': fakeFace
            }]">

      <select v-model="selected"
              ref="select"
              :multiple="multiple"
              :size="nativeSize"
              v-bind="$attrs"
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

      <!-- fake face -->
      <template v-if="fakeFace">
        <dropdown ref="ref_dropdown"
                  :value="selected"
                  :disabled="$attrs.hasOwnProperty('disabled') && $attrs.disabled !== false"
        >
          <v-button
              :color="color"
              :size="size"
              :is-outlined="outlined"
              :is-loading="loading"
              type="button"
              :disabled="$attrs.hasOwnProperty('disabled') && $attrs.disabled !== false"
              slot="trigger">
              <span>
                {{ fakeFaceValue }}
              </span>
            <span class="has-icon">
                <i class="fa fa-angle-down"></i>
              </span>
          </v-button>
          <!-- fake options -->
          <template v-if="fakeOptions">
            <dropdown-item
                v-for="(it, index) in fakeOptions"
                :value="it.value"
                :divider="it.value === '__divider'"
                :key="`index_${index}`"
            >
              {{ it.text }}
            </dropdown-item>
          </template>
        </dropdown>
      </template>
    </div>
    <!-- icon .etc -->
    <slot name="icon"></slot>
  </div>
</template>

<script>
  import Debug from '../../sources/utils/debug'
  import mixinElement from '../common/mixinFormElement'
  import Dropdown, {DropdownItem} from '../dropdown'
  import Button from '../button/index'

  const debug = Debug('vui:form:select')

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
      nativeSize: [String, Number],
      fakeFace: Boolean
    },

    data() {
      return {
        selected: this.value,
        fakeOptions: null,
      }
    },

    mounted() {
      if (this.fakeFace) {
        this.fakeOptions = this._collectOptionsData()

        // Setup dropdown
        debug('setup dropdown with fake mode .')
        const {ref_dropdown} = this.$refs

        ref_dropdown.$on('item-selected', v => {
          if (v && ~v.indexOf('__')) {
            // invoke custom command
            debug('received custom command', v)
            switch (v = v.substr(2)) {
              case 'reset':
                this.reset()
                break
              default:
                this.$emit('option-command', v, this)
            }
          } else {
            this.selected = v
          }
        })
      }
    },

    methods: {
      _collectOptionsData() {
        const data = []

        if (Array.isArray(this.$slots.default)) {
          this.$slots.default.reduce((d, v) => {
            if (v.tag === 'option') {
              data.push({
                text: v.elm.innerText,
                value: v.elm.value
              })
            }
          }, data)
        }

        return data
      },

      reset() {
        this.selected = null
      }
    },

    computed: {
      fakeFaceValue() {
        if (!this.fakeFace) return

        if (!this.selected || !this.fakeOptions || !this.fakeOptions.length) {
          return this.placeholder || 'Untitled'
        }

        let r
        this.fakeOptions.some(n => {
          if (n.value === this.selected) {
            r = n
            return true
          }
        })

        return r ? r.text : ''
      }
    },

    watch: {
      value(value) {
        this.selected = value
      },

      selected(value) {
        this.$emit('input', value)
      },

      fakeFace() {
        throw new Error('[vui:form:select] Not Supported when Change FakeFace prop in Runtime .')
      }
    },

    components: {
      Dropdown,
      DropdownItem,
      VButton: Button
    }
  }
</script>