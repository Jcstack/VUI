# Tooltip 小提示

目前有一套指令实现 .

<div class="demo-box">
  <v-button v-tip.top="hello1">
    hover me tooltip
  </v-button>

  <v-button v-tip.bottom="hello2">
    hover me tooltip
  </v-button>
</div>

```html
<v-button v-tip.top="hello1">
  hover me tooltip
</v-button>

<v-button v-tip.bottom="hello2">
  hover me tooltip
</v-button>

// 基本用法如下
// tooltip提示
// v-tip="text"
// v-tip="bindValue"
// html
// v-tip.html="bindValue"
// align
// v-tip.left="left-text"
// v-tip.right="right-text"
```

<div class="demo-box">
<component-doc-table>
<div slot="props">
@implementation
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        hello1: 'this is first tip :)',
        hello2: '🎧 tip 😈'
      }
    }
  }
</script>