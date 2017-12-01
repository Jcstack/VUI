<template>
  <div class="v-suggest-input">
    <v-suggest
        :local="local"
        ref="suggest"
        @item-selected="_handleItemSelected"
    >
      <div class="as-input" slot="header">
        <div class="v-field">
          <input type="text" class="v-input"
                 @focus="_handleInputFocus"
                 @blur="_handleInputBlur"
                 ref="elInput"
                 :value="inputData.text"
          >
        </div>
      </div>
    </v-suggest>
  </div>
</template>

<script>
  import VSuggest from './impl.vue'
  import {on, off} from '../../sources/utils/dom'

  export default {
    name: 'VSuggestInput',

    props: {
      local: Boolean
    },

    data () {
      return {
        inputData: {
          text: '',
          value: null
        }
      }
    },

    mounted() {
      const {suggest, elInput} = this.$refs
      const keyupHandler = (e) => {
        switch (e.which) {
          case 40:
            suggest.keyDown()
            break
          case 38:
            suggest.keyUp()
            break
          case 13:
            suggest.keyEnter()
            break
        }
      }

      suggest.$watch('activated', (a, b) => {
        if (a) {
          on(elInput, 'keyup', keyupHandler)
        } else {
          off(elInput, 'keyup', keyupHandler)
        }
      })
    },

    methods: {
      setLocalData(data) {
        this.$refs.suggest.setLocalData(data)
      },

      _handleInputFocus(e) {
        const {suggest} = this.$refs

        suggest.activated = true
      },

      _handleInputBlur(e) {
        const {suggest} = this.$refs

        suggest.activated = false
      },

      _handleItemSelected (item) {
        // @todo
        if (item) {
          this.inputData.text = `[${item.id}] ${item.title}`
        }
      }
    },

    components: {
      VSuggest
    }
  }
</script>