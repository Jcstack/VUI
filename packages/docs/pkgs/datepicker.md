# Datepicker 日历选框

<div class="demo-box">
  <p>
    <strong>
      {{ date }}
    </strong>
  </p>
  <v-datepicker-input
      v-model="date"
  ></v-datepicker-input>
</div>

<script>
  export default {
    data () {
      return {
        date: '1999-09-15'
      }
    }
  }
</script>
