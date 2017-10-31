<template>
  <div class="v-datepicker">
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
      ></v-datepicker>
    </v-dropdown>
  </div>
</template>

<script>
  import Scalendar from '../../sources/plugins/s.calendar'
  import VDropdown from '../dropdown'
  import VDatepicker from './impl.vue'

  export default {
    name: 'VDatepickerInput',

    props: {
      value: {
        type: String,
        'default': null
      },
      format: {
        type: String,
        'default': Scalendar.DEFAULT_FORMAT
      }
    },

    methods: {
      _handlePickerDateChange (e) {
        if (e && e.prevDate != null) {
          this.$emit('input', e.currDate.format(this.format))
        }
      }
    },

    components: {
      VDropdown,
      VDatepicker
    }
  }
</script>