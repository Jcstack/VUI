<template>
  <table class="v-table" :class="[
    _tableClasses,
    magicModifier
  ]">
    <thead>
    <tr>
      <th v-for="cc in thColumns"
          @click="_headClick(cc[0], $event)"
          v-bind="cc[2]"
      >

        <slot v-if="`${cc[0].indexOf('__')}` == -1"
              :name="`th-item-${cc[0]}`"
        >
          <span> {{ cc[1] }} </span>
        </slot>

        <!-- feature of all select -->
        <slot v-if="cc[0] === '__select'"
              name="th-item__select"
        >
          <span class="v-th-select">
            <label class="v-checkbox">
              <input type="checkbox" v-model="v__selected_all"/>
              {{ cc[1] }}
            </label>
          </span>
        </slot>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(el, index) in rows"
        :class="{
          'is-selected': el.v__selected
        }"
        :key="el.v__key"
    >
      <td v-for="c in tdColumns">
        <slot v-if="`${c.indexOf('__')}` == -1"
              :name="`td-item-${c}`"
              :row="el"
              :k="c"
              :v="el[c]"
              :index="index"
        >
          {{ el[c] }}
        </slot>

        <!-- feature of select -->
        <slot v-if="c === '__select'"
              name="td-item__select"
              :row="el"
              :index="index"
        >
          <span class="v-td-select">
            <label class="v-checkbox">
              <input type="checkbox" v-model="el.v__selected"/>
            </label>
          </span>
        </slot>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import { isFunction } from '../../sources/utils/is'
  import { createMixins } from '../../sources/utils/mixin'

  const ORDER_ASC = 'asc'
  const ORDER_DESC = 'desc'

  export default {
    name: 'VTable',

    mixins: [ createMixins(['magic']) ],

    props: {
      rows: {
        type: Array,
      },
      columns: {
        type: Array,
        'default': Array
      },
      bordered: Boolean,
      striped: Boolean,
      sortable: {
        type: Boolean,
        'default': false
      }
    },

    data () {
      return {
        thColumns: [],
        tdColumns: [],
        sortableState: null,
        featureState: {}
      }
    },

    created () {
      if (this.sortable) {
        this.sortableState = {}
      }

      this._preparedLocalColumns()
      this._preparedLocalRows()

      // `__` feature
      this.featureState.select_all_initialized = false
      this._supportedPrefixFeature('__select')
    },

    watch: {
      'columns' () {
        this._preparedLocalColumns()
      },
      'rows' () {
        this._preparedLocalRows()
        this._supportedPrefixFeature('__select')
      }
    },

    computed: {
      'v__selected_all': {
        get () {
          let switcher = false

          if (this.featureState.select_all_initialized && this.rows.length) {
            switcher = this.rows.every(n => {
              return Boolean(n.v__selected)
            })
          }

          return switcher
        },

        set (switcher) {
          if (this.featureState.select_all_initialized && this.rows.length) {
            this.rows.forEach(n => {
              n.v__selected = switcher
            })
          }
        }
      },

      _tableClasses () {
        let cls = []

        this.bordered && cls.push('is-bordered')
        this.striped && cls.push('is-striped')

        return cls
      }
    },

    methods: {
      _makeSortableColumnState (column, isDesc = true) {
        return {
          [`${column.toLowerCase()}`]: {
            isDesc
          }
        }
      },

      _supportedPrefixFeature (feat) {
        if (feat && !!~this.tdColumns.indexOf(feat)) {
          switch (feat.replace(/__/g, '')) {
            case 'select':
              this._injectRowItemField('v__selected', false)

              if (!this.featureState.select_all_initialized) {
                this.$set(this.featureState, 'select_all_initialized', true)
                this.$on('v-select-all', (switcher) => {
                  this.v__selected_all = switcher
                })
              }

              break
          }
        }
      },

      _injectRowItemField (key, value) {
        this.rows && this.rows.forEach((it, index) => {
          if (it && !it.hasOwnProperty(key)) {
            this.$set(it, key, isFunction(value) ? value(it, index) : value) // force set row field reactive
          }
        })
      },

      _preparedLocalColumns () {
        this.thColumns = []
        this.tdColumns = []
        Array.isArray(this.columns) && this.columns.forEach((it) => {
          let tmp = null
          if (it && !!~it.indexOf('|')) {
            tmp = it.split('|')
            // extra attrs
            const attrs = {}
            if (tmp[2] && /^\d+/.test(tmp[2])) {
              attrs.width = tmp[2]
            }

            tmp = [tmp[0].trim(), tmp[1].trim(), attrs] // index[[2]] for with of percent
            this.tdColumns.push(tmp[0])
            this.thColumns.push(tmp)
          } else {
            tmp = it.trim()
            this.thColumns.push([tmp, tmp])
            this.tdColumns.push(tmp)
          }
        })
      },

      _preparedLocalRows () {
        // inject `key`
        this._injectRowItemField('v__key', (n, index) => {
          return `item_key_${(n && n.id) ? ('id_' + n.id) : ('index_' + index)}`
        })
      },

      _orderByColumn (col, toggleDesc = false) {
        const k = col.toLowerCase()

        if (toggleDesc) {
          let s = this.sortableState[k]

          if (s == null) {
            s = this._makeSortableColumnState(col)[k]
          }

          // toggle order state
          s.isDesc = !s.isDesc

          if (this.sortableState[k] !== s) {
            this.sortableState[k] = s
          }
        }

        this.$emit('order-by-column', this.sortableState, k)
      },

      _isFeatureCol (tag) {
        return tag && tag.indexOf('__') === 0
      },

      _headClick (col) {
        if (this.sortable && !this._isFeatureCol(col)) {
          this._orderByColumn(col, true)
        }
      }
    }
  }
</script>