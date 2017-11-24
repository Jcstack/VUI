# Progress 进度条

`line` & `raw` 类型 .

<div class="demo-box">
  <v-progress
    type="raw"
    color="success"
    :value="38"
  ></v-progress>
  <p></p>
  <v-progress
    type="raw"
    size="large"
    color="info"
    :value="18"
  ></v-progress>
</div>

```html
<v-progress
    type="raw"
    color="success"
    :value="38"
></v-progress>
<p></p>
<v-progress
    type="raw"
    size="large"
    color="info"
    :value="18"
></v-progress>
```

`circle` 类型 .

<div class="demo-box">
  <v-row>
    <v-col>
      <v-progress
        type="circle"
        :value="18"
      ></v-progress>
    </v-col>
    <v-col>
      <v-progress
        type="circle"
        stroke-color="#FF8811"
        :value="38"
      ></v-progress>
    </v-col>
    <v-col>
      <v-progress
        type="circle"
        stroke-color="#000000"
        :stroke-width="4"
        :width="80"
        :value="66"
      ></v-progress>
    </v-col>
  </v-row>
</div>

```html
<v-row>
  <v-col>
    <v-progress
        type="circle"
        :value="18"
    ></v-progress>
  </v-col>
  <v-col>
    <v-progress
        type="circle"
        stroke-color="#FF8811"
        :value="38"
    ></v-progress>
  </v-col>
  <v-col>
    <v-progress
        type="circle"
        stroke-color="#000000"
        :stroke-width="4"
        :width="80"
        :value="66"
    ></v-progress>
  </v-col>
</v-row>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
type       | 类型            | String  | [`raw`, `line`, `circle`]   |  `line`
color      | Vui颜色修饰(`line` & `raw` 类型下有效)     | String   | /      | /
size       | Vui颜色修饰(`raw`类型下有效) | String   | /      | /
value      | 进度分子值      | Number   | /      | `0`
max        | 进度分母值      | Number   | /      | `100`
strokeWidth| 进度绘制宽度(`circle`类型下有效)|  Number  | / | `6`px
strokeColor| 进度天聪颜色(`circle`类型下有效)|  String  | / | `#20a0ff`
width      | 容器宽度(`circle`类型下)      | Number      |  / | `128`px
</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | 标签内容        | /      | /
</div>
</component-doc-table>
</div>
