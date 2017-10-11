# 按钮 Buttons

按钮(`button`)在任何交互设计中都是非常重要的元件，一个好的交互按钮设计，可以大大增强界面的交互体验。
通过在特定元素上添加`.v-btn`类，可以设置一个基本的按钮。

- `&lt;a&gt;` 锚点链接
- `&lt;button&gt;` 表单按钮
- `&lt;input type="submit"&gt;` 提交按钮
- `&lt;input type="reset"&gt;` 重设按钮

```html
/* 锚点按钮不具备聚焦(:focus)轮廓 */
<a class="v-btn">Basic Anchor Button</a>
<button class="v-btn">Basic Button</button>
```

<div class="demo-box has-pad-sm">
  <a class="v-btn">Basic Anchor Button</a>
  <button class="v-btn">Basic Button</button>
  <input class="v-btn" type="submit" value="Submit input">
  <input class="v-btn" type="reset" value="Reset input">
</div>

### a.颜色(colors)
- 灰色系按钮
```html
<a class="v-btn is-white">White</a>
<a class="v-btn is-light">Light</a>
<a class="v-btn is-dark">Dark</a>
<a class="v-btn is-black">Black</a>
<a class="v-btn is-link">Link</a>
```

<div class="demo-box has-pad-sm">
  <a class="v-btn is-white">White</a>
  <a class="v-btn is-light">Light</a>
  <a class="v-btn is-dark">Dark</a>
  <a class="v-btn is-black">Black</a>
  <a class="v-btn is-link">Link</a>
</div>

- 带色系按钮

```html
<a class="v-btn is-primary">Primary</a>
<a class="v-btn is-info">Info</a>
<a class="v-btn is-success">Success</a>
<a class="v-btn is-warning">Warning</a>
<a class="v-btn is-danger">Danger</a>
```

<div class="demo-box has-pad-sm">
  <a class="v-btn is-primary">Primary</a>
  <a class="v-btn is-info">Info</a>
  <a class="v-btn is-success">Success</a>
  <a class="v-btn is-warning">Warning</a>
  <a class="v-btn is-danger">Danger</a>
</div>

### b.尺寸(sizes)

```html
<a class="v-btn is-small">Small</a>
<a class="v-btn">Normal</a>
<a class="v-btn is-medium">Medium</a>
<a class="v-btn is-large">Large</a>
```

<div class="demo-box has-pad-sm">
  <a class="v-btn is-small">Small</a>
  <a class="v-btn">Normal</a>
  <a class="v-btn is-medium">Medium</a>
  <a class="v-btn is-large">Large</a>
</div>

### c.风格(styles)

- 轮廓按钮

```html
<a class="v-btn is-outlined">Outlined</a>
<a class="v-btn is-primary is-outlined">Outlined</a>
<a class="v-btn is-info is-outlined">Outlined</a>
<a class="v-btn is-success is-outlined">Outlined</a>
<a class="v-btn is-danger is-outlined">Outlined</a>
```

<div class="demo-box has-pad-sm">
  <a class="v-btn is-outlined">Outlined</a>
  <a class="v-btn is-primary is-outlined">Outlined</a>
  <a class="v-btn is-info is-outlined">Outlined</a>
  <a class="v-btn is-success is-outlined">Outlined</a>
  <a class="v-btn is-danger is-outlined">Outlined</a>
</div>

<p class="tip">
  由于 <code>warning</code>的主题色太亮，该风格轮廓按钮不建议使用 .
</p>

### d.状态(states)

- 正常(normal) - 悬停(hover) - 激活(active) - 聚焦(focus)
```html
<a class="v-btn">Normal</a>
<a class="v-btn is-hovered">Hover</a>
<a class="v-btn is-active">Active</a>
<a class="v-btn is-focused">Focus</a>
<a class="v-btn is-loading">Loading</a>
<a class="v-btn is-loading" disabled>Disabled</a>
<a class="v-btn is-loading is-disabled">Disabled Class</a>
```

<div class="sd-states-buttons" v-pre>
  <div class="demo-box has-pad-sm">
    <a class="v-btn">Normal</a>
    <a class="v-btn is-primary">Normal</a>
    <a class="v-btn is-info">Normal</a>
    <a class="v-btn is-success">Normal</a>
    <a class="v-btn is-warning">Normal</a>
    <a class="v-btn is-danger">Normal</a>
  </div>

  <div class="demo-box has-pad-sm">
    <a class="v-btn is-hovered">Hover</a>
    <a class="v-btn is-primary is-hovered">Hover</a>
    <a class="v-btn is-info is-hovered">Hover</a>
    <a class="v-btn is-success is-hovered">Hover</a>
    <a class="v-btn is-warning is-hovered">Hover</a>
    <a class="v-btn is-danger is-hovered">Hover</a>
  </div>

  <div class="demo-box has-pad-sm">
    <a class="v-btn is-focused">Focus</a>
    <a class="v-btn is-primary is-focused">Focus</a>
    <a class="v-btn is-info is-focused">Focus</a>
    <a class="v-btn is-success is-focused">Focus</a>
    <a class="v-btn is-warning is-focused">Focus</a>
    <a class="v-btn is-danger is-focused">Focus</a>
  </div>

  <div class="demo-box has-pad-sm">
    <a class="v-btn is-active">Active</a>
    <a class="v-btn is-primary is-active">Active</a>
    <a class="v-btn is-info is-active">Active</a>
    <a class="v-btn is-success is-active">Active</a>
    <a class="v-btn is-warning is-active">Active</a>
    <a class="v-btn is-danger is-active">Active</a>
  </div>

  <div class="demo-box has-pad-sm">
    <a class="v-btn is-loading">Loading</a>
    <a class="v-btn is-primary is-loading">Loading</a>
    <a class="v-btn is-info is-loading">Loading</a>
    <a class="v-btn is-success is-loading">Loading</a>
    <a class="v-btn is-warning is-loading">Loading</a>
    <a class="v-btn is-danger is-loading">Loading</a>
  </div>

  <div class="demo-box has-pad-sm">
    <a class="v-btn" title="Disabled button" disabled>Disabled</a>
    <a class="v-btn is-primary is-disabled" title="Disabled button">Disabled</a>
    <a class="v-btn is-info" title="Disabled button" disabled>Disabled</a>
    <a class="v-btn is-success" title="Disabled button" disabled>Disabled</a>
    <a class="v-btn is-warning" title="Disabled button" disabled>Disabled</a>
    <a class="v-btn is-danger" title="Disabled button" disabled>Disabled</a>
  </div>
</div>

### 其他(Modifiers)

通过组合适当的修饰符，已支持了如下一些特定功能

#### 图标按钮(icon)

```html
<a class="v-btn">
  <span class="has-icon">
    <i class="fa fa-github"></i>
  </span>
  <span>GitHub</span>
</a>
<a class="v-btn is-primary">
  <span class="has-icon">
      <i class="fa fa-chrome fa-lg"></i>
    </span>
  <span>Chrome</span>
</a>
```

<div class="demo-box">
  <a class="v-btn is-medium">
    <span class="has-icon">
      <i class="fa fa-github"></i>
    </span>
    <span>GitHub</span>
  </a>
  <a class="v-btn is-primary">
    <span class="has-icon">
      <i class="fa fa-chrome fa-lg"></i>
    </span>
    <span>Chrome</span>
  </a>
</div>

#### 按钮组(group buttons)

Grouped按钮组是单行按钮布局(Base on `Flex`)，主要由`v-field`容器修饰符`is-grouped`来控制`v-control`容器布局做到的，这两个容器是必须的 .

```html
<div class="v-field is-grouped">
  <p class="v-control">
    <a class="v-btn is-primary">Submit</a>
  </p>
  <p class="v-control is-expanded">
    <a class="v-btn">Cancel</a>
  </p>
</div>
```

<div class="demo-box has-pad-sm">
  <div class="v-field is-grouped">
    <p class="v-control">
      <a class="v-btn is-primary">
        <span class="has-icon">
          <i class="fa fa-rocket"></i>
        </span>
        <span>
          Biu Biu ...
        </span>
      </a>
    </p>
    <p class="v-control is-expanded">
      <a class="v-btn">
        <span class="has-icon">
          <i class="fa fa-power-off"></i>
        </span>
        <span>
          Power off
        </span>
      </a>
    </p>
  </div>
</div>

<p class="tip">
  详细的 <code>v-field</code>, <code>v-control</code> 用法说明以及设计概要将会在 Form 章节中讲解 .
</p>

#### 附加按钮(addons buttons)

Addon主要由`v-field`容器修饰符`has-addons`来控制`v-control`容器样式做到的，这两个容器是必须的 .

```html
<div class="v-field has-addons has-addons-centered">
  <p class="v-control">
    <a class="v-btn"><span class="has-icon"><i class="fa fa-backward"></i></span></a>
  </p>
  <p class="v-control">
    <a class="v-btn">
      <span class="has-icon has-text-danger"><i class="fa fa-play"></i></span>
      <span>Play</span>
    </a>
  </p>
  ...
</div>
```

<div class="demo-box has-pad-sm">
  <div class="v-field has-addons has-addons-centered">
    <p class="v-control">
      <a class="v-btn">
        <span class="has-icon">
          <i class="fa fa-backward"></i>
        </span>
        <span>Back</span>
      </a>
    </p>
    <p class="v-control">
      <a class="v-btn">
        <span class="has-icon has-text-danger">
          <i class="fa fa-play"></i>
        </span>
        <span>Play</span>
      </a>
    </p>
    <p class="v-control">
      <a class="v-btn">
        <span class="has-icon">
          <i class="fa fa-forward"></i>
        </span>
        <span>Next</span>
      </a>
    </p>
  </div>
</div>

<script>
  export default {
    data () {
      return {
        isLoading: false,
      }
    },

    methods: {
      _handleClick () {
        this.isLoading = !this.isLoading
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  .sd-states-buttons {
    .v-btn {
      width: 10%;
      margin-right: 10px;
    }
  }
</style>