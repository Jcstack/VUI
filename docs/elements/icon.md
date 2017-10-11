# 图标 Icons

Vui只限制图标容器, 理论上所有的`字体图标(icon font)`库都可以兼容引入，例如 Font Awesome，Material Icons 等 .

- 通过`.has-icon`修饰的元素，用来作为字体图标(icon font)的占位容器，这是必须的 .

```html
<span class="has-icon">
  <i class="fa fa-github"></i>
</span>
```

<div class="demo-box has-pad-sm sd-with-icon-bg">
  <span class="has-icon"><i class="fa fa-github"></i></span>
</div>

<p class="tip">
  默认<code>has-icon</code>修饰的元素尺寸是 24px（1.5rem * 16px） 的方形容器，至于内嵌的字体图标（iconfont）大小交由图标库本身来控制，
  例如 Font Awesome 图标库默认将会继承（font-size: inherit）父级设置的字体大小 .
</p>

### a.颜色(colors)

- 支持7个主题色 .

```html
<span class="has-icon has-text-primary"><i class="fa fa-info-circle"></i></span>
<span class="has-icon has-text-info"><i class="fa fa-chrome"></i></span>
<span class="has-icon has-text-danger"><i class="fa fa-instagram"></i></span>
...
```

<div class="demo-box has-pad-sm">
  <span class="has-icon has-text-primary">
    <i class="fa fa-info-circle"></i>
  </span>
  <span class="has-icon has-text-info">
    <i class="fa fa-chrome"></i>
  </span>
  <span class="has-icon has-text-danger">
    <i class="fa fa-instagram"></i>
  </span>
  <span class="has-icon has-text-success">
    <i class="fa fa-linux"></i>
  </span>
  <span class="has-icon has-text-warning">
    <i class="fa fa-flash"></i>
  </span>
  <span class="has-icon has-text-black">
    <i class="fa fa-git"></i>
  </span>
  <span class="has-icon has-text-light">
    <i class="fa fa-share-alt-square"></i>
  </span>
</div>

### b.尺寸(sizes)

只能控制图标容器大小 .

- 默认 `1.5rem （24px）`
- 最小 `[has-icon].is-small : 1rem （16px）`
- 中级 `[has-icon].is-medium : 2rem （32px）`
- 最大 `[has-icon].is-large: 3rem （48px）`

<div class="demo-box sd-with-icon-bg">
  <span class="has-icon is-small">
    <i class="fa fa-github fa-fw"></i>
  </span>
  <span class="has-icon">
    <i class="fa fa-fw fa-github"></i>
  </span>
  <span class="has-icon is-medium">
    <i class="fa fa-2x fa-github"></i>
  </span>
  <span class="has-icon is-large">
    <i class="fa fa-3x fa-github"></i>
  </span>
</div>

## iconfont.cn 支持

目前很多项目使用了阿里巴巴的三方开源图标库[http://iconfont.cn](http://iconfont.cn)，如果直接引用唯一需要注意的地方就是
`iconfont`提供的默认字体大小为`16px` !

```css
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

来一波 Iconfont .

```html
<span class="has-icon"><i class="iconfont icon-hf_shangcheng"></i></span>
<span class="has-icon is-medium"><i class="iconfont icon-hf_shangcheng"></i></span>
<span class="has-icon is-large has-text-danger"><i class="iconfont icon-hf_shangcheng"></i></span>
```

<div class="demo-box sd-with-icon-bg">
  <span class="has-icon">
    <i class="iconfont icon-hf_shangcheng"></i>
  </span>
  <span class="has-icon is-medium">
    <i class="iconfont icon-hf_shangcheng"></i>
  </span>
  <span class="has-icon is-large has-text-danger">
    <i class="iconfont icon-hf_shangcheng"></i>
  </span>
  <span class="has-icon">
    <i class="iconfont icon-hf_haibei"></i>
  </span>
  <span class="has-icon is-medium">
    <i class="iconfont icon-hf_haibei"></i>
  </span>
  <span class="has-icon is-large has-text-info">
    <i class="iconfont icon-hf_haibei"></i>
  </span>
</div>

<p class="tip">
  以上图标本身大小, 以及容器底色 都是是手动控制的, 仅作为案例。还有就是如果你发现<code>iconfont</code>字体图标在容器内未对齐，🙅不要慌...八成图标本身有问题，再看看吧，老铁 ...
  <a target="_blank" href="http://www.iconfont.cn/help/detail">http://www.iconfont.cn/help/detail</a>
</p>
