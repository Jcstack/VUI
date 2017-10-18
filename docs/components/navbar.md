# 导航栏 Navbar

由`v-navbar`修饰，主要用于水平布局的导航类容器，Vui尽可能只控制布局，不去约束内部导航样式，以降低复杂度，提高通用性 .
基本的层级结构如下:

- `v-navbar` 主容器
  - `v-navbar-brand` 一个左侧容器，一直可见，可用于放置Logo, 链接，图标 什么的 ...
    - `v-navbar-item` 一个垂直撑满的条目容器, 子元素会默认完全居中 `align-items: center`
  - `v-navbar-menu` 一个右侧容器，desktop设备一直可见(目前只支持desktop)
    - `v-navbar-start` 菜单下左容器，可放置什么导航链接之类的 ...
    - `v-navbar-end` 菜单下右容器，可放置什么用户头像设置之类的 ...
      - `v-navbar-item` 看上边

回头补一个层级透视图吧 .

```html
<div class="v-navbar has-shadow">
  <div class="v-navbar-brand">
      <span class="v-navbar-item">
        <span class="has-icon has-text-success">
          <i class="fa fa-wechat fa-2x"></i>
        </span>
      </span>
  </div>
  <div class="v-navbar-menu">
    <div class="v-navbar-end">
      <div class="v-navbar-item">
            <span class="has-icon">
              <i class="fa fa-github fa-2x"></i>
            </span>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-box" pre>
  <div class="v-box" style="min-height: 300px; overflow: hidden">
    <div class="sd-navbar-wrap">
      <div class="v-navbar has-shadow">
        <!-- brand -->
        <div class="v-navbar-brand">
          <span class="v-navbar-item">
        <span class="has-icon has-text-success">
          <i class="fa fa-wechat fa-2x"></i>
        </span>
      </span>
        </div>
        <!-- menus -->
        <div class="v-navbar-menu">
          <div class="v-navbar-end">
            <div class="v-navbar-item">
            <span class="has-icon">
              <i class="fa fa-github fa-2x"></i>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin: 2.25rem; padding: 6rem 0; text-align: center;">
      <strong style="color: #999; font-weight: normal;">Yet a really simple and impressive UI Framework .</strong>
    </div>
  </div>
</div>

<style lang="scss" type="text/scss">
  .sd-navbar-wrap {
    margin: -1.25rem;
  }
</style>