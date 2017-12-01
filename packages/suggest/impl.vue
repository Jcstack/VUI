<template>
  <div class="v-suggest">
    <slot name="header"></slot>
    <div class="v-suggest-panel">
      <ul v-if="Array.isArray(_results)">
        <li v-for="(item, $index) in _results"
            :key="item.__key"
            :class="['as-item', {
              'is-active': activeIndex === $index
            }]"
            @click="_handleItemClick(item, $index, $event)"
        >
          <slot name="result-item"
                :index="$index"
                :item="item"
          >
            <a href="javascript:;" class="as-link-item">
              {{$index + 1}} . {{ item.title }}
            </a>
          </slot>
        </li>
      </ul>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  import { pluckValidCircleIndex } from '../../sources/utils'

  export default {
    name: 'VSuggest',

    props: {
      local: Boolean
    },

    data() {
      return {
        pending: false,
        localData: null, // for `local mode`
        results: null, // filtered results
        activated: false, // could be `keyup` `keydown`
        activeIndex: null,
      }
    },

    methods: {
      _makeItemKey(items) {
        if (!Array.isArray(items)) return items

        const KEY = '__key'

        return items.map(function (n, i) {
          if (n && !n.hasOwnProperty(KEY)) {
            if (n.id) {
              n[KEY] = 'id_' + n.id
            } else {
              n[KEY] = 'index_' + i
            }
          }

          return n
        })
      },

      _handleItemClick (item, index, event) {
        this.activeIndex = +index

        this.$emit('item-selected', item, event)
      },

      _getItemByIndex (index) {
        if (Number.isNaN(+index) || !Array.isArray(this._results) || this._results.length === 0) {
          return null
        }

        return this._results[index]
      },

      _moveActiveIndex (step) {
        if (!this.activated || !Array.isArray(this._results) || this._results.length === 0) {
          this.activeIndex = null
          return
        }

        const len = this._results.length

        this.activeIndex = pluckValidCircleIndex(step, this.activeIndex, len)
      },

      keyUp () {
        this._moveActiveIndex(-1)
      },

      keyDown () {
        this._moveActiveIndex(1)
      },

      keyEnter () {
        if (!this.activated || !this.activeIndex) return

        const item = this._getItemByIndex(this.activeIndex)

        this.$emit('item-selected', item)
      },

      setResults(results) {
        if (!Array.isArray(results)) {
          results = null
        }

        this.results = this._makeItemKey(results)
      },

      setLocalData(data) {
        if (!this.local) return

        if (!Array.isArray(data)) {
          data = null
        }

        this.localData = this._makeItemKey(data)
      }
    },

    watch: {
      '_results' () {
        this.activeIndex = null
      }
    },

    computed: {
      _results() {
        let results = this.results

        if (this.local) {
          if (this.results == null && Array.isArray(this.localData)) {
            // filter
            return this.localData.slice(0, 10)
          }
        }

        return results
      }
    }
  }
</script>