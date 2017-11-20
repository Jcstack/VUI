<template>
  <div class="v-cols"
       :class="magicModifier"
  >
    <slot></slot>
  </div>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VRow',

    mixins: [createMixins(['magic'])]
  }
</script>