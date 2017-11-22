# Popover 浮层

只要符合通过某一引用元素(`reference`)的特定事件(`click`, `hover`, `focus`, `manual`)以触发
浮层元素的显示和关闭的逻辑, 均可扩展该组件完成 .

<div class="demo-box">
  <v-popover
    placement="bottom-start"
  >
    <v-button slot="reference">show popover</v-button>
    <div class="v-message" style="width: 300px; min-height: 150px;margin-top: 8px; justify-content: center; align-items: center; display: flex">
      <v-button color="link">
        {{stamp}}
      </v-button>
    </div>
  </v-popover>
</div>

```html
<v-popover
    placement="bottom-start"
>
  <v-button slot="reference">show popover</v-button>
  <div class="v-message">
    hello , world :)
  </div>
</v-popover>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name              | Description    |    Type     | Values                                      | Default
----              | -------------- | --------    | ------                                      | -------
value             | 显隐信号值      | Boolean     |  /                                          | `false`
placement         | 浮层相对位置     | String      | `/^(top|bottom|left|right)(-start|-end)?$/` | `bottom`
offset            | 浮层边界偏移     | Number      | /                                           | `0`px
visibleArrow      | 是否箭头        | Boolean      |  /                                          | `true`
appendToBody      | 是否追加到body  | Boolean      | /                                           | `true`
transition        | 过渡动画name    | String       | /                                           | `popover-fade`
reference         | 触发引用元素dom  | Element      | /                                           | /
popper            | 浮层元素dom     | Element      |  /                                          | /
trigger           | 触发事件        | String       | `(click|focus|hover|manual)`                | `click`
openDelay         | 延迟触发时间     | Number       | /                                           | `0`
title             | 标题内容        | String        | /                                           | /
content           | `$slots.default`空时取这个      | String   | /                               | /
popperClass       | 浮层类名       | VueClassExpr  |  /                                         | /
width             | 浮层容器预设宽度| Number        | /                                           | /
disabled          | 不可用信号值    | Boolean       | /                                           | /
autoDestroy       | 关闭后是否自动销毁popper实例 | Boolean  |       /                              | `true`
</div>

<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
input      | 读入数据(浮层显隐状态)  | `value`
show       | 浮层显示              | `value`
hide       | 浮层隐藏              | `value`
created    | 浮层popper实例化完成   | `vm`
</div>

<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 浮层框内的内容   | /      | `content`
reference  | 引用元素内容     | /      | /
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        stamp: (new Date()).toLocaleTimeString()
      }
    },

    mounted () {
      setInterval(() => {
        this.stamp = (new Date()).toLocaleTimeString()
      }, 1000)
    }
  }
</script>