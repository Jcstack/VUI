<template>
  <span class="has-icon"
        :class="[ iconModifierCls ]"
  >
    <i :class="iconFontCls"></i>
  </span>
</template>

<script>
  export default {
    name: 'VIcon',

    props: {
      ns: {
        type: String,
      },

      color: {
        type: String
      },

      size: {
        type: String
      },

      icon: {
        type: String
      }
    },

    created () {},

    computed: {
      iconModifierCls () {
        let cls = []
        this.color && cls.push('has-text-' + this.color)
        this.size && cls.push('is-' + this.size)

        return cls
      },

      iconFontCls () {
        debugger
        let cls = []

        if (this.ns == null) {
          cls = this.icon || ''
        } else {
          cls.push(this.ns)
          cls.push(`${this.ns}-${this.icon}`)
        }

        return cls
      }
    }
  }
</script>