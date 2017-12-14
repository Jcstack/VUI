# Form 表单

基本层次结构，详细请参考Vui文档 .

<div class="demo-box">
  <v-form>
    <v-field
        label="username"
        type="danger"
        message="i am a helper guy for messaging :)"
    >
      <v-input
          maxlength="10"
          size="large"
      ></v-input>
    </v-field>
    <v-field
        label="univercity"
    >
      <v-control>
        <v-checkbox
          v-model="checkbox_values"
          native-value="香港中文大学"
        >香港中文大学</v-checkbox>
        <v-checkbox
            v-model="checkbox_values"
            native-value="麻省理工学院"
        >麻省理工学院</v-checkbox>
      </v-control>
    </v-field>
    <v-field>
      <v-control>
        <code>{{ checkbox_values }}</code>
      </v-control>
    </v-field>
  </v-form>
</div>

```html
<v-form>
  <v-field
      label="username"
      type="danger"
      message="i am a helper guy for messaging :)"
  >
    <v-input
        maxlength="10"
        size="large"
    ></v-input>
  </v-field>
  <v-field
      label="univercity"
  >
    <v-control>
      <v-checkbox
          v-model="checkbox_values"
          native-value="香港中文大学"
      >香港中文大学</v-checkbox>
      <v-checkbox
          v-model="checkbox_values"
          native-value="麻省理工学院"
      >麻省理工学院</v-checkbox>
    </v-control>
  </v-field>
</v-form>
```

## v-form

顶层抽象容器，只包含了个默认`slot` .

<div class="demo-box">
<component-doc-table>
<div slot="props">

## v-field
包括`control`元素、一些辅助元素(`label` , `help` ...)的控制容器 .

Name       | Description    | Type     | Values                              | Default
----       | -------------- | -------- | ------                              | -------
type       | 颜色类型        | String   | `danger`，`success`, `info` 等      | /
label      | 标注文字        | String   | /                                   | /
labelFor   | 控制ID          | String   | /                                  | /
message    | 帮助消息        | [Array, String] | /                            | /
grouped    | 是否水平item    | Boolean   | /                                  | /
groupedMultiline  | 是否自动多行  | Boolean | /                                | /
position   | 控制附加元素，分组元素排布方向 | `centered`, `right`, `[fullwidth]` | / | /
addons     | 附加控制         |  Boolean | /                                  | true

## v-input
这是一个标准的`control`元素 .
Name       | Description           | Type     | Values | Default
----       | --------------        | -------- | ------ | -------
value      | 同步值                 | String   | /      | /
type       | 输入框类型             | String    | enum[`text`, `textarea`] |  `text`
size       | 尺寸修饰符             | String    | /      | /
loading    | 是否加载中              | Boolean  | /      | `false`
icon       | 是否有图标(Left)       | Boolean   | /      | /
expand     | 是否撑满剩余容器空间     | Boolean  | /      | /
disabled   | 不可用                 | Boolean   | /     | `false`
maxlength  | 最多字符数              | Number   | /      | /
hasCounter | 开启字符约束计数显示     | Boolean   | /     | `true`

## v-select
Name       | Description           | Type     | Values | Default
----       | --------------        | -------- | ------ | -------
value      | 同步值                 | String   | /      | /
size       | 尺寸修饰符             | String    | /      | /
loading    | 是否加载中              | Boolean  | /      | `false`
icon       | 是否有图标(Left)       | Boolean   | /      | /
placeholder| Option默认占位(`null`) | String    | /      | /
multiple   | 对应HTML Attr         | Boolean   | /     | /
nativeName | 对应HTML `name` Attr  | String    | /     | /
nativeSize | 对应HTML `size` Attr  | Number    | /     | `0`

## v-checkbox
Name       | Description           | Type     | Values | Default
----       | --------------        | -------- | ------ | -------
value      | 同步值                 | String   | /      | /
size       | 尺寸修饰符             | String    | /      | /
disabled   | 不可用                 | Boolean   | /     | `false`
nativeValue| 控件值                 | String    | /     | /
nativeName | 控件名                 | String    | /     | /
trueValue  | 选中对应值              | Any      | /      | `true`
falseValue | 未选对应值              | Any      | /      | `false`

## v-radio
Name       | Description           | Type     | Values | Default
----       | --------------        | -------- | ------ | -------
value      | 同步值                 | String   | /      | /
size       | 尺寸修饰符             | String    | /      | /
disabled   | 不可用                 | Boolean   | /     | `false`
nativeValue| 控件值                 | String    | /     | /
nativeName | 控件名                 | String    | /     | /
</div>

<div slot="events">

## v-input & v-select
Name       | Description          | Params
----       | ------------         | --------
input      | 读入数据              | `value`
blur       | native               | `$event`
focus      | native               | `$event`

## v-checkbox & v-radio
Name       | Description          | Params
----       | ------------         | --------
input      | 读入数据              | `value`
</div>

<div slot="slots">

## v-form & v-field & v-control
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | /              | /      | /

## v-input
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
icon       | 图标内容        | /      | /

## v-checkbox & v-radio
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 标注内容        | /      | /
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        checkbox_values: []
      }
    }
  }
</script>