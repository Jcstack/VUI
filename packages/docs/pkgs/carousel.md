# Carousel 幻灯

<div class="demo-box">
  <!-- carousel demo -->
  <v-carousel :items="carouselItems">
    <div slot="item-body" slot-scope="props" class="my-item">
      <template v-if="/\.jpg$/.test(props.item)">
        <span class="img" :style="{ backgroundImage: `url(${props.item})` }"></span>
      </template>
      <template v-else>
        <strong>{{ props.index + 1 }}</strong>
        <p>content #{{ props.item }}</p>
      </template>
    </div>
  </v-carousel>
</div>

<script>
  export default {
    data () {
      return {
        carouselItems: [
          'https://img3.doubanio.com/lpic/s6978281.jpg-', 'B', 'C', 'D'
        ]
      }
    }
  }
</script>

```html
<v-carousel :items="carouselItems">
  <div slot="item-body" slot-scope="props" class="my-item">
    <strong>{{ props.index + 1 }}</strong>
    <p>content #{{ props.item }}</p>
  </div>
</v-carousel>

<script>
  export default {
    data () {
      return {
        carouselItems: ['A', 'B', 'C', 'D']
      }
    }
  }
</script>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
items      | 条目内容| Array | `required`      | /
value      | 初始索引值(`0`起始) | Number| /      | `0`
hasControls| 是否显示左右控制 | Boolean  | /      | `false`
hasIndicators| 是否显示指示器 | Boolean  | /      | `true`
interval   | 间隔ms | Number | /      | `5000`
</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
item-body  | 条目内容        | { `item`, `index` }      | /
</div>
<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
sliding-end| 动画结束              | `to-index`
</div>
</component-doc-table>
</div>

<style lang="scss" type="text/scss">
  .demo-box {
    .v-carousel-item {
      border-radius: 3px;
      background-color: #eff4c9;
      .my-item {
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        strong {
          font-size: 32px;
        }
        .img {
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: inherit;
          background-repeat: no-repeat;
          background-color: #fff;
        }
      }
    }
  }
</style>