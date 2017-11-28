# Datepicker 日历选框

<div class="demo-box">
  <v-datepicker-input
      v-model="date"
      placeholder="点击以选择日期"
  ></v-datepicker-input>
</div>

```html
<v-datepicker-input
      v-model="date"
      placeholder="Click to Select Date"
  ></v-datepicker-input>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

## v-datepicker-input
日历输入框
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
value      | 同步值(支持`v-model`)| [`String`, `Date`]   | /      | /
format     | 日期格式        | String   | /      | `YYYY-MM-DD`

## v-datepicker
日历管理
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
date       | 日期           | [`String`, `Date`]   | /      | `new Date()`
format     | 日期格式        | String   | /      | `YYYY-MM-DD`

## v-datepicker-table
一个默认日期表格实现
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
weeks      | 星期数据        | Array    | /      | `[]`
days       | 当前激活日期月份的天数据   | Array    | /      | `[]`
activeDate | 当前日期(formatted)        | String   | /      | `null`
</div>
<div slot="slots">

## v-datepicker
Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
header     | 头内容          | /      | /
table      | 日历表格        | { `weeks`, `days`, `activeDate` } | `#v-datepicker-table`
footer     | 脚内容          | /      | /
</div>
<div slot="events">

## v-datepicker-input
Name       | Description          | Params
----       | ------------         | --------
input      | 支持`v-model`        | `formattedDate`

## v-datepicker
Name       | Description          | Params
----       | ------------         | --------
change     | 日期变化事件          | `payload { currDate, prevDate }`
item-click | 条目被点击            | `dateItem`

## v-datepicker-table
Name       | Description          | Params
----       | ------------         | --------
table-day-item-click | 条目被点击(只能被`VDatepicker`组件订阅)  | `dateItem`
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        date: ''
      }
    },

    created () {
      this.$watch('date', (n) => {
        this.$VMessage.success({
          message: n,
          size: 'large'
        })
      })
    }
  }
</script>
