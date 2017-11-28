<template>
  <div class="v-cascade"
       :class="{ 'is-pending': pending }"
  >
    <div class="v-cascade-wrapper">
      <context-panel
         v-for="(el, $index) in panels"
         :key="el.id"
         :class="[
           'v-seamless-slide-item',
           _slideTransitionModeCls($index),
           _slideActiveModeCls($index)
           ]"
         :level="$index"
         :title="el.name"
         v-collect-slide-item="$index">
        <template v-if="Array.isArray(el.items)">
          <context-menu :items="el.items"></context-menu>
        </template>
        <template v-else>
          <slot :name="`panel-${el.id}`.toLowerCase()"
                :state="$data[`panel-state-${el.id}`.toLowerCase()]"
                :item="el"
          ></slot>
        </template>
      </context-panel>
    </div>
  </div>
</template>

<script>
  import mixinSeamlessSlide from '../common/mixinSeamlessSlide'
  import ContextPanel from './impl_panel.vue'
  import ContextMenu from './impl_menu.vue'

  export default {
    name: 'VCascade',

    mixins: [mixinSeamlessSlide],

    props: {
      panels: {
        type: Array, // [{ id, name, [items] }]
        'default': Array,
        required: true
      },

      pending: {
        type: Boolean,
        'default': false // indicate data state
      }
    },

    data () {
      let data = {
        activePanelIndex: 0,
        isSliding: false
      }

      // handle panel item state
      this.panels.forEach(n => {
        data[this._resolvePanelStateKey(n)] = {
          inState: null,
          data: null,
          outState: null
        }
      })

      return data
    },

    created () {
      this.$on('panel-prev', (e) => {
        this.prev(e || {})
      })

      this.$on('menu-next', (e) => {
        this.next({
          params: e
        })
      })

      this.$on('apply-panel-size', (e) => {
        console.warn('@implementation :apply-panel-size for animation of container .')
      })
    },

    watch: {
      'activePanelIndex' (a, b) {
        this.slideActiveIndex = a
      }
    },

    methods: {
      _resolvePanelStateKey (item) {
        return `panel-state-${item.id}`.toLowerCase()
      },

      next (state = {}) {
        const vm = this
        const len = this.panels.length
        const to = this.activePanelIndex + 1

        if (to >= len) {
          console.warn('[VCascade] there is no next panel.')
          return
        }

        const outItem = this.panels[this.activePanelIndex]
        const inItem = this.panels[to]

        function accept (res) {
          const key = vm._resolvePanelStateKey(inItem)

          if (res) {
            vm[key] = Object.assign({}, vm[key], res)
          } else {
            vm[key] = null
          }
        }

        state.__mode = 'next'

        this.$emit('panel-enter', inItem, state, accept)
        this.$emit('panel-leave', outItem, state)
        this.activePanelIndex = to
      },

      prev (state = {}) {
        const to = this.activePanelIndex - 1

        if (to < 0) {
          console.warn('[VCascade] there is no previous panel.')
          return
        }

        const outItem = this.panels[this.activePanelIndex]
        const inItem = this.panels[to]

        state.__mode = 'prev'

        this.$emit('panel-enter', inItem, state)
        this.$emit('panel-leave', outItem, state)
        this.activePanelIndex = to
      }
    },

    computed: {
      activePanelId () {
        try {
          return this.panels[this.activePanelIndex].id
        } catch (e) {
          console.warn(e)
          return false
        }
      }
    },

    components: {
      ContextPanel,
      ContextMenu
    }
  }
</script>

<style lang="scss" type="text/scss">
  .v-cascade {
    &-wrapper {
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }
  }
</style>