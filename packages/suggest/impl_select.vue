<template>
  <div class="v-suggest-select"
       :class="suggestSelectTheme"
  >
    <v-popover
        placement="bottom-start"
        :popper-class="[
          'v-suggest-select-popper',
          suggestSelectTheme
        ]"
        ref="popover"
        :width="260"
    >
      <!-- popover -->
      <v-suggest-search
          :pending="loading"
          :local="local"
          :on-results="onResults"
          :has-search-input="true"
          @item-selected="_handleItemSelected"
          ref="suggest"
          placeholder="Search Results"
      ></v-suggest-search>

      <!-- trigger -->
      <v-button slot="reference"
                :color="color"
                :size="size"
                :disabled="disabled"
      >
        <span>{{ localValueBag.text }}</span>
        <v-iconfont icon="down" size="small"></v-iconfont>
      </v-button>
    </v-popover>
  </div>
</template>

<script>
  import Debug from '../../sources/utils/debug'
  import VSuggestSearch from './impl_search.vue'
  import {on, off} from '../../sources/utils/dom'
  import {createMixins} from '../../sources/utils/mixin'
  import {isString, isObject, isFunction} from '../../sources/utils/is'
  import VPopover from '../popover/impl_popper.vue'
  import VIconfont from '../icon/iconfont'
  import VButton from '../button/index.js'

  const debug = Debug('vui:suggest:select')

  function isValidValueBag(item) {
    let t = false

    if (isObject(item)) {
      return item.hasOwnProperty('text') && item.hasOwnProperty('value')
    }

    return t
  }

  export default {
    name: 'VSuggestSelect',

    mixins: [createMixins(['color', 'size', 'disabled'])],

    props: {
      valueBag: {
        type: [String, Object]
      },
      suggestSelectTheme: [String, Array, Object],
      local: Boolean,
      loading: false,
      onResults: Function,
      toValueBag: { // Bag{ text, value }
        type: Function
      }
    },

    data() {
      let localValueBag = this.valueBag

      if (isString(this.valueBag) || localValueBag == null) {
        localValueBag = {
          text: this.valueBag || '',
          value: null
        }
      }

      return {
        localValueBag: localValueBag
      }
    },

    mounted() {
      const {popover} = this.$refs
      const {elInput} = this.$refs.suggest.$refs

      popover.$on('show', e => {
        setTimeout(() => {
          elInput.focus()
        }, 16)
      })

      popover.$on('hide', e => {
      })
    },

    methods: {
      showSelectPanel() {
        const {popover} = this.$refs
        popover.doShow()
      },

      hideSelectPanel() {
        const {popover} = this.$refs
        popover.doClose()
      },

      resetSelectPanel () {
        const {suggest} = this.$refs

        suggest.resetSearchState()
      },

      _handleItemSelected(item, event) {
        if (isValidValueBag(item)) {
          const {text, value} = item
          Object.assign(this.localValueBag, {
            text, value
          })
        } else if (isFunction(this.toValueBag)) {
          Object.assign(this.localValueBag, this.toValueBag(item))
        } else {
          debug('Can not handle result item . Please provide `toValueBag(item)` prop .')
        }

        this.hideSelectPanel()
        this.resetSelectPanel()
        this.$emit('item-selected', item, event)
      },

      setLocalData(data) {
        this.$refs.suggest.setLocalData(data)
      }
    },

    components: {
      VPopover, VIconfont,
      VSuggestSearch, VButton
    }
  }
</script>
