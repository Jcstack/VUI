# 通知 Notifications

由`v-notification`修饰，可交互带关闭(`close`)按钮的通知元件 . 需要与 `v-message` 区别下，消息类组件，通常不带交互设计 .

```html
<div class="notification">
  <button class="delete"></button>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>
```

<div class="demo-box">
  <button class="v-btn" @click="_clickShowNotifications">
    click me to show random notifications
  </button>
</div>

<div class="demo-box has-pad-sm">
  <div class="v-notification">
    <button class="v-close is-transparent is-medium"></button>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit .
    <h5 style="margin: 10px 0">
      我们都是中国人 ~
    </h5>
  </div>
</div>

### 颜色(Colors)

- 支持主题色

<div class="demo-box has-pad-sm" pre>

  <div class="v-notification is-light">
    <button class="v-close"></button>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit .
    <h5 style="margin: 10px 0">
      我们都是中国人 ~
    </h5>
  </div>

  <div class="v-notification is-black">
    <button class="v-close"></button>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit .
    <h5 style="margin: 10px 0">
      我们都是中国人 ~
    </h5>
  </div>

  <div class="v-notification is-success">
    <button class="v-close"></button>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit .
    <h5 style="margin: 10px 0">
      我们都是中国人 ~
    </h5>
  </div>

  <div class="v-notification is-warning">
    <button class="v-close"></button>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit .
    <h5 style="margin: 10px 0">
      我们都是中国人 ~
    </h5>
  </div>

  <div class="v-notification is-danger">
    <button class="v-close"></button>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit .
    <h5 style="margin: 10px 0">
      我们都是中国人 ~
    </h5>
  </div>
</div>

<script>
  import { NotificationFactory } from 'packages/notification'

  export default {
    methods: {
      _clickShowNotifications () {
        let fn = ['info', 'success', 'alert', 'warn', 'error'][Math.floor(Math.random() * 5)]
        NotificationFactory[fn](`
          I will never close automatically.
          I will be close automatically.
          I will never close automatically.
        `, {
          title: '我是标题我怕谁'
        })
      }
    }
  }
</script>
