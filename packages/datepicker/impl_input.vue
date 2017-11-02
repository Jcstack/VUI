<template>
  <div class="v-datepicker has-input">
    <v-dropdown>
      <div class="v-control"
           slot="trigger"
      >
        <input type="text"
               ref="input"
               autocomplete="off"
               class="v-input"
               readonly="readonly"
               :value="value"
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
                <select v-model="inputYear">
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
                <select v-model="inputMonth">
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

  export default {
    name: 'VDatepickerInput',

    data () {
      return {
        years: Array(100).fill(0).map((n, i) => (1949 + i)),
        months: Array(12).fill(0).map((n, i) => (i + 1)),
        inputYear: '',
        inputMonth: ''
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
      }

      this._syncLocalYearAndMonth(m)
    },

    watch: {
      'value' (val) {
        const m = moment(val)
        if (!val || !m.isValid()) return

        // update year/month picker
        this._syncLocalYearAndMonth(m)
      },

      'inputYear' (year, bYear) {
        console.debug('inputYear Changed', year, bYear)

        const {scalendar} = this.$refs.datepicker.$options

        if (!bYear || !year || year === scalendar.date.year()) return

        // update calendar
        this.$emit('input', scalendar.date.clone().year(year).date(1).format(this.format))
      },

      /**
       * @param month {Number} `1` base
       * @param bMonth
       */
      'inputMonth' (month, bMonth) {
        const {scalendar} = this.$refs.datepicker.$options

        if (!bMonth || !month || (month - 1) === scalendar.date.month()) return

        // update calendar
        this.$emit('input', scalendar.date.clone().month(month - 1).date(1).format(this.format))
      }
    },

    methods: {
      _syncLocalYearAndMonth (m) {
        this.inputYear = m.year()
        this.inputMonth = (m.month() + 1)
      },

      _handlePickerDateChange (e) {
        if (e && e.prevDate != null) {
          this.$emit('input', e.currDate.format(this.format))
        }
      }
    },

    computed: {},

    components: {
      VDropdown,
      VDatepicker
    }
  }
</script>