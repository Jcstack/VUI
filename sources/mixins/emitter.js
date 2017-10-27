function broadcast (componentName, eventName, params, componentKey = 'name') {
  this.$children.forEach(child => {
    let name = child.$options[componentKey]

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    vDispatch (componentName, eventName, params, componentKey = 'name') {
      let parent = this.$parent || this.$root
      let name = parent.$options[componentKey]

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options[componentKey]
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    vBroadcast (componentName, eventName, params, componentKey = 'name') {
      broadcast.call(this, componentName, eventName, params, componentKey)
    }
  }
}
