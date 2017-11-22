<template>
  <span class="v-tag"
        :class="[ sizeModifier, colorModifier, {
         'is-rounded': rounded
       }]"
  >
    <slot></slot>
    <template v-if="closable">
    <i class="v-close" @click="_handleClose"></i>
    </template>
  </span>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VTag',

    mixins: [createMixins(['size', 'color'])],

    props: {
      rounded: Boolean,
      closable: {
        type: Boolean,
        'default': false
      }
    },

    methods: {
      _handleClose (e) {
        this.$emit('close', this, e)
      }
    }
  }
</script>