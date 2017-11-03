# Examples

<div class="demo-box">
  <v-pagination
      :page.sync="page"
      :total="99"
      size="small"
      align="centered"
      @on-page="_handleOnPage"
      ref="pager"
  ></v-pagination>
</div>

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


<div class="demo-box">
  <v-form>
    <v-field
        label="username"
        message="我是帮助信息"
    >
      <v-input :has-counter="true"
               :maxlength="10"
               type="textarea"
               v-model="formData.note"
      ></v-input>
    </v-field>
    <v-field
        type="danger"
    >
      <v-select
          placeholder="--cities--"
          v-model="formData.tag"
      >
        <option value="666">666</option>
        <option value="888">888</option>
      </v-select>
    </v-field>
    <v-field>
      <div class="v-control">
        <v-checkbox
            v-model="formData.schoolCheck"
            name="a"
            native-value="香港中文大学">香港中文大学</v-checkbox>
        <v-checkbox
            v-model="formData.schoolCheck"
            name="b"
            native-value="香港中文大学2">香港中文大学2</v-checkbox>
      </div>
    </v-field>
    <v-field>
      <div class="v-control">
        <v-radio v-model="formData.isOwn" native-value="1">是</v-radio>
        <v-radio v-model="formData.isOwn" native-value="0">否</v-radio>
      </div>
    </v-field>
  </v-form>
</div>

<div class="demo-box">
  <h2>{{ formData.isCheap }}</h2>
  <v-switch
      color="info"
      v-model="formData.isCheap"
  >
    <strong> {{ formData.isCheap ? '' : '不' }}符合饭菜标准 </strong>
  </v-switch>
</div>

<script>
  import Dropdown, { DropdownItem } from 'packages/dropdown'
  import VTable from 'packages/table'
  import VSwitch from 'packages/switch'
  import VPagination from 'packages/pagination'
  import VForm, {
    Field as VField,
    Input as VInput,
    Select as VSelect,
    Checkbox as VCheckbox,
    Radio as VRadio
  } from 'packages/form'

  export default {

    data () {
      return {
        formData: {
          price: '请选择价格',
          isCheap: true,
          note: 'hello',
          tag: null,
          schoolCheck: [],
          isOwn: null
        },
        page: 6,
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
      },

      _handleOnPage (page) {
        console.debug('async ...', page)
        this.$refs.pager.disabled = true
        setTimeout(n => {
          this.$refs.pager.disabled = false
        }, 3000)
      }
    },

    components: {
      Dropdown,
      DropdownItem,
      VTable, VSwitch,
      VForm, VField, VInput,
      VSelect, VCheckbox, VRadio,
      VPagination
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