# Button 按钮

<div class="demo-box">
  <v-button>a Default Button</v-button>
  <v-button color="danger">a Button</v-button>
  <v-button color="info" disabled>a Disabled Button</v-button>
  <p></p>
  <v-button color="primary"
            :is-loading="true"
  >a Loading Button</v-button>
  <v-button color="black" :is-outlined="true">a Outlined Button</v-button>
  <v-button>
    <span class="has-icon">
      <i class="fa fa-github"></i>
    </span>
    <span>a Icon Button</span>
  </v-button>
</div>

```html
<v-button>a Default Button</v-button>
<v-button color="danger">a Button</v-button>
<v-button color="danger">a Button</v-button>
<v-button color="primary"
          :is-loading="true"
>a Loading Button</v-button>
<v-button color="black" :is-outlined="true">a Outlined Button</v-button>

<v-button>
  <span class="has-icon">
    <i class="fa fa-github"></i>
  </span>
  <span>a Icon Button</span>
</v-button>
```

## Anchor 按钮

添加`[anchor]`属性，该按钮点击的时候没有Focus状态.

<div class="demo-box">
  <v-button anchor>Anchor Button</v-button>
  <v-button color="primary" anchor>Anchor Button</v-button>
</div>

```html
<v-button anchor>Anchor Button</v-button>
<v-button color="primary" anchor>Anchor Button</v-button>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
color      | Vui颜色修饰     | String   | /      | --
size       | Vui尺寸修饰     | String   | /      | `normal`
is-loading | 是否加载中      | Boolean  | /      | `false`
is-outlined| 是否轮廓        | Boolean  | /      | `false`

</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 文字，按钮啥的~  | /      | /

</div>
</component-doc-table>
</div>