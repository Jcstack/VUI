# Datepicker 日历选框

<div class="demo-box">
  <p>
    <strong>
      {{ date }}
    </strong>
  </p>
  <v-datepicker-input
      v-model="date"
      placeholder="Click to Select Date"
  ></v-datepicker-input>
</div>

<script>
  export default {
    data () {
      return {
        date: ''
      }
    }
  }
</script>
