# 下拉框 Dropdown

下拉框组件 `v-dropdown` 主要是由 下拉按钮`v-btn` 以及 下拉菜单`v-dropdown-menu` 组成的一个容器 , 大体层级结构如下 .

- `v-dropdown` 主容器
- `v-dropdown-trigger` 放置`v-btn`的触发容器
- `v-dropdown-menu` 菜单容器，可切换，默认是隐藏的
- `v-dropdown-content` 菜单内容盒子，具备默认白色背景`background`, 阴影`shadow` 样式
- `v-dropdown-item` 下拉条目, 可以是 `a` or `div`
- `v-dropdown-divider` 一条浅灰色水平分割线

```html
<div class="v-dropdown is-active">
  <div class="v-dropdown-trigger">
    <button class="v-btn" aria-haspopup="true" aria-controls="v-dropdown-menu">
      <span>Dropdown button</span>
      <span class="has-icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
    </button>
  </div>
  <div class="v-dropdown-menu" role="menu">
    <div class="v-dropdown-content">
      <a href="#" class="v-dropdown-item">
        Dropdown item
      </a>
      <a class="v-dropdown-item">
        Other dropdown item
      </a>
      <a href="#" class="v-dropdown-item is-active">
        Active dropdown item
      </a>
      <a href="#" class="v-dropdown-item">
        Other dropdown item
      </a>
      <hr class="v-dropdown-divider">
      <a href="#" class="v-dropdown-item">
        With a divider
      </a>
    </div>
  </div>
</div>
```

走一波，注意 菜单切换是由 修饰符 `[v-dropdown].is-active` 控制 ~

<div class="demo-box __maybe-long-code has-pad-sm">
  <div class="v-dropdown"
       :class="{ 'is-active': activeA }"
       v-click-outside="() => _handleClickOutside('A')"
  >
    <div class="v-dropdown-trigger">
      <button class="v-btn" aria-haspopup="true" aria-controls="v-dropdown-menu"
              @click="activeA = !activeA"
      >
        <span>Dropdown button</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="v-dropdown-menu" role="menu">
      <div class="v-dropdown-content">
        <a href="#" class="v-dropdown-item">
          Dropdown item
        </a>
        <a class="v-dropdown-item">
          Other dropdown item
        </a>
        <a href="#" class="v-dropdown-item is-active">
          Active dropdown item
        </a>
        <a href="#" class="v-dropdown-item">
          Other dropdown item
        </a>
        <hr class="v-dropdown-divider">
        <a href="#" class="v-dropdown-item">
          With a divider
        </a>
      </div>
    </div>
  </div>
</div>

## 悬停切换 / 手动切换

- `[v-dropdown].is-hoverable` 修饰符可以完成悬停切换，这个是CSS实现
- `[v-dropdown].is-active` 修饰符可以完成手动切换，需要js额外处理切换逻辑

<div class="demo-box" pre>
  <div class="v-dropdown is-hoverable">
    <div class="v-dropdown-trigger">
      <button class="v-btn is-warning" aria-haspopup="true" aria-controls="v-dropdown-menu"
              @click="activeA = !activeA"
      >
        <span>Hover Me</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="v-dropdown-menu" role="menu">
      <div class="v-dropdown-content">
        <p style="padding:0 5px">You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
    </div>
  </div>
</div>

## 菜单对齐

- 由`[v-dropdown].is-right` 修饰符控制水平对齐，默认左对齐 .

<div class="demo-box" pre>
  <div class="v-dropdown is-hoverable">
    <div class="v-dropdown-trigger">
      <button class="v-btn is-warning" aria-haspopup="true" aria-controls="v-dropdown-menu">
        <span>Hover Me</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="v-dropdown-menu" role="menu">
      <div class="v-dropdown-content">
        <p style="padding:0 5px">You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
    </div>
  </div>

  <div class="v-dropdown is-hoverable is-right" style="float: right">
    <div class="v-dropdown-trigger">
      <button class="v-btn is-warning" aria-haspopup="true" aria-controls="v-dropdown-menu">
        <span>Hover Me</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="v-dropdown-menu" role="menu">
      <div class="v-dropdown-content">
        <p style="padding:0 5px">You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
    </div>
  </div>
</div>

- 由`[v-dropdown].is-up` 修饰符控制垂直对其，默认底部对其 .

<div class="demo-box">
  <div class="v-dropdown is-hoverable is-up">
    <div class="v-dropdown-trigger">
      <button class="v-btn is-warning" aria-haspopup="true" aria-controls="v-dropdown-menu">
        <span>Hover Me</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="v-dropdown-menu" role="menu">
      <div class="v-dropdown-content">
        <p style="padding:0 5px">You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
    </div>
  </div>

  <div class="v-dropdown is-up is-right"
       :class="{ 'is-active': activeB }"
       v-click-outside="() => _handleClickOutside('B')"
       style="float: right"
  >
    <div class="v-dropdown-trigger">
      <button class="v-btn is-light" aria-haspopup="true" aria-controls="v-dropdown-menu"
              @click="activeB = !activeB"
      >
        <span>Click Me</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="v-dropdown-menu" role="menu">
      <div class="v-dropdown-content">
        <p style="padding:0 5px">You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="demo-box">
  <div class="v-dropdown is-hoverable is-up">
    <div class="v-dropdown-trigger">
      <button class="v-btn is-warning" aria-haspopup="true" aria-controls="v-dropdown-menu">
        <span>Hover Me</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="v-dropdown-menu" role="menu">
      <div class="v-dropdown-content">
        <p style="padding:0 5px">You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
    </div>
  </div>
</div>
```

<script>
  import LongCodeMixin from 'docs_lib/MaybeLongCodeMixin'
  import ClickOutside from 'sources/directives/click-outside'

  export default {
    mixins: [LongCodeMixin],

    data () {
      return {
        activeA: false,
        activeB: false
      }
    },

    mounted () {
      this._initMaybeLongCode()
    },

    methods: {
      _handleClickOutside (f) {
        try {
          this[`active${f}`] = false
        } catch (e) {}
      }
    },

    directives: {
      ClickOutside
    }
  }
</script>

<style lang="scss" type="text/scss">
  a.v-dropdown-item {
    text-decoration: none;
  }

  hr.v-dropdown-divider {
    margin: 0.5rem 0;
    border: none;
  }
</style>