# Modal 弹框

<div class="demo-box">
  <v-modal
      title="hi, modal"
      :visible="isModalVisible"
      :is-card="isCardModal"
      :pre-confirm="_onPreConfirm"
      @close="_onModalClose"
      @ok="_onModalClose"
      size="medium"
  >
    <div class="v-box" style="min-height: 300px; text-align: center; align-items: center; display: flex; justify-content: center;">
      <p style="flex: 1;" v-if="errorMessages == null">
        <strong>Hello, World :)</strong> <br>
        <v-button size="small"
                @click.native="_onModalClose"
        >bye</v-button>
      </p>
      <div v-else>
        <p class="v-message is-danger" style="padding: 15px;">
          {{ errorMessages }}
        </p>
      </div>
    </div>
  </v-modal>

  <v-button @click.native="_showPureModal">
    Show Modal (Pure mode with nothing)
  </v-button>
  <br>
  <br>
  <v-button @click.native="_showCardModal">
    Show Modal (Card mode with header & footer)
  </v-button>
</div>

页面内基本结构如下 .
```html
<v-modal
    title="hi, modal"
    :visible="isModalVisible"
    :is-card="isCardModal"
    :pre-confirm="_onPreConfirm"
    @close="_onModalClose"
    @ok="_onModalClose"
    size="medium"
>
  <div class="v-box">
    <p v-if="errorMessages == null">
      <strong>Hello, World :)</strong> <br>
      <v-button size="small"
                @click.native="_onModalClose"
      >bye</v-button>
    </p>
    <p class="v-message is-danger" style="padding: 15px;" v-else>
      {{ errorMessages }}
    </p>
  </div>
</v-modal>
```

## open命令调用
由于浮层样式结构的特殊性，最好通过命令方式封装调用，该模块提供了一个`open`方法统一处理弹框逻辑 .

```js
/**
* @param $slots {String|Object} 支持的slot模板数据
* @param options {Object} 抽出来的组件选项, 已注入到slot内上下文
* @param slotData {Object} slot内用的状态数据
* @return {Promise}  Event(`ok`) -> Fullfilled | Event(`error`) -> Rejected
**/
export function open ($slots, options = {}, slotData = {}) {}
```

案例用法 .

```js
import Vue from 'vue'
import { open } from 'packages/modal'

// { ... codes ...
methods: {
_justOpenADialog () {
  open(`
    &#x3C;div&#x3E;
      &#x3C;strong&#x3E;{{ message }}&#x3C;/strong&#x3E;
      &#x3C;x-room&#x3E;&#x3C;/x-room&#x3E;
      &#x3C;button @click=&#x22;getTopDialog().$emit(&#x27;close&#x27;)&#x22;&#x3E;close&#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
  `, {
    propsData: {
      isCard: true,
      preConfirm () {
        return Promise.resolve('看起来没有输入错误，走起 ~')
      }
    },

    components: {
      'x-room': {
        template: '&#x3C;p&#x3E;this is x-room component&#x3C;/p&#x3E;'
      }
    }
  }, {
    message: 'this is my dialog content'
  }).then(res => {
    alert(res)
  })
}
//  .... }
```

<div class="demo-box">
  <v-button @click.native="_justOpenADialog">Open a Dialog</v-button>
</div>

<script>
  import Vue from 'vue'
  import { open } from 'packages/modal'

  Vue.prototype.$open = open

  export default {
    data () {
      return {
        isModalVisible: false,
        isCardModal: false,
        errorMessages: null
      }
    },

    methods: {
      _onModalClose () {
        this.isModalVisible = false
        this.errorMessages = null
      },

      _showCardModal () {
        this.isCardModal = true
        this.isModalVisible = true
      },

      _showPureModal () {
        this.isCardModal = false
        this.isModalVisible = true
      },

      _onPreConfirm () {
        if (+window.prompt('输入 1 表示成功，0 表示失败') !== 1) {
          this.errorMessages = (new Error('Confirmed failed .')).toString()
          return Promise.reject(null)
        }
      },

      _justOpenADialog () {
        open(`
          <div>
            <strong>{{ message }}</strong>
            <x-room></x-room>
            <button @click="getTopDialog().$emit('close')">close</button>
          </div>
        `, {
          propsData: {
            title: 'Untitled',
            isCard: true,
            preConfirm () {
              return Promise.resolve('看起来没有输入错误，走起 ~')
            }
          },

          components: {
            'x-room': {
              template: `<p>this is x-room component</p>`
            }
          }
        }, {
          message: 'this is my dialog content'
        }).then(res => {
          alert(res)
        })
      }
    }
  }
</script>

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
title      | 标题            | String   | /      | /
size       | Vui尺寸修饰     | String   | /      | `normal`
visible    | 显示控制        | Boolean  | `required` | /
isCard     | 卡片模式，携带`header` 和 `footer` | Boolean | / | `false`
preConfirm | `confirm`事件的前置钩子, 可返回Promise值标识状态 | Function | / | /
closable   | 可否关闭        | Boolean  |  /     |  `true`

</div>
<div slot="events">

Name           | Description                 | Params
----           | ------------                | --------
dimission      | 所有`dimiss`行为的事件总线    | `string | Promise`
close          | 关闭通知                     | `e`
ok             | 成功通知(默认`confirm`, 确定按钮发出) | `e`
error          | 错误通知(默认`Promise`状态下，触发`reject`) | `e`
</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 内容            | /      | /
header     | 头部(`card`模式) | /      | /
footer     | 尾部(`card`模式) | /      | /
</div>
</component-doc-table>
</div>
