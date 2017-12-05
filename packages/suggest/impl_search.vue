<template>
  <div class="v-suggest-search">
    <v-suggest
        :local="local"
        :activated="activated"
        ref="suggest"
        @item-selected="_handleItemSelected"
    >
      <div class="as-input" slot="header">
        <div class="v-field" v-if="hasSearchInput">
          <input type="text" class="v-input"
                 @focus="_handleInputFocus"
                 @blur="_handleInputBlur"
                 ref="elInput"
                 v-model="filterKey"
                 v-bind="$attrs"
          >
        </div>
      </div>
      <!-- results item -->
      <template slot="result-item"
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
      <!-- footer -->
      <template slot="footer">
        <slot name="footer"></slot>
      </template>
    </v-suggest>
  </div>
</template>

<script>
  import VSuggest from './impl.vue'
  import {on, off} from '../../sources/utils/dom'
  import debounce from '../../sources/utils/debounce'
  import {isString, isFunction} from '../../sources/utils/is'

  export default {
    name: 'VSuggestSearch',

    props: {
      pending: Boolean,
      local: Boolean,
      hasSearchInput: Boolean,
      onResults: {
        type: Function
      }
    },

    data() {
      return {
        filterKey: '',
        activated: false
      }
    },

    mounted() {
      const {suggest} = this.$refs

      this.hasSearchInput && this._setupSearchInput()

      // search input
      let _filterKey
      let _debouncedFilterKey = debounce(200, false, handleFilterKey.bind(this))

      function handleFilterKey(key) {
        const payload = {
          key, suggest,
          context: this
        }

        const setResults = function (results) {
          // discard the results which not belong to current filter key
          if (results && results.hasOwnProperty('__key') && results.__key !== _filterKey) {
            console.debug('[Suggest Search] discard key', results.__key, '≠', _filterKey)
            return
          }

          this.$emit('received-results', results)
          suggest.setResults(results)
        }

        if (this.local && !isFunction(this.onResults)) {
          this._simpleLocalDataFilter(payload).then(setResults.bind(this))
        } else {
          isFunction(this.onResults) && this.onResults(payload).then(setResults.bind(this))
        }

        _filterKey = key
      }

      const keyUnwatcher = this.$watch('filterKey', (a, b) => {
        if (isString(a) && _filterKey === a.trim()) {
          return
        }

        _debouncedFilterKey(a)
      })
    },

    methods: {
      setLocalData(data) {
        this.$refs.suggest.setLocalData(data)
      },

      resetSearchState () {
        this.filterKey = ''
      },

      _setupSearchInput() {
        const {suggest, elInput} = this.$refs

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
              this.resetSearchState()
              break;
          }

          e.preventDefault()
        }

        this.$watch('activated', (a, b) => {
          if (a) {
            on(elInput, 'keyup', keyupHandler)
          } else {
            off(elInput, 'keyup', keyupHandler)
          }
        })
      },

      _simpleLocalDataFilter(payload) {
        const {suggest} = this.$refs
        const results = !payload.key ? null : suggest.localData.filter(n => {
          return !!~n.title.indexOf(payload.key)
        })

        return Promise.resolve(results)
      },

      _handleInputFocus(e) {
        this.activated = true
      },

      _handleInputBlur(e) {
        this.activated = false
      },

      _handleItemSelected() {
        this.$emit('item-selected', ...Array.from(arguments))
      }
    },

    computed: {
      resultsLength () {
        const {suggest} = this.$refs

        if (!Array.isArray(suggest._results)) {
          return null
        }

        return suggest._results.length
      }
    },

    components: {
      VSuggest
    }
  }
</script>