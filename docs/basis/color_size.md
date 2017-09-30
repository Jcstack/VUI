# 颜色(主题)

<div class="sd-colors-presentation">
  <div class="item">
    <strong :class="`has-${it}`" v-for="it in colors">{{ it }}</strong>
  </div>
</div>

## 字体大小

尺寸分7个数量级别，4个语义级别，使用`rem`相对根`font-size: 16px`设置 .

<div class="sd-sizes-presentation">
  <div class="item">
    <span :class="`has-size-${level}`" v-for="level in sizeLevels"> {{level}}号 字体</span>
  </div>
  <div class="item">
    <span :class="`has-size-${level}`" v-for="level in sizeLabels"> {{level}} 字体</span>
  </div>
</div>

## 字体磅值

<div class="sd-sizes-presentation">
  <div class="item">
    <span :class="`has-weight-${it}`" v-for="it in sizeWeights">
      {{ it }} 你好
    </span>
  </div>
</div>

## 字体类型

<div class="sd-faces-presentation">
  <div class="item">
    <span :class="`has-face-${it}`" v-for="it in fontFaces">
      {{ it }} 中国 の Cat
    </span>
  </div>
</div>

<p class="tip">
  <strong>衬线体（Serif）</strong> <br>
  常用的中文衬线体：宋体（Simsun），仿宋（FangSong），楷体（KaiTi），华文仿宋（STFangSong），华文楷体（STKaiTi）。 <br>
  常见的英文衬线体：Times new Roman，Times <br> <br>
  <strong>无衬线体（Sans-Serif）</strong> <br>
  常见的中文无衬线体：微软雅黑（Microsoft YaHei），黑体（SimHei），华文细黑（STXiHei） <br>
  常见的英文无衬线体：Tahoma，Arial，Helvetica，Verdana <br> <br>
  <strong>等宽字体（monospace）</strong> <br>
  常见的等宽字体：Courier New，Courier
</p>

## 圆角尺寸

<div class="sd-radius-presentation">
  <div class="item r-small">small</div>
  <div class="item r-normal">normal</div>
  <div class="item r-large">large</div>
</div>

<script>
  export default {
    data () {
      return {
        colors: [
          'primary',
          'info', 'success',
          'warning', 'danger',
          'light', 'dark'
        ],
        sizeLevels: Array.from({length: 7}).map((n, i) => (i + 1)),
        sizeLabels: ['small', 'normal', 'medium', 'large'],
        sizeWeights: ['light', 'normal', 'semibold', 'bold'],
        fontFaces: ['primary', 'sans-serif', 'arial', 'monospace']
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "~root/scss/pre";

  .sd-colors-presentation {
    > .item {
      padding: 15px 0;

      strong {
        display: inline-block;
        padding: 15px 20px;
        min-width: 15%;
        text-align: center;
        margin-right: 15px;
        margin-bottom: 15px;
      }
    }

    @each $name, $pair in $colors {
      .has-#{$name} {
        background-color: nth($pair, 1);
        color: nth($pair, 2);
      }
    }
  }

  .sd-sizes-presentation {

    @each $size in $sizes {
      $i: index($sizes, $size);
      .has-size-#{$i} {
        display: block;
        font-size: $size;
        margin-bottom: 10px;
      }
    }

    @each $label, $size in ('small', $size-small), ('normal', $size-normal), ('medium', $size-medium), ('large', $size-large) {
      .has-size-#{$label} {
        display: block;
        font-size: #{$size};
        margin-bottom: 10px;
      }
    }

    @each $label, $weight in ('light', $weight-light), ('normal', $weight-normal), ('semibold', $weight-semibold), ('bold', $weight-bold) {
      .has-weight-#{$label} {
        display: block;
        font-weight: $weight;
        margin-bottom: 10px;
        font-size: $size-medium;
      }
    }
  }

  .sd-faces-presentation {
    @each $label, $face in ('primary', $family-primary), ('sans-serif', $family-sans-serif), ('arial', $family-arial), ('monospace', $family-monospace) {
      .has-face-#{$label} {
        display: block;
        font-family: $face;
        margin-bottom: 10px;
        font-size: $size-medium;
      }
    }
  }

  .sd-radius-presentation {
    > .item {
      display: inline-block;
      width: 100px;
      height: 100px;
      background-color: $white-ter;
      margin-right: 15px;
      text-align: center;
      line-height: 100px;
      color: $black-bis;
      font-size: $size-normal;
      &.r-small {
        border-radius: $radius-small;
      }
      &.r-normal {
        border-radius: $radius;
      }
      &.r-large {
        border-radius: $radius-large;
      }
    }
  }
</style>
