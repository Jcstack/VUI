import Vue from 'vue'

export const $bus = new Vue();

['on', 'off', 'emit', 'once'].forEach(type => {
  $bus[type] = $bus['$' + type].bind($bus)
})

export default {
  computed: {
    '_bus' () {
      return $bus
    }
  }
}
