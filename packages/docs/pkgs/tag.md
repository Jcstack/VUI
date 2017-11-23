# Tag 小标签

<div class="demo-box">
  <v-tags>
    <v-tag
        size="medium"
    >
      hello , world :)
    </v-tag>
    <v-tag
        color="info"
        size="medium"
        :rounded="true"
        :closable="true"
        @close="tagVisible = false"
        v-if="tagVisible"
    >
      hello , world :)
    </v-tag>
  </v-tags>
</div>


多个标签时，最好`v-tags`容器包裹 .
```html
<v-tags>
  <v-tag
      size="medium"
  >
    hello , world :)
  </v-tag>
  <v-tag
      color="info"
      size="medium"
      :rounded="true"
      :closable="true"
      @close="tagVisible = false"
      v-if="tagVisible"
  >
    hello , world :)
  </v-tag>
</v-tags>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
size       | Vui尺寸修饰     | String   | /      | `true`
color      | Vui颜色修饰     | String   | /      | /
rounded    | 是否圆角        | Boolean  | /      | /
closable   | 可否关闭        | Boolean  | /      | `false`
</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 标签内容        | /      | /
</div>
<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
close      | 点击关闭按钮发出        | [`tagVm`, `e`]
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        tagVisible: true
      }
    },
    methods: {
      _handleTagClose (tagVm, e) {
        this.tagVisible = false
      }
    }
  }
</script>