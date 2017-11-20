# Layout 布局

<div class="demo-box">
  <v-container>
    <v-row>
      <v-col class="my-col" span="2">
        <div class="inner">
          left
        </div>
      </v-col>
      <v-col class="my-col">
        <div class="inner">
          right
        </div>
      </v-col>
    </v-row>
  </v-container>
</div>

```html
<v-container>
  <v-row>
    <v-col class="my-col" span="2">
      <div class="inner">
        a
      </div>
    </v-col>
    <v-col class="my-col">
      <div class="inner">
        b
      </div>
    </v-col>
  </v-row>
</v-container>
```

## v-container
这是一个抽象容器，不是必须的 . 如果你需要包裹 `v-row`, 并限制布局宽度，`v-container` 是最好的选择 .

<div class="demo-box">
<component-doc-table>
<div slot="props">

## v-row
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
magic      | 魔法修饰符      | String   | `centered-multiline-vcentered-gapless`      | /

## v-col
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
span       | 栅格份          | [String, Number] | 参考Vui文档 | /
offset     | 偏移份          | [String, Number] | `1~12` | /
magic      | 魔法修饰符      | String   | /     | /

</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
default    | /              | /      | /

</div>
</component-doc-table>
</div>

<style lang="scss" type="text/scss">
  .v-col.my-col .inner {
    display: flex;
    min-height: 80px;
    background-color: #f6f6f6;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
  }
</style>