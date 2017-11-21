# Icon 图标

默认包含了一套 `iconfont` 的图标, 有些组件内要用到 .

<div class="demo-box">
  <v-iconfont
    :icon="type"
    :title="type"
    v-for="(type, $index) in icons"
    :key="$index"
  ></v-iconfont>
</div>

```html
<v-iconfont
    :icon="type"
    :title="type"
    v-for="(type, $index) in icons"
></v-iconfont>
```

## v-icon
通用图标容器 .

<div class="demo-box">
  <v-icon
    ns="fa"
    icon="github"
    class="fa-2x"
    size="large"
  ></v-icon>
</div>

```html
<v-icon
    ns="fa"
    icon="github"
    size="large"
    class="fa-2x" /* 大小单独控制 */
  ></v-icon>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
color      | Vui颜色修饰     | String   | /      | --
size       | Vui尺寸修饰     | String   | /      | `normal`
is-loading | 是否加载中      | Boolean  | /      | `false`
is-outlined| 是否轮廓        | Boolean  | /      | `false`

</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 文字，按钮啥的~  | /      | /

</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        icons: 'left,right,down,up,menu,search,setting,delete,filter,help,info,close,increase,decrease,message,share'.split(',')
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .has-icon {
    background-color: #F2F2F2;
    border-radius: 3px;
    margin-right: 5px;
  }
</style>
