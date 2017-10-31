<template>
  <div class="v-datepicker-panel">
    <v-datepicker-table
        :weekdays-data="tableWeekdaysData"
        :rows-data="tableRowsData"
        :active-date="selectedDate"
    ></v-datepicker-table>
  </div>
</template>

<script>
  import VDatepickerTable from './impl_table.vue'
  import busMixin from '../common/mixinBus'
  import SCalendar from '../../sources/plugins/s.calendar'
  import moment from 'moment'
  import is from 'is-type-of'

  export default {
    name: 'VDatepicker',

    scalendar: null,

    mixins: [busMixin],

    props: {
      inline: Boolean,
      date: {
        type: [String, Date],
        'default' () {
          return new Date()
        }
      },
      format: {
        type: String,
        'default': SCalendar.DEFAULT_FORMAT
      }
    },

    data () {
      return {
        selectedDate: null, // formatted String
        tableRowsData: [],
        tableWeekdaysData: [],
      }
    },

    created () {
      const calendar = this.$options.scalendar = new SCalendar({
        emitter: this._bus
      })

      // events
      this._bus.on(SCalendar.EVENT_DATE_CHANGE, payload => {
        const {prevDate, currDate} = payload
        // maybe the same month
        if (!prevDate || !currDate.isSame(prevDate, 'month')) {
          this._flushTableRowsData()
        }

        this.selectedDate = currDate.format(this.format)
        this.$emit('change', payload)
      })

      this.$on('day-item-click', (payload) => {
        this._selectItem(payload)

        // items handle click event
        this.$emit('item-click', payload)
      })

      // initialize date
      try {
        calendar.date = moment(this.date)
      } catch (e) {
        calendar.date = moment()
        // debug
        console.debug(e)
      }

      this.tableWeekdaysData = calendar.weekdays
    },

    methods: {
      _flushTableRowsData () {
        const {scalendar} = this.$options

        if (scalendar) {
          let rows = []
          scalendar.makeMonthBoard().forEach((n, i, k) => {
            (rows[k = Math.floor(i / 7)] || (rows[k] = []))
            .push(n)
          })

          this.tableRowsData = rows
        }
      },

      _selectItem (item) {
        const {scalendar} = this.$options
        if (item && is.function(item.toMoment)) {
          scalendar.date = item.toMoment() // Unique entry
        }
      }
    },

    computed: {
      selectedDateBag () {
        let bag = {}

        if (this.selectedDate != null) {
          const m = moment(this.selectedDate)
          if (m.isValid()) {
            bag = m
          } else {
            throw new Error('Invalid selectedDate format .')
          }
        }

        return bag
      }
    },

    components: {
      VDatepickerTable
    },

    beforeDestroy () {

    }
  }
</script>