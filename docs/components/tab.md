# 选项卡 Tabs

由`v-tabs`修饰，水平布局，且带可切换状态条目的容器 .

<div class="demo-box has-pad-sm">

 #### 😈 &nbsp;点击下面按钮，玩一波&nbsp; 😈

  <h4>
    # 对齐方式
  </h4>
  <div class="v-field is-grouped">
    <button class="v-btn is-small is-link" @click="_handleAlign('reset')">默认</button>
    <button class="v-btn is-small is-info" @click="_handleAlign('centered')">[v-tabs].is-centered</button>
    <button class="v-btn is-small is-light" @click="_handleAlign('right')">[v-tabs].is-right</button>
  </div>
  <h4>
    # 尺寸大小
  </h4>
  <div class="v-field is-grouped">
    <button class="v-btn is-small is-link" @click="_handleSize('default')">默认</button>
    <button class="v-btn is-small" @click="_handleSize('small')">[v-tabs].is-small</button>
    <button class="v-btn is-small is-primary" @click="_handleSize('medium')">[v-tabs].is-medium</button>
    <button class="v-btn is-small is-light" @click="_handleSize('large')">[v-tabs].is-large</button>
  </div>
  <h4>
    # 边框样式
  </h4>

  <div class="v-field is-grouped">
    <button class="v-btn is-small is-link" @click="styleModifier = ''">默认</button>
    <button class="v-btn is-small" @click="styleModifier = 'boxed'">[v-tabs].is-boxed</button>
    <button class="v-btn is-small is-warning" @click="styleModifier = 'toggle'">[v-tabs].is-toggle</button>
    <button class="v-btn is-small is-black" @click="fullwidthModifier = (fullwidthModifier ? '' : 'fullwidth')">[v-tabs].is-fullwidth</button>
  </div>

  <hr style="border-color: transparent;">
  <div class="v-tabs"
       :class="[ _alignCls, _sizeCls, `is-${styleModifier}`, `is-${fullwidthModifier}` ]"
  >
    <ul>
      <li class="is-active"><a>Pictures</a></li>
      <li><a>Music</a></li>
      <li>
        <a>
          <span class="has-icon is-small">
            <i class="fa fa-github"></i>
          </span>
          <span>Github</span>
        </a>
      </li>
      <li><a>Documents</a></li>
    </ul>
  </div>
</div>

```html
<div class="v-tabs is-centered">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li>
      <a>
          <span class="has-icon is-small">
            <i class="fa fa-github"></i>
          </span>
        <span>Github</span>
      </a>
    </li>
    <li><a>Documents</a></li>
  </ul>
</div>
```

<script>
  export default {
    data () {
      return {
        alignModifier: '',
        sizeModifier: '',
        styleModifier: '',
        fullwidthModifier: ''
      }
    },

    methods: {
      _handleAlign (mode) {
        this.alignModifier = mode
      },

      _handleSize (mode) {
        this.sizeModifier = mode
      }
    },

    computed: {
      _alignCls () {
        return `is-${this.alignModifier}`
      },

      _sizeCls () {
        return `is-${this.sizeModifier}`
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  .v-tabs ul {
    margin: 0;
    padding: 0;
  }

  .is-grouped {
    .v-btn {
      margin-right: .5rem;
    }
  }
</style>