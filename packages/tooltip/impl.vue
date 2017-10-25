<template>
  <div class="v-tooltip-popup">
    <div class="v-tooltip">
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VTooltip',

    props: {
      text: String
    }
  }
</script>