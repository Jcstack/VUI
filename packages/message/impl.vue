<template>
  <article class="v-message"
           :class="[ sizeModifier, colorModifier ]"
  >
    <div class="v-message-header" v-if="title != null">
      <strong>{{ title }}</strong>
      <span class="v-close" v-if="closable"
            @click="_handleClose"
      ></span>
    </div>
    <div class="v-message-body">
      <slot>
        <div class="has-message">
          {{ message }}
        </div>
      </slot>
    </div>
  </article>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VMessage',

    mixins: [createMixins(['size', 'color'])],

    props: {
      message: String,

      title: {
        type: String,
        'default': null
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