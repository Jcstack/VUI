# 栅格

#### a. 默认弹性column

<div class="v-columns">
  <div class="v-column sd-grid-column">
    <span class="sd-grid-block">
      <code>flex: 1</code>
    </span>
  </div>
  <div class="v-column sd-grid-column">
    <span class="sd-grid-block">
      flex: 1
    </span>
  </div>
  <div class="v-column sd-grid-column">
    <span class="sd-grid-block">
      flex: 1
    </span>
  </div>
</div>

#### b. 12栅格系统

<div class="v-container">
  <div class="v-columns">
    <div class="v-column sd-grid-column"
         v-for="el in cols">
      <span class="sd-grid-block">
        {{ el }}
      </span>
    </div>
  </div>

  <div class="v-columns">
    <div class="v-column sd-grid-column"
         :class="`is-${el}`"
         v-for="el in grids"
    >
        <span class="sd-grid-block">
          <code>is-{{ el }}</code>
        </span>
    </div>
  </div>
</div>

#### c. 内置尺寸

已有的`.column`修饰符, 如下

```css
.is-three-quarters
.is-two-thirds
.is-half
.is-one-third
.is-one-quarter
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

#### b.1 间隙

<code>is-gapless</code></p>
<div class="v-columns is-gapless">
  <div class="v-column sd-grid-column"
       v-for="el in cols">
    <span class="sd-grid-block">
      {{ el }}
    </span>
  </div>
</div>

<script>
  export default {
    data () {
      return {
        cols: Array.from({length: 12}).map((n, i) => (i + 1)),
        grids: [3, 3, 6]
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
