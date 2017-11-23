# Message 消息

内联用法 .
<div class="demo-box">
  <v-message
      color="warning"
  >
    hello , world :)
  </v-message>
</div>

```html
<v-message
    color="warning"
>
  hello , world :)
</v-message>
```

#### v-message-popup 浮层消息

通过工厂函数 `Vue.prototype.$VMessage` .

```js
/**
* Options {
*   message: '', // 消息内容
*   type: '', // success, warn, info, error
*   size: 'normal', // small, medium, large
*   onClose: null, // 关闭时的回调函数
*   duration: 3000, // 自动关闭
* }
* @param options {Object|String}
* @return {VueComponent}
**/
Vue.prototype.$VMessage = function(options) {}

/* shortcut entry with the same options */
$VMessage.success(options);
$VMessage.warn(options);
$VMessage.info(options);
$VMessage.error(options);

/* close all message popups */
$VMessage.closeAll();
```

<div class="demo-box">
  <v-button @click.native="_showRandomMessage">
    show Random message-popup
  </v-button>
</div>

```js
_showRandomMessage () {
  let fn = 'success,info,warn,error'.split(',')[Math.floor(Math.random()*4)]
  this.$VMessage[fn]({
    message: 'hello, world :)',
  })
}
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

## v-message
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
size       | Vui尺寸修饰     | String   | /      | `true`
color      | Vui颜色修饰     | String   | /      | /
title      | 标题(`null`时不显示header)  | String | /      | `null`
message    | 消息文本(`slot`不可用时使用)        | String    |   /   |  /
closable   | 可否关闭        | Boolean  | /      | `false`
</div>
<div slot="slots">

## v-message
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 消息内容        | /      | /
</div>
<div slot="events">

## v-message
Name       | Description          | Params
----       | ------------         | --------
close      | 点击关闭按钮发出       | [`messageVm`, `e`]
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        messageVisible: true
      }
    },

    created () {
      this.$watch('messageVisible', (a, b) => {
        if (a === false) {
          setTimeout(() => this.messageVisible = true, 3000)
        }
      })
    },

    methods: {
      _showRandomMessage () {
        let fn = 'success,info,warn,error'.split(',')[Math.floor(Math.random()*4)]
        this.$VMessage[fn]({
          message: 'hello, world :)',
        })
      }
    }
  }
</script>
