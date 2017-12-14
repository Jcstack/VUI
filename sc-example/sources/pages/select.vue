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
      <v-radio native-value="a" name="a" :fake-face="true" v-model="radioValue">hello</v-radio>
      <v-radio native-value="b" name="a" :fake-face="true" v-model="radioValue">hello2</v-radio>
    </div>
  </div>
</template>

<script>
  import VSelect from 'packages/form/impl_select.vue'
  import VRadio from 'packages/form/impl_radio.vue'

  export default {
    data () {
      return {
        selectValue: 'sizes',
        selectOptions: ['colors', 'sizes', 'apple'],
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
      VRadio
    }
  }
</script>