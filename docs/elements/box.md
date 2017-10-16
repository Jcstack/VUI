# 块状盒子 Box

一个简单的容纳元件的抽象块状容器 , 拥有默认的 `shadow`, `border`, `radius`, 及 `padding`.

```html
<div class="v-box">
  <h1>
    hi, i am a Box :)
  </h1>
  <p>
    很久很久以前 ...
  </p>
</div>
<a class="v-box">
  <h1 style="margin: 0">
    hi, i am an <code>Anchor</code> Box :)
  </h1>
</a>
```

<div class="demo-box">
  <div class="v-box">
    <h1>
      hi, i am a Box :)
    </h1>
    <p>
      很久很久以前 ...
    </p>
    <div class="v-cols">
      <div class="v-col is-8">
        <div class="v-field is-grouped">
          <div class="v-control is-expanded">
            <input class="v-input"
                   name="s_key"
                   placeholder="please input it"
                   v-model="searchVal"
                   :class="{ 'is-danger': errPending }"
            >
          </div>
          <div class="v-control">
            <button class="v-btn is-primary" @click="_clickSearch">
          <span class="has-icon">
            <i class="fa fa-search"></i>
          </span>
              <strong>Search</strong>
            </button>
          </div>
        </div>
        <div class="v-field">
          <p class="v-help" v-show="errPending"
             :class="{ 'is-danger': errPending }"
          >{{ errPending }}</p>
        </div>
      </div>
    </div>
  </div>
  <a class="v-box">
    <h1 style="margin: 0">
      hi, i am an <code>Anchor</code> Box :)
    </h1>
  </a>
</div>

<script>
  export default {
    data () {
      return {
        searchVal: '',
        errPending: false
      }
    },

    methods: {
      _clickSearch () {
        if (this.searchVal.trim() === '') {
          const elInput = this.$el.querySelector('[name=s_key]')
          elInput.focus()
          this._notifyErr('请填写你要搜索的内容 🔍')
        } else {
          window.open('https://www.google.com.hk/search?q=' + encodeURIComponent(this.searchVal))
        }
      },

      _notifyErr (msg) {
        this.errPending = msg

        setTimeout(() => {
          this.errPending = ''
        }, 3000)
      }
    }
  }
</script>