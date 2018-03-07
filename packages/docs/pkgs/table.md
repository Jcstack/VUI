# Table 表格

灵活运用该**Table**, 需要明白以下几点:
- 所有`th`,`td`内的结构，都可以通过`slot`关联列标签名自定义 .
  - `th` 动态slot 名称结构 `th-item-[key_ref]`
  - `td` 动态slot 名称结构 `td-item-[key_ref]`
- 内置了一些通用交互插件，暂时不支持自定义 . 目前有 [全选]`(__select标识)` .
- 依据列排序，组件内只维护状态 , 不维护结果集 .

<div class="demo-box">
  <v-table
      :columns="tableCols"
      :rows="tableRows"
      class="my-x-table"
      :bordered="true"
      :sortable="true"
  >
    <template
        slot="td-item__select"
        slot-scope="{ row, index }"
    >
      <label class="v-checkbox">
        <input type="checkbox" v-model="row.v__selected">
        #{{ index + 1}}
      </label>
    </template>
    <template
        slot="td-item-first"
        slot-scope="{ v }"
    >
     <strong>🤖   {{ v }}</strong>
    </template>
  </v-table>
  <v-button size="small" @click.native="_addRow">add a New row</v-button>
</div>

```html
<v-table
    :columns="tableCols"
    :rows="tableRows"
    class="my-x-table"
    :bordered="true"
    :sortable="true"
>
  <template
      slot="td-item__select"
      scope="{ row, index }"
  >
    <label class="v-checkbox">
      <input type="checkbox" v-model="row.v__selected">
      #{{ index + 1}}
    </label>
  </template>
  <template
      slot="td-item-first" /* 行间slot以`td-item-`开头 */
      scope="{ v }"
  >
    <strong>🤖   {{ v }}</strong>
  </template>
</v-table>

<script>
  export default {
    data () {
      return {
        tableCols: ['__select|全选', 'first|第一列|20', 'second'],
        tableRows: [
          {
            first: 'a',
            second: 'b'
          }
        ]
      }
    },

    methods: {
      _addRow () {
        this.tableRows.push({
          first: 'cc',
          second: 'dd'
        })
      }
    }
  }
</script>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
columns    | 列元数据，以`__`开头的key为内置插件(目前支持 : `__select`)        | Array    | [`"key_ref|[key_alias]|[col_with]"`]      | `[]`
rows       | 行数据集, 实体`key`必须对应列元数据  | Array    | /      | `[]`
bordered   | 是否边框        | Boolean  | /      | /
striped    | 🐴  &nbsp;斑马线      | Boolean  | /      | /
sortable   | 是否排序        | Boolean  | /      | `false`
</div>
<div slot="slots">

Name               | Description    | Scoped | Default
----               | -------------- | ------ | -------
td-item-`[key_ref]`| td内结构        | `{ row, k, v, index }`      | /
th-item-`[key_ref]`| th内结构        | /      | /
</div>
<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
order-by-column | 排序        | [`sortableState`, `col`]
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        tableCols: ['__select|全选', 'first|第一列|20', 'second'],
        tableRows: [
          {
            first: 'a',
            second: 'b'
          }
        ]
      }
    },

    methods: {
      _addRow () {
        this.tableRows.push({
          first: 'cc',
          second: 'dd'
        })
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  .my-x-table {
    display: table !important;
    th {
      &:first-child {
        width: 75px;
      }
    }
    tbody {
      tr {
        > td:first-child {
          padding: 0;
          .v-checkbox {
            display: block;
            padding: 0.65em 0.75em;
            text-align: center;
          }
        }
      }
    }
  }
</style>