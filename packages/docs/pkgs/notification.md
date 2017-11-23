# Notification 通知

内联用法 .

<div class="demo-box">
  <v-notification
      title="🚫 ①零零❽⑥ 🚫"
      v-show="notificationVisible"
      @close="notificationVisible = false"
      color="warning"
  >
    余额不足，请充值 :)
  </v-notification>
</div>

```html
<v-notification
  title="x10086x"
  v-show="notificationVisible"
  @close="notificationVisible = false"
  color="warning"
>
  余额不足，请充值 :)
</v-notification>
```

#### v-notification-popup 浮层消息

通过工厂函数 `Vue.prototype.$VNotification` .

```js
/**
* Options {
*   title: '',  // 标题内容
*   message: '', // 消息内容
*   type: '', // success, warn, info, error
*   onClose: null, // 关闭时的回调函数
*   duration: 4000, // 自动关闭
* }
* @param options {Object}
* @return {VueComponent}
**/
Vue.prototype.$VNotification = function(options) {}

/* shortcut entry with the same options */
$VNotification.alert(message | options);
$VNotification.success(message | options);
$VNotification.warn(message | options);
$VNotification.info(message | options);
$VNotification.error(message | options);
```

<div class="demo-box">
  <v-button @click.native="_showRandomNotification">
    show Random notifications
  </v-button>
</div>

```js
_showRandomNotifications () {
  let fn = 'alert,success,info,warn,error'.split(',')[Math.floor(Math.random()*5)]
  this.$VNotification[fn]({
      message: 'hello, world :)',
  })
}
```

<script>
  export default {
    data () {
      return {
        notificationVisible: true
      }
    },

    methods: {
      _showRandomNotification () {
        let fn = ['alert', 'warn', 'error', 'info', 'success'][Math.floor(Math.random() * 5)]
        this.$VNotification[fn]('hello world :)')
      }
    }
  }
</script>

<div class="demo-box">
<component-doc-table>
<div slot="props">

## v-notification
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
color      | Vui颜色修饰     | String   | /      | /
title      | 标题(`null`时不显示header)  | String | /      | `null`
message    | 消息文本(`slot`不可用时使用)        | String    |   /   |  /
closable   | 可否关闭        | Boolean  | /      | `false`
</div>
<div slot="slots">

## v-notification
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 消息内容        | /      | /
close      | 关闭节点        | /      | /
</div>
<div slot="events">

## v-notification
Name       | Description          | Params
----       | ------------         | --------
close      | 点击关闭按钮发出       | [`notificationVm`, `e`]
</div>
</component-doc-table>
</div>