# Examples

<div class="demo-box">
  <dropdown position="up" v-model="formData.price">
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

<script>
  import Dropdown, { DropdownItem } from 'packages/dropdown'


  export default {

    data () {
      return {
        formData: {
          price: '请选择价格'
        }
      }
    },

    components: {
      Dropdown,
      DropdownItem
    }
  }
</script>