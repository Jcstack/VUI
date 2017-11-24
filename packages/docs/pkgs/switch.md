# Switch 开关

<div class="demo-box">
  <v-switch
      v-model="s1"
  ></v-switch>
  {{ s1 }}
  <p></p>
  <v-switch
      size="medium"
      color="success"
      v-model="s2"
      :false-value="`😟`"
      :true-value="`😊`"
  ></v-switch>
  <span style="font-size: 2rem">
  {{ s2 }}
  </span>
  <p></p>
  <v-switch
      size="large"
      color="info"
      v-model="s3"
  >
    switch me
  </v-switch>
</div>

```html
<v-switch
    v-model="s1"
></v-switch>
<v-switch
    size="medium"
    color="success"
    v-model="s2"
    :false-value="`😟`"
    :true-value="`😊`"
></v-switch>
<v-switch
    size="large"
    color="info"
    v-model="s3"
>
  switch me
</v-switch>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
value      | 同步值(`v-model`支持)| String | /    | /
size       | Vui尺寸修饰     | String   | /      | /
color      | Vui颜色修饰     | String   | /      | /
disabled   | 不可用          | Boolean  | /      | /
name       | 控件名称        | String   | /      | /
trueValue  | 选中值          | Any      | /      | `true`
falseValue | 非选中值        | Any      | /      | `false`
</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 标签内容        | /      | /
</div>
<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
input      | 输入状态值            | `value`
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        s1: false,
        s2: '😊',
        s3: false
      }
    },

    created () {
      this.$watch('s3', a => {
        this.s1 = a
        this.s2 = a ? '😊' : '😟'
      })
    }
  }
</script>