<template>
  <div class="v-badge">
    <slot></slot>
    <span class="has-badge-dot"
          v-if="isDot && count != null"
    ></span>
    <span class="has-badge-count"
          v-else-if="!isDot && count != null"
    >{{ count }}</span>
  </div>
</template>

<script>
  export default {
    name: 'VBadge',

    props: {
      isDot: {
        type: Boolean,
        'default': true
      },

      count: {
        type: [String, Number],
        'default': null
      }
    }
  }
</script>