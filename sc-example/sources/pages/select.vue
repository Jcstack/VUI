<template>
  <div class="page-sc-example">
    <v-select placeholder="--check one--"
              :fake-face="true"
              v-model="selectValue"
              @option-command="_handleOptionCommand"
    >
      <option :value="el" v-for="el in selectOptions">{{ el }}</option>
      <option value="__divider" hidden></option>
      <option value="__reset" hidden>Reset</option>
      <option value="__toGoogle" hidden>Go to Google</option>
    </v-select>

    <hr>
    <div class="v-control">
      <v-radio native-value="a" native-name="a" :fake-face="true" v-model="radioValue" >hello</v-radio>
      <v-radio native-value="b" native-name="a" :fake-face="true" v-model="radioValue">hello2</v-radio>
    </div>

    <div class="v-control">
      <v-checkbox native-value="666" native-name="xbs" v-model="checkValues" :fake-face="true">数理逻辑</v-checkbox>
      <v-checkbox native-value="6696" native-name="xbss" v-model="checkValues"
                  :fake-face="true"
                  :indeterminate="true"
      >check me</v-checkbox>
    </div>
  </div>
</template>

<script>
  import VSelect from 'packages/form/impl_select.vue'
  import VRadio from 'packages/form/impl_radio.vue'
  import VCheckbox from 'packages/form/impl_checkbox.vue'

  export default {
    data () {
      return {
        selectValue: 'sizes',
        selectOptions: ['colors', 'sizes', 'apple'],
        checkValues: [],
        radioValue: 'b'
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
      VSelect,
      VRadio,
      VCheckbox
    }
  }
</script>