<template>
  <div class="v-datepicker-table">
    <div class="table-header">
            <span class="table-cell" v-for="it in weekdaysData">
              {{ it }}
            </span>
    </div>
    <div class="table-body">
      <div class="table-row" v-for="row in rowsData">
        <div class="table-cell"
             :class="{
                    'is-unselectable': el.disabled,
                    'is-selectable': !el.disabled,
                    'is-selected': (activeDate && el.date === activeDate)
                   }"
             v-for="el in row"
             @click="_handleSelect(el)"
        >
          {{ el.dd }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import emitter from '../../sources/mixins/emitter'

  export default {
    name: 'VDatepickerTable',

    mixins: [emitter],

    props: {
      weekdaysData: {
        type: Array,
        'default': Array
      },
      rowsData: {
        type: Array,
        'default': Array
      },
      activeDate: {
        type: String,
        'default': null
      }
    },

    methods: {
      _handleSelect (e) {
        this.vDispatch('VDatepicker', 'day-item-click', e)
      }
    }
  }
</script>