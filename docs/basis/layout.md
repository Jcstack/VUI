# 栅格

#### a. 默认弹性

基于`flexbox`的等分弹性列

```html
<div class="v-columns is-multiline">
  <div class="v-column">
      <code>.column</code>
  </div>
</div>
```

<div class="v-columns is-multiline">
  <div class="v-column sd-grid-column" v-for="el in flexCols">
    <span class="sd-grid-block">
      <code>.column</code>
    </span>
  </div>
</div>
<button class="v-btn is-small is-light" @click="flexCols.push(true)">add column</button>  

#### b. 控制尺寸

通过修饰符`is-(1~12)`可以灵活控制列的尺寸 .

```html
<div class="v-columns">
  <div class="v-column is-3"></div>
  <div class="v-column is-3"></div>
  <div class="v-column is-6"></div>
</div>
<div class="v-columns">
  <div class="v-column is-3"></div>
  <div class="v-column">不设置将会撑满剩余空间</div>
</div>

```

<div class="v-container">
  <div class="v-columns">
    <div class="v-column is-3">
        <span class="sd-grid-block">
            <code>.is-3</code>
        </span>
    </div>
    <div class="v-column">
        <span class="sd-grid-block">
          不设置将会撑满剩余空间
        </span>
    </div>
  </div>

  <div class="v-columns">
    <div class="v-column sd-grid-column"
         :class="`is-${el}`"
         v-for="el in grids[0]">
      <span class="sd-grid-block">
        <code>.is-{{ el }}</code>
      </span>
    </div>
  </div>

  <div class="v-columns">
    <div class="v-column sd-grid-column"
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
[column].is-three-quarters
[column].is-two-thirds
[column].is-half
[column].is-one-third
[column].is-one-quarter
[column].is-full // 强制占满行容器
```

<div class="v-columns">
  <div class="v-column is-half sd-grid-column">
    <span class="sd-grid-block">
      is-half
    </span>
  </div>
  <div class="v-column is-half sd-grid-column">
    <span class="sd-grid-block">
      is-half
    </span>
  </div>
</div>

#### c. 控制间隙

通过修饰符`[columns].is-gapless`可以取消间隙

<div class="v-columns is-gapless">
  <div class="v-column sd-grid-column"
       v-for="el in cols">
    <span class="sd-grid-block">
      {{ el }}
    </span>
  </div>
</div>


通过修饰符`[column].is-offset-(1~12)`可以偏移列间隙

<div class="v-columns">
  <div class="v-column sd-grid-column is-3">
    <span class="sd-grid-block">
        <code>.is-3</code>
    </span>
  </div>
  <div class="v-column sd-grid-column is-offset-3">
    <span class="sd-grid-block">
        <code>.is-offset-3</code>
    </span>
  </div>

</div>

目前列之间的间隙为`0.5rem`,即 `16px * 0.5 * 2 = 16px` . 如果希望调整这个参数，可以在Advanced章节中找到自定义的办法.
{tip}


#### d. 其他修饰

```css

[columns].is-centered // 子元素水平居中
[columns].is-multiline // 子元素填充满后换行
[columns].is-vcentered // 子元素垂直居中

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
  @import "~root/scss/pre";

  .sd-grid-block {
    display: block;
    padding: 35px 15px;
    text-align: center;
    background-color: $light;
  }
</style>
