# 修饰符 Modifiers

大部分元件`Elements`都有可选的样式, 可以通过添加一个或多个修饰符类来控制，一般是以 `is-` 或 `has-` 开头。

<p class="tip" v-pre>
  修饰符<code>Modifier</code>特性，主要是借鉴（抄，逃）`Bulma`，也是整个框架的灵魂特性所在。为什么这么做呢? 仔细想想，其实我们在写样式时，最大的困难就是如何合理命名（语义化）以组织复用，
  而修饰符的方式在一定程度上真的很好地解决了这个问题，在没有更完美的方案前，我们索性也这么做吧 :)
</p>

#### a. 颜色(color)

- 7种主要的颜色控制
```html
<a class="v-btn is-primary">Primary</a>
<a class="v-btn is-info">Info</a>
<a class="v-btn is-success">Success</a>
<a class="v-btn is-warning">Warning</a>
<a class="v-btn is-danger">Danger</a>
<a class="v-btn is-light">Light</a>
<a class="v-btn is-black">Black</a>
```
<div class="sd-btns-container">
  <a class="v-btn is-primary">Primary</a>
  <a class="v-btn is-info">Info</a>
  <a class="v-btn is-success">Success</a>
  <a class="v-btn is-warning">Warning</a>
  <a class="v-btn is-danger">Danger</a>
  <a class="v-btn is-light">Light</a>
  <a class="v-btn is-black">Black</a>
</div>

**这里只是以`btn`元件为例，不同元件会有不同程度支持对应`modifier`, 具体请参照对应文档 .**
{tip}

#### b. 尺寸(size)
- 3种语义尺寸

```html
<a class="v-btn is-small">Small</a>
<a class="v-btn is-medium">Medium</a>
<a class="v-btn is-large">Large</a>
```

<div class="sd-btns-container">
  <a class="v-btn is-small">Small</a>
  <a class="v-btn is-medium">Medium</a>
  <a class="v-btn is-large">Large</a>
</div>

#### c. 风格(style)

- `is-outline`
<div class="sd-btns-container">
  <a class="v-btn is-outline is-info">is-outline</a>
</div>


#### d. 状态(state)

- 加载中 `is-loading`
```html
<a class="v-btn is-loading is-success">is-loading</a>
<a class="v-btn is-loading is-success is-outline">is-loading</a>
```
<div class="sd-btns-container">
  <a class="v-btn is-loading is-success">is-loading</a>
  <a class="v-btn is-loading is-success is-outline">is-loading</a>
</div>

- 不可用 `is-disabled` & `[disabled]`

```html
<a class="v-btn is-disabled">is-disabled</a>
<button class="v-btn" disabled>[disabled]</button>
```

<div class="sd-btns-container">
  <a class="v-btn is-disabled">is-disabled</a>
  <button class="v-btn" disabled>[disabled]</button>
</div>


<style lang="scss" type="text/scss">
  .sd-btns-container {
    .v-btn {
      min-width: 80px;
      margin-right: 5px;
    }
  }
</style>
