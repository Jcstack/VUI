# Input

文本输入框，目前支持以下输入类型：

- `type="text"`
- `type="password"`
- `type="email"`
- `type="tel"`

```html
<input type="text" class="v-input" placeholder="Text input">
```

<div class="demo-box has-pad-sm">
  <input type="text" class="v-input" placeholder="Text input">
</div>

### 颜色(colors)

支持全部主题色`[v-input].is-(colors)`修饰 .

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <p class="v-control">
      <input type="tel" class="v-input is-danger" placeholder=".is-danger">
    </p>
  </div>
  <div class="v-field">
    <p class="v-control">
      <input type="email" class="v-input is-primary" placeholder=".is-primary">
    </p>
  </div>
</div>


### 尺寸(sizes)

支持尺寸控制`[v-input].is-(small|medium|large)`修饰 .

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <div class="v-control">
      <input class="v-input is-small" type="text" placeholder="[v-input].is-small">
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <input class="v-input" type="text" placeholder="Default size">
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <input class="v-input is-medium" type="text" placeholder="[v-input].is-medium">
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <input class="v-input is-large" type="text" placeholder="[v-input].is-large">
    </div>
  </div>
</div>


### 状态(states)

通用状态支持 .

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <div class="v-control">
      <input class="v-input" type="text" placeholder="Default state">
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <input class="v-input is-hovered" type="text" placeholder="[v-input].is-hovered">
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <input class="v-input is-focused" type="text" placeholder="[v-input].is-focused">
    </div>
  </div>
  <div class="v-field">
    <div class="v-control is-loading is-medium">
      <input class="v-input is-info is-medium" type="text" placeholder="[v-control].is-loading">
    </div>
  </div>
  <div class="v-field">
    <div class="v-control is-loading is-large">
      <input class="v-input is-danger is-large" type="text" placeholder="[v-control].is-loading">
    </div>
  </div>
</div>

```html
<div class="v-field">
  <div class="v-control is-loading is-large">
    <input class="v-input is-danger is-large" type="text" placeholder="[v-control].is-loading">
  </div>
</div>
```

<p class="tip">
  <code>Loading</code>状态下，加载图标的大小是由 <code>[v-control].is-large</code> 修饰符控制，<code>[v-input].is-large</code> 尺寸修饰符只能调整
  输入框的大小，请注意 !
</p>

### 其他(misc)

附加字体图标，由控制容器`v-control`的边界修饰符，配合字体图标容器`has-icon`的位置修饰符 来确定 .

- `[v-control].has-icons-left`
- and/or `[v-control].has-icons-right`
- `[has-icon].is-left`
- `[has-icon].is-right`

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <p class="v-control has-icons-left has-icons-right">
      <input class="v-input" type="email" placeholder="Chrome">
      <span class="has-icon is-small is-left">
        <i class="fa fa-chrome"></i>
      </span>
      <span class="has-icon is-small is-right">
        <i class="fa fa-check"></i>
      </span>
    </p>
  </div>
  <div class="v-field">
    <p class="v-control has-icons-left">
      <input class="v-input" type="password" placeholder="Password">
      <span class="has-icon is-small is-left">
      <i class="fa fa-github"></i>
    </span>
    </p>
  </div>
  <div class="v-control has-icons-left has-icons-right">
    <input class="v-input is-large" type="email" placeholder="Email">
    <span class="has-icon is-medium is-left">
      <i class="fa fa-envelope"></i>
    </span>
    <span class="has-icon is-medium is-right">
      <i class="fa fa-check"></i>
    </span>
  </div>
</div>

```html
<div class="v-field">
  <p class="v-control has-icons-left has-icons-right">
    <input class="v-input" type="email" placeholder="Chrome">
    <span class="has-icon is-small is-left">
        <i class="fa fa-chrome"></i>
      </span>
    <span class="has-icon is-small is-right">
        <i class="fa fa-check"></i>
      </span>
  </p>
</div>
<div class="v-field">
  <p class="v-control has-icons-left">
    <input class="v-input" type="password" placeholder="Password">
    <span class="has-icon is-small is-left">
      <i class="fa fa-github"></i>
    </span>
  </p>
</div>
<div class="v-control has-icons-left has-icons-right">
  <input class="v-input is-large" type="email" placeholder="Email">
  <span class="has-icon is-medium is-left">
      <i class="fa fa-envelope"></i>
    </span>
  <span class="has-icon is-medium is-right">
      <i class="fa fa-check"></i>
    </span>
</div>
```
