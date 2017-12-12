<template>
  <div class="main-body">
    <page-entry></page-entry>
  </div>
</template>

<script>
  import PageEntry from './pages/select.vue'

  export default {
    components: {
      PageEntry
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('//at.alicdn.com/t/font_478063_w38kzqqd5ilr3sor.css');
  @import "../../scss/generics.scss";
  @import "../../scss/vui.scss";

  body {
  }

  .demo-box {
    padding: 30px 0;
  }

  .main-body {
    max-width: 980px;
    margin: 20px auto;
  }
</style>

