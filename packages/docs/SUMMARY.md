# VPackages

* Get Started
  * [README 开始](README.md)
* Packages
  * [Layout 布局](pkgs/layout.md)
  * [Button 按钮](pkgs/button.md)
  * [Icon 图标](pkgs/icon.md)
  * [Form 表单](pkgs/form.md)
  * [Modal 弹框](pkgs/modal.md)
  * [Popover 浮层](pkgs/popover.md)
  * [Tooltip 提示](pkgs/tooltip.md)
  * [Badge 徽章](pkgs/badge.md)
  * [Tag 标签](pkgs/tag.md)
  * [Message 消息](pkgs/message.md)
  * [Notification 通知](pkgs/notification.md)
  * [Dropdown 下拉框](pkgs/dropdown.md)
  * [Progress 进度条](pkgs/progress.md)
  * [Slider 滑块](pkgs/slider.md)
  * [Switch 开关](pkgs/switch.md)
  * [Table 表格](pkgs/table.md)
  * [Pagination 分页](pkgs/pagination.md)
  * [Datepicker 日历选框](pkgs/datepicker.md)
  * [Carousel 幻灯](pkgs/carousel.md)
  * [Cascade 级联菜单](pkgs/cascade.md)
  * [Embed 嵌入媒体](pkgs/embed.md)

* Advanced
  * Business

<script>
  // install all packages
  import Vue from 'vue'
  import 'packages/index'
  import ComponentDoc from 'docs_lib/ComponentDocTable.vue'

  Vue.component('component-doc-table', ComponentDoc)

  export default {}
</script>

<style lang="scss" type="text/scss">
  @import url("https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css");
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("//at.alicdn.com/t/font_478063_w38kzqqd5ilr3sor.css");
  @import "~root/scss/vui.scss";
  @import "~docs_lib/common.scss";

  .sidebar-nav {
    .markdown-section {
      padding: 0;
    }
  }

  .main-pkg-page {
    margin: 0 auto;
    max-width: 800px;
    position: relative;
  }
</style>