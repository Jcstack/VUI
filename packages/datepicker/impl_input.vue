<template>
  <div class="v-datepicker has-input">
    <v-dropdown
        ref="dropdown"
    >
      <div class="v-control"
           slot="trigger"
      >
        <input type="text"
               ref="input"
               autocomplete="off"
               class="v-input"
               readonly="readonly"
               :value="formatDateValue"
        >
      </div>

      <!-- picker panel -->
      <v-datepicker
          :date="value"
          @change="_handlePickerDateChange"
          ref="datepicker"
      >
        <div slot="header" class="v-datepicker-header">
          <div class="v-field is-horizontal">
            <div class="v-control">
              <div class="v-select">
                <select v-model="localInputYear">
                  <option :value="el"
                          v-for="el in years"
                  >{{el}}年
                  </option>
                </select>
              </div>
            </div>
            <div class="v-control">
              <button class="v-btn" @click="$emit('input', new Date())">今天</button>
            </div>
            <div class="v-control">
              <div class="v-select">
                <select v-model="localInputMonth">
                  <option :value="el" v-for="el in months">{{el}}月份</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </v-datepicker>
    </v-dropdown>
  </div>
</template>

<script>
  import Scalendar from '../../sources/plugins/s.calendar'
  import VDropdown from '../dropdown'
  import VDatepicker from './impl.vue'
  import moment from 'moment'
  import is from 'is-type-of'

  export default {
    name: 'VDatepickerInput',

    data () {
      return {
        years: Array(100).fill(0).map((n, i) => (1949 + i)),
        months: Array(12).fill(0).map((n, i) => (i + 1)),
      }
    },

    props: {
      value: {
        type: [String, Date],
        required: true,
        'default': null
      },
      format: {
        type: String,
        'default': Scalendar.DEFAULT_FORMAT
      }
    },

    created () {
      let m = null

      if (!this.value || !(m = moment(this.value)).isValid()) {
        m = moment()
        this.$emit('input', m.format(this.format))
      }
    },

    mounted () {
      // events
      this.$refs.datepicker.$on('item-click', e => {
        // toggle dropdown
        this.$refs.dropdown._handleToggle()
      })
    },

    watch: {},

    methods: {
      _handlePickerDateChange (e) {
        if (e && e.prevDate != null) {
          let to, lo

          to = e.currDate.format(this.format)
          e = moment(this.value)
          lo = (this.value && e.isValid()) ? e.format(this.format) : false

          lo && (lo !== to) && this.$emit('input', to)
        }
      },

      _validateDateValue () {
        const m = moment(this.value)
        if (!this.value || !m.isValid()) {
          throw new Error('[VDatepickerInput] Error Date Value .')
        }

        return m
      }
    },

    computed: {
      localInputYear: {
        get () {
          const m = this._validateDateValue()

          return m.year()
        },

        set (a) {
          if (this.localInputYear === +a) return

          const {scalendar} = this.$refs.datepicker.$options

          // update calendar
          this.$emit('input', scalendar.date.clone().year(+a).date(1).format(this.format))
        }
      },

      localInputMonth: {
        get () {
          const m = this._validateDateValue()

          return (m.month() + 1)
        },

        set (a) {
          if (this.localInputMonth === +a) return

          const {scalendar} = this.$refs.datepicker.$options

          // update calendar
          this.$emit('input', scalendar.date.clone().month(+a - 1).date(1).format(this.format))
        }
      },

      formatDateValue () {
        if (is.date(this.value)) {
          return moment(this.val).format(this.format)
        } else if (moment.isMoment(this.value)) {
          return this.value.format(this.format)
        }

        return this.value
      }
    },

    components: {
      VDropdown,
      VDatepicker
    }
  }
</script>