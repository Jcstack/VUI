<template>
  <div class="v-col"
       :class="[ _modifierCls ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VCol',

    mixins: [createMixins(['magic'])],

    props: {
      span: {
        type: [String, Number],
        'default': null
      },

      offset: {
        type: [String, Number],
        'default': null
      }
    },

    computed: {
      _modifierCls () {
        const cls = []

        this.span != null && cls.push('is-' + this.span)
        this.offset != null && cls.push('is-offset-' + this.offset)

        return cls
      }
    }
  }
</script>