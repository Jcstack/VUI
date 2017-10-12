# Textarea

多行文本框修饰方式基本与`input`, `select`一致. 除了图标不能折腾，还有你懂得 ...

```html
<textarea class="v-textarea is-danger" placeholder="e.g. Hello world"></textarea>
<textarea class="v-textarea" placeholder="e.g. Hello world"></textarea>
<textarea class="v-textarea is-primary is-large" placeholder="e.g. Hello world"></textarea>
<textarea class="v-textarea is-success has-fixed-size is-small" placeholder="这个框框不能缩放[v-textarea].has-fixed-size"></textarea>
<textarea class="v-textarea" placeholder="Disabled" disabled></textarea>

// 注意修饰位置
<div class="v-control is-loading">
  <textarea class="v-textarea is-warning" placeholder="注意我是在控制容器上😯 [v-control].is-loading"></textarea>
</div>
```

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <div class="v-control">
      <textarea class="v-textarea is-danger" placeholder="e.g. Hello world"></textarea>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <textarea class="v-textarea" placeholder="e.g. Hello world"></textarea>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <textarea class="v-textarea is-primary is-large" placeholder="e.g. Hello world"></textarea>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <textarea class="v-textarea is-success has-fixed-size is-small" placeholder="这个框框不能缩放[v-textarea].has-fixed-size"></textarea>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control is-loading">
      <textarea class="v-textarea is-warning" placeholder="注意我是在控制容器上😯 [v-control].is-loading"></textarea>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <textarea class="v-textarea" placeholder="Disabled" disabled></textarea>
    </div>
  </div>
</div>