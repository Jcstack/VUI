# Examples

<div class="demo-box">
  <dropdown magic="right" v-model="formData.price">
    <button
        slot="trigger"
        class="v-btn is-warning" aria-haspopup="true" aria-controls="v-dropdown-menu">
        <span>{{ formData.price }}</span>
        <span class="has-icon is-small">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </span>
      </button>
    <dropdown-item value="￥1">
      hello world
    </dropdown-item>
    <dropdown-item :divider="true"></dropdown-item>
    <dropdown-item value="￥2">
      hello world
    </dropdown-item>
  </dropdown>
</div>

<div class="demo-box">
  <v-table
      :columns="tableCols"
      :rows="tableRows"
      class="my-x-table"
  >
    <template
        slot="v-td-select"
        scope="{ row }"
    >
      <label class="v-checkbox">
        <input type="checkbox" v-model="row.v__selected">
      </label>
    </template>
  </v-table>
  <button @click="_addRow">Add new Row</button>
</div>

<script>
  import Dropdown, { DropdownItem } from 'packages/dropdown'
  import VTable from 'packages/table'

  export default {

    data () {
      return {
        formData: {
          price: '请选择价格'
        },
        tableCols: [ '__select|', 'first', 'second|第二'],
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
    },

    components: {
      Dropdown,
      DropdownItem,
      VTable
    }
  }
</script>

<style lang="scss" type="text/scss">
  .v-table {
    display: table !important;
  }
  .my-x-table {
    thead > tr {
      th:first-child {
        width: 80px;
      }
    }
  }
</style>