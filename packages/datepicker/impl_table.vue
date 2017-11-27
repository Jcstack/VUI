<template>
  <div class="v-datepicker-table">
    <div class="table-header">
            <span class="table-cell" v-for="it in weeks">
              {{ it }}
            </span>
    </div>
    <div class="table-body">
      <div class="table-row" v-for="row in days">
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
      weeks: {
        type: Array,
        required: true,
        'default': Array
      },
      days: {
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
        this.vDispatch('VDatepicker', 'table-day-item-click', e)
      }
    }
  }
</script>