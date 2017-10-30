<template>
  <table class="v-table" :class="this.options.tableClasses">
    <thead>
    <tr>
      <th v-for="cc in thColumns"
          @click="_headClick(cc)"
      >

        <slot v-if="`${cc[0].indexOf('__')}` == -1"
              :name="`th-item-${cc[0]}`"
        >
          <span> {{ cc[1] }} </span>
        </slot>

        <!-- feature of all select -->
        <slot v-if="cc[0] === '__select'"
              name="v__th-select"
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
              name="v__td-select"
              :row="el"
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
  export default {
    name: 'VTable',

    props: {
      rows: {
        type: Array,
      },
      columns: {
        type: Array,
        'default': []
      },
      options: {
        type: Object,
        'default' () {
          return {
            tableClasses: 'is-bordered is-striped'
          }
        }
      },
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
        vFeatState: {}
      }
    },

    created () {
      if (this.sortable) {
        this.sortableState = {
          activeColumn: false,
        }
      }

      this._preparedInternalColumns()

      // `__` feature
      this.vFeatState.select_all_initialized = false
      this._supportedPrefixFeature('__select')
    },

    watch: {
      'columns' () {
        this._preparedInternalColumns()
      },
      'rows' () {
        this._supportedPrefixFeature('__select')
      }
    },

    computed: {
      'v__selected_all': {
        get () {
          let switcher = false

          if (this.vFeatState.select_all_initialized && this.rows.length) {
            switcher = this.rows.every(n => {
              return Boolean(n.v__selected)
            })
          }

          return switcher
        },

        set (switcher) {
          console.log(switcher)
          if (this.vFeatState.select_all_initialized && this.rows.length) {
            this.rows.forEach(n => {
              n.v__selected = switcher
            })
          }
        }
      }

    },

    methods: {
      _supportedPrefixFeature (feat) {
        if (feat && !!~this.tdColumns.indexOf(feat)) {
          switch (feat.replace(/__/g, '')) {
            case 'select':
              this._injectRowItemField('v__selected', false)

              if (!this.vFeatState.select_all_initialized) {
                this.$set(this.vFeatState, 'select_all_initialized', true)
                this.$on('v-select-all', (switcher) => {
                  this.v__selected_all = switcher
                })
              }

              break
          }
        }
      },
      _injectRowItemField (key, value) {
        this.rows && this.rows.forEach((it) => {
          if (it && !it.hasOwnProperty(key)) {
            this.$set(it, key, value) // force set row field reactive
          }
        })
      },
      _preparedInternalColumns () {
        this.thColumns = []
        this.tdColumns = []
        Array.isArray(this.columns) && this.columns.forEach((it) => {
          let tmp = null
          if (it && !!~it.indexOf('|')) {
            tmp = it.split('|')
            tmp = [tmp[0].trim().toLowerCase(), tmp[1].trim()]
            this.tdColumns.push(tmp[0])
            this.thColumns.push(tmp)
          } else {
            tmp = it.trim()
            this.thColumns.push([tmp, tmp])
            this.tdColumns.push(tmp)
          }
        })
      },
      _orderByColumn (col) {
        this.sortableState.activeColumn = col
        this.$emit('order-by-column', col)
      },
      _headClick (col) {
        this.sortable && this._orderByColumn(col)
      }
    }
  }
</script>