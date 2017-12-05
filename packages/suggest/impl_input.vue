<template>
  <div class="v-suggest-input"
       :class="suggestInputTheme"
  >
    <v-dropdown
        ref="dropdown"
        :custom="true"
    >
      <div class="v-field" slot="trigger">
        <div class="v-control"
             :class="{
              'is-loading': loading
             }"
        >
          <input
              type="text"
              class="v-input"
              v-bind="$attrs"
              v-model="localValue"
              @focus="_handleInputFocus"
              @blur="_handleInputBlur"
              ref="elInput"
              :class="[sizeModifier, colorModifier]"
              :disabled="disabled"
          >
        </div>
      </div>

      <!-- panel -->
      <v-suggest-search
          :local="local"
          :on-results="onResults"
          :has-search-input="false"
          @item-selected="_handleItemSelected"
          ref="suggest"
      >
        <template
            slot="footer">
          <slot name="result-footer"></slot>
        </template>
        <template
            slot="result-item"
            slot-scope="{ index, item }"
        >
          <slot name="result-item"
                :index="index"
                :item="item"
          >
            <a href="javascript:;" class="as-link-item">
              {{index + 1}} . {{ item.title }}
            </a>
          </slot>
        </template>
      </v-suggest-search>
    </v-dropdown>
  </div>
</template>

<script>
  import VDropdown from '../dropdown/impl.vue'
  import VSuggestSearch from './impl_search.vue'
  import VSuggest from './impl.vue'
  import {isString, isFunction} from '../../sources/utils/is'
  import {on, off} from '../../sources/utils/dom'
  import {createMixins} from '../../sources/utils/mixin'

  export default {
    name: 'VSuggestInput',

    mixins: [createMixins(['color', 'size', 'disabled'])],

    props: {
      loading: Boolean,
      suggestInputTheme: [String, Array, Object],
      value: String,
      local: Boolean,
      onResults: {
        type: Function
      },
      toValueString: {
        type: Function
      }
    },

    data() {
      return {
        localValue: this.value
      }
    },

    created() {
      this._isInputFocused = false
      this._selectedItem = null
    },

    mounted() {
      this._setupSearchInput()

      const {suggest} = this.$refs

      suggest.$on('received-results', results => {
        if (results && Array.isArray(results) && results.length) {
          // force show panel
          this.showResultsPanel()
        }
      })

      suggest.$watch('resultsLength', (a, b) => {
        if (a > 0) {
          this.showResultsPanel()
        } else {
          this.hideResultsPanel()
        }
      })
    },

    watch: {
      'localValue'(a) {
        if (this._selectedItem == null) {
          // change input value by user
          this.$refs.suggest.filterKey = a
        } else {
          this._selectedItem = null
        }

        this.$emit('update', a)
      }
      // 'value' (a) { /* @supported */ }
    },

    methods: {
      showResultsPanel() {
        const {dropdown} = this.$refs

        if (this._isInputFocused) {
          dropdown.active = true
        }
      },

      hideResultsPanel() {
        const {dropdown} = this.$refs

        dropdown.active = false
      },

      _setupSearchInput() {
        const {elInput} = this.$refs
        const {suggest} = this.$refs.suggest.$refs

        const keyupHandler = (e) => {
          switch (e.which) {
            case 40:
              suggest.keyDown()
              break
            case 38:
              suggest.keyUp()
              break
            case 13:
              suggest.keyEnter()
              break
            case 27: // Esc
              break;
          }

          e.preventDefault()
        }

        const suggestSearch = this.$refs.suggest

        suggestSearch.$watch('activated', (a, b) => {
          if (a) {
            on(elInput, 'keyup', keyupHandler)
          } else {
            off(elInput, 'keyup', keyupHandler)
          }
        })

        // local mode
        on(elInput, 'focus', e => {
          this._isInputFocused = true

          if (suggestSearch.resultsLength) {
            this.showResultsPanel()
          }
        })

        on(elInput, 'blur', e => {
          this._isInputFocused = false
        })
      },

      _localToValueString(item) {
        return `[${item.id}] ${item.title} / ${item.original_title}`
      },

      _handleItemSelected(item, event) {
        const {dropdown} = this.$refs

        this._selectedItem = item

        this.localValue = isFunction(this.toValueString) ? this.toValueString(item) : item.toString()
        this.hideResultsPanel()

        this.$emit('item-selected', item, event)
      },

      _handleInputFocus(e) {
        this.$refs.suggest.activated = true
      },

      _handleInputBlur(e) {
        this.$refs.suggest.activated = false
      },

      setLocalData(data) {
        this.$refs.suggest.setLocalData(data)
      }
    },

    components: {
      VDropdown,
      VSuggestSearch
    }
  }
</script>