# Pagination 分页

<div class="demo-box">
  <v-pagination
      :page="page"
      :total="99"
      size="small"
      align="centered"
      :disabled="pagerPending"
      @on-page="_handleOnPage"
      ref="pager"
  ></v-pagination>
  <p>
    {{ pagerPending ? 'Pager Pending ...' : 'Pager IDLE .' }}
  </p>
</div>

```html
<template>
  <v-pagination
     :page="page"
     :total="99"
     size="small"
     align="centered"
     :disabled="pagerPending"
     @on-page="_handleOnPage"
     ref="pager"
  ></v-pagination>
  <p>
    {{ pagerPending ? 'Pager Pending ...' : 'Pager IDLE .' }}
  </p>
</template>

<script>
  export default {
    data () {
      return {
        page: 6,
        pagerPending: false
      }
    },

    methods: {
      _handleOnPage (page) {
        this.pagerPending = true
        setTimeout(n => {
          this.pagerPending = false
        }, 3000)
      }
    }
  }
</script>
```

<div class="demo-box">
<component-doc-table tabs="props, events">
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
page       | 页数(首页为`1`, 支持`.sync`)   |  Number | / | `null`
total      | 总条目数        | Number   | /      | `0`
limit      | 每页条数        | Number   | /      | `10`
offset     | 页数分割偏移数   | Number   | /      | `3`
size       | Vui尺寸修饰     | String   | /      | /
align      | Vui布局修饰     | String   | [`left`, `centered`, `right` ]      | /
disabled   | 是否可用        | Boolean  | /      | /
</div>
<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
on-page    | 翻页事件              | `page`
update:page| 同步`.sync`支持       | `page`
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        page: 6,
        pagerPending: false
      }
    },

    methods: {
      _handleOnPage (page) {
        this.pagerPending = true
        setTimeout(n => {
          this.pagerPending = false
        }, 3000)
      }
    }
  }
</script>
