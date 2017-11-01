# Datepicker

<div class="demo-box">
  <strong>
    {{ date }}
  </strong>
  <input-datepicker
      v-model="date"
  ></input-datepicker>
</div>

<script>
  import { InputDatepicker } from 'packages/datepicker'

  export default {

    data () {
      return {
        date: '1999-09-15'
      }
    },

    components: {
      InputDatepicker
    }
  }
</script>