# Badge 小徽章

<div class="demo-box">
  <v-badge
      count="99"
      v-tip.top="`99条消息 ~`"
  >
    <v-button>hello</v-button>
  </v-badge>
  <v-badge
      :is-dot="false"
      count="99"
  >
    <v-button color="warning">hello</v-button>
  </v-badge>
</div>

```html
<v-badge
  count="99"
  v-tip.top="`99条消息 ~`"
>
  <v-button>hello</v-button>
</v-badge>
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
