<template>

  <div class="v-notification"
       :class="[ colorModifier ]"
  >
    <h1 class="has-title" v-if="title != null">
      {{ title }}
    </h1>
    <h2 class="has-subtitle" v-if="subtitle != null">
      {{ subtitle }}
    </h2>
    <div class="has-content">
      <slot>
        {{ message }}
      </slot>
    </div>
    <slot name="close">
      <a class="v-close"
         @click="_handleClose"
         v-if="closable"
      ></a>
    </slot>
  </div>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VNotification',

    mixins: [ createMixins(['color']) ],

    props: {
      title: {
        type: String,
        'default': null
      },

      subtitle: {
        type: String,
        'default': null
      },

      message: {
        type: String
      },

      closable: {
        type: Boolean,
        'default': true
      }
    },

    methods: {
      _handleClose (e) {
        this.$emit('close', this, e)
      }
    }
  }
</script>
