import Vue from 'vue'

function makeBus ($bus) {
  if ($bus && $bus.on == null) {
    ['on', 'off', 'emit', 'once'].forEach(type => {
      $bus[type] = $bus['$' + type].bind($bus)
    })
  }

  return $bus
}

export const $bus = makeBus(new Vue())

export default {
  methods: {
    _makeSelfBus () {
      return makeBus(this)
    }
  },

  computed: {
    'vBus' () {
      return $bus
    }
  }
}
