<template>
  <div class="page-sc-example">
    <v-select placeholder="--check one--"
              :fake-face="true"
              v-model="selectValue"
              @option-command="_handleOptionCommand"
    >
      <option value="a">colors</option>
      <option value="b">sizes</option>
      <option value="__divider" hidden></option>
      <option value="__reset" hidden>Reset</option>
      <option value="__toGoogle" hidden>Go to Google</option>
    </v-select>
  </div>
</template>

<script>
  import VSelect from 'packages/form/impl_select.vue'
  export default {
    data () {
      return {
        selectValue: 'b'
      }
    },

    methods: {
      _handleOptionCommand (v, select) {
        if (v === 'toGoogle') {
          window.open('http://google.com')
        }
      }
    },

    components: {
      VSelect
    }
  }
</script>