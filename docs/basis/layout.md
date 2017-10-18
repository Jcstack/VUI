# 栅格

#### a. 默认弹性

基于`flexbox`的等分弹性列

```html
<div class="v-cols is-multiline">
  <div class="v-col">
      <code>.v-col</code>
  </div>
</div>
```

<div class="v-cols is-multiline">
  <div class="v-col sd-grid-column" v-for="el in flexCols">
    <span class="sd-grid-block">
      <code>.v-col</code>
    </span>
  </div>
</div>
<button class="v-btn is-small is-light" @click="flexCols.push(true)">add column</button>  

#### b. 控制尺寸

通过修饰符`is-(1~12)`可以灵活控制列的尺寸 .

```html
<div class="v-cols">
  <div class="v-col is-3"></div>
  <div class="v-col is-3"></div>
  <div class="v-col is-6"></div>
</div>
<div class="v-cols">
  <div class="v-col is-3"></div>
  <div class="v-col">不设置将会撑满剩余空间</div>
</div>

```

<div class="v-container">
  <div class="v-cols">
    <div class="v-col is-3">
        <span class="sd-grid-block">
            <code>.is-3</code>
        </span>
    </div>
    <div class="v-col">
        <span class="sd-grid-block">
          不设置将会撑满剩余空间
        </span>
    </div>
  </div>

  <div class="v-cols">
    <div class="v-col sd-grid-column"
         :class="`is-${el}`"
         v-for="el in grids[0]">
      <span class="sd-grid-block">
        <code>.is-{{ el }}</code>
      </span>
    </div>
  </div>

  <div class="v-cols">
    <div class="v-col sd-grid-column"
         :class="`is-${el}`"
         v-for="el in grids[1]"
    >
        <span class="sd-grid-block">
          <code>.is-{{ el }}</code>
        </span>
    </div>
  </div>
</div>

框架内置了些有语义の修饰符 .

```css
[v-col].is-three-quarters
[v-col].is-two-thirds
[v-col].is-half
[v-col].is-one-third
[v-col].is-one-quarter
[v-col].is-full // 强制占满行容器
```

<div class="v-cols">
  <div class="v-col is-half sd-grid-column">
    <span class="sd-grid-block">
      is-half
    </span>
  </div>
  <div class="v-col is-half sd-grid-column">
    <span class="sd-grid-block">
      is-half
    </span>
  </div>
</div>

#### c. 控制间隙

通过修饰符`[v-cols].is-gapless`可以取消间隙

<div class="v-cols is-gapless">
  <div class="v-col sd-grid-column"
       v-for="el in cols">
    <span class="sd-grid-block">
      {{ el }}
    </span>
  </div>
</div>


通过修饰符`[v-col].is-offset-(1~12)`可以偏移列间隙

<div class="v-cols">
  <div class="v-col sd-grid-column is-3">
    <span class="sd-grid-block">
        <code>.is-3</code>
    </span>
  </div>
  <div class="v-col sd-grid-column is-offset-3">
    <span class="sd-grid-block">
        <code>.is-offset-3</code>
    </span>
  </div>

</div>

目前列之间的间隙为`0.5rem`,即 `16px * 0.5 * 2 = 16px` . 如果希望调整这个参数，可以在Advanced章节中找到自定义的办法.
{tip}


#### d. 其他修饰

```css

[v-cols].is-centered // 子元素水平居中
[v-cols].is-multiline // 子元素填充满后换行
[v-cols].is-vcentered // 子元素垂直居中

```

<script>
  export default {
    data () {
      return {
        flexCols: [1, 1],
        cols: Array.from({length: 12}).map((n, i) => (i + 1)),
        grids: [
          [2, 3, 7],
          [3, 3, 6]
        ]
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "~root/scss/presets";

  .sd-grid-block {
    display: block;
    padding: 35px 15px;
    text-align: center;
    background-color: $light;
  }
</style>
