# 侧边栏 Sidebar

一个简单的侧边栏组件，由`v-sidebar`修饰, 支持任意垂直菜单布局 .

```html
<aside class="v-sidebar">
  <p class="v-sidebar-label">
    Label A
  </p>
  <ul class="v-sidebar-list">
    <li><a>Link Item A</a></li>
    <li><a>Link Item B</a></li>
  </ul>
  <p class="v-sidebar-label">
    Label B
  </p>
  <ul class="v-sidebar-list">
    <li><a>Link Item A</a></li>
    <li>
      <a class="is-active">Active Item B</a>
      <ul>
        <li><a>Inner Item A</a></li>
        <li><a>Inner Item B</a></li>
      </ul>
    </li>
  </ul>
</aside>
```

<div class="demo-box sd-sidebar-local" pre>
  <div class="v-box">
    <div class="v-cols is-gapless">
      <div class="v-col is-4">
        <aside class="v-sidebar">
          <p class="v-sidebar-label">
            Label A
          </p>
          <ul class="v-sidebar-list">
            <li><a>Link Item A</a></li>
            <li><a>Link Item B</a></li>
          </ul>
          <p class="v-sidebar-label">
            Label B
          </p>
          <ul class="v-sidebar-list">
            <li><a>Link Item A</a></li>
            <li>
              <a class="is-active">Active Item B</a>
              <ul>
                <li><a>Inner Item A</a></li>
                <li><a>Inner Item B</a></li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
      <div class="v-col">
        <main style="padding: 0 1rem">
          <h2 style="margin: 0">
            Vui
          </h2>
          <p>
            Yet a really simple UI framework :)
          </p>
        </main>
      </div>
    </div>
  </div>
</div>

### 其他

支持 `[v-sidebar].is-(small|medium|large)` 尺寸修饰符 .

<style lang="scss" type="text/scss">
  .sd-sidebar-local {
    p {
      margin: 0;
      line-height: inherit;
    }
    .v-sidebar-list {
      margin: 0;
      padding: 0;
    }
    .is-4 {
      background-color: #f2f2f2;
    }
  }
</style>
