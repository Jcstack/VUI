# 弹框 Modal

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

<v-modal @close="modalVisible = false" :visible="modalVisible">
  <div class="v-box">
    <h2>
      this is my modal component
    </h2>
  </div>
</v-modal>

<v-modal @close="modalVisible2 = false" :visible="modalVisible2" :is-card="true" title="Title Here" ref="modal2">
  <div slot="header">天若有情，天亦老 !</div>
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