<template>
  <div class="v-cascade-panel">
    <div class="v-cascade-panel-inner">
      <strong>
        {{ content }}
      </strong>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: String
    }
  }
</script>

<style lang="scss" type="text/scss">
  .v-cascade-panel {
    padding-top: 6px;
    min-width: 200px;
    &-inner {
      border-radius: 3px;
      border: 1px solid #8e9bad;
      background-color: #eef4fb;
      box-shadow: 1px 1px 5px #d6d6d6;
      padding: 12px;
    }
  }
</style>