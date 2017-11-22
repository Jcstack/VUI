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
isDot      | 是否小圆点       | Boolean | /      | `true`
count      | 显示数字(`null`时不显示点点)| String|Number | /      | `null`
</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 红点容器内容     | /      | /
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