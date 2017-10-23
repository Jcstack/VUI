# 弹框 Modal

由`v-model`修饰，带遮罩层`v-model-overlay`以及关闭`v-modal-close`，内容区域`v-modal-content`
完全居中的弹出层容器!

<div class="demo-box">
  <button class="v-btn"
          @click="modalVisible = !modalVisible"
  >show Modal
  </button>
  <button class="v-btn is-primary"
          @click="modalVisible2 = !modalVisible2"
  >show Card Modal
  </button>
</div>

<p class="tip">
  注意，弹框是显隐是由修饰符 <code>[v-modal].is-active</code> 控制 . 动态控制需要js编程 .
</p>

#### 基本结构

```html
<div class="v-modal">
  <div class="v-modal-overlay"></div>
  <div class="v-modal-content">
    // default modal content
  </div>
  <button class="v-modal-close">
  </button>
</div>
```

#### 卡片式
```html
<div class="v-modal">
  <div class="v-modal-overlay"></div>
  <div class="v-modal-card">
    <header class="v-modal-card-head">
      <div class="v-modal-card-title">{{ title }}</div>
      <button class="v-close"></button>
    </header>
    <section class="v-modal-card-body">
      // default content
    </section>
    <footer class="v-modal-card-foot">
      <button class="v-btn is-primary">Save changes</button>
      <button class="v-btn is-link">Cancel</button>
    </footer>
  </div>
</div>
```

<v-modal @close="modalVisible = false" :visible="modalVisible">
  <div class="v-box">
    <h2>
      this is my modal component
    </h2>
  </div>
</v-modal>

<v-modal @close="modalVisible2 = false" :visible="modalVisible2" :is-card="true" title="天若有情，天亦老 !" ref="modal2">
  <div class="sd-card-bd">
    <div class="v-field">
      <div class="v-control">
        <input type="text" name="dg" class="v-input is-large" placeholder="hello world" v-model="dgVal">
      </div>
      <span class="v-help is-danger">
        {{ dgErr }}
      </span>
    </div>
  </div>
  <div slot="footer">
    <button class="v-btn is-warning is-large" @click="_handleDgVal">
      Get Value and close modal
    </button>
  </div>
</v-modal>

<script>
  import VModal from 'packages/modal'

  export default {
    data () {
      return {
        modalVisible: false,
        modalVisible2: false,
        dgVal: '',
        dgErr: ''
      }
    },

    methods: {
      _handleDgVal () {
        if (this.dgVal.trim() === '') {
          document.querySelector('input[name=dg]').select()
          return
        }

        // async value
        const p = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(`you got an error [${this.dgVal}]`)
          }, 3000)
        })

        p.then(res => {
          alert(res)
        }, err => {
          this.dgErr = err
        })

        this.$refs.modal2.$emit('dimission', p)
      }
    },

    components: {
      VModal
    }
  }
</script>