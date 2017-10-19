# 消息框 Messages

<div class="demo-box">
  <button class="v-btn" @click="_showMsg">
    show popup message
  </button>
</div>

<div class="demo-box">
  <article class="v-message">
    <div class="v-message-body">
      这是一个病毒链接 <a href="">http://www.baidu.com</a> ...
    </div>
  </article>

  <article class="v-message is-warning">
    <div class="v-message-body">
      你的快递被人拿走了 ...
    </div>
  </article>

  <article class="v-message is-primary">
    <div class="v-message-body">
     👼 &nbsp; 都是天使惹的祸 ...
    </div>
  </article>

  <article class="v-message is-danger">
    <div class="v-message-body">
      🌎 &nbsp; 地球快爆炸了，快跑 ...
    </div>
  </article>

</div>

<script>
  import MessageFactory from 'packages/message'

  export default {
    methods: {
      _showMsg () {
        let fn = ['success', 'warning', 'info', 'error'][Math.floor(Math.random() * 4)]
        let h = this.$createElement
        MessageFactory[fn]({
          size: 'small',
          message: '你有一个快递要收了 ....'
        })
      }
    }
  }
</script>
