# Dropdown 下拉框


<div class="demo-box">
  <v-dropdown magic="left" v-model="formData.price">
    <button
        slot="trigger"
        class="v-btn is-default is-link">
      <span>{{ formData.price == null ? '请选择价格' : formData.price }}</span>
      <span class="has-icon is-small">
          <i class="fa fa-angle-down"></i>
      </span>
    </button>
    <v-dropdown-item value="白菜价，￥1">
      白菜价，￥1
    </v-dropdown-item>
    <v-dropdown-item value="胡萝卜价，￥2">
      胡萝卜价，￥2
    </v-dropdown-item>
    <v-dropdown-item :divider="true"></v-dropdown-item>
    <v-dropdown-item :value="null">
      <v-iconfont icon="delete" size="small"></v-iconfont>
      清空
    </v-dropdown-item>
  </v-dropdown>
</div>

```html
<v-dropdown magic="left" v-model="formData.price">
  <button
      slot="trigger"
      class="v-btn is-default">
    <span>{{ formData.price == null ? '请选择价格' : formData.price }}</span>
    <span class="has-icon is-small">
          <i class="fa fa-angle-down"></i>
      </span>
  </button>
  <v-dropdown-item value="白菜价，￥1">
    白菜价，￥1
  </v-dropdown-item>
  <v-dropdown-item value="胡萝卜价，￥2">
    胡萝卜价，￥2
  </v-dropdown-item>
  <v-dropdown-item :divider="true"></v-dropdown-item>
  <v-dropdown-item :value="null">
    清空
  </v-dropdown-item>
</v-dropdown>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

## v-dropdown
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
value      | 选中值，支持`v-model`     | Any   | /      | `null`
disabled   | 是否不可用     | Boolean | /      | `false`
hoverable  | 是否悬停显示   | Boolean | /      | `false`

## v-dropdown-item
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
value      | 选中值          | Any      | /      | /
divider    | 是不是分割线     | Boolean  | /      | `false`
disabled   | 不可用          | Boolean  | /      | `false`
custom     | 是否自定义, 是则移除`v-dropdown-item`类      | Boolean   | /      | `false`
hasLink    | 是否是链接，是则添加`has-link`类  |   Boolean | / | `false`
</div>
<div slot="events">

## v-dropdown
Name       | Description          | Params
----       | ------------         | --------
input      | 读入数据              | `value`
change     | 变更通知              | `value`

## v-dropdown-item
Name          | Description               | Params
------------- | --------------            | -----
item-selected | 只由 `VDropdown` 捕获    | `value`
</div>
<div slot="slots">

## v-dropdown
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 下拉框内的菜单  | /      | /
trigger    | 触发元素       | /      | /

## v-dropdown-item
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 条目下内容      | /      | /
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        formData: {
          price: null
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  .v-dropdown-menu {
    hr {
      margin: 0.5rem 0;
    }
  }
</style>
