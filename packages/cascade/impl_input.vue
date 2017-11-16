<template>
  <div class="v-cascade">
    <slot :click-handler="_handleTriggerClick"></slot>
    <transition name="v-ani-menu">
      <panel ref="popper"
             v-show="visible"
             :content="title"
      ></panel>
    </transition>
  </div>
</template>

<script>
  import PopperMixin from '../../sources/mixins/popper'
  import Panel from './impl_panel.vue'

  export default {
    name: 'VCascadeInput',

    mixins: [PopperMixin],

    data () {
      return {
        visible: false
      }
    },

    props: {
      title: String,
      offset: {
        type: [Number, String],
        'default': 0
      },
      placement: {
        type: String,
        'default': 'bottom-start'
      }
    },

    beforeCreate () {
//      debugger
    },

    created () {
      console.debug('Hi, ', this.title)
    },

    mounted () {
      this.referenceElm = this.$parent.$refs.trigger
      this.popperElm = this.$refs.popper.$el

      // setup popper
      this.updatePopper()
    },

    watch: {
      'visible' (a) {
        if (a === true) {
          window.document.addEventListener('click', this._onGlobalDismissible, false)
        } else {
          window.document.removeEventListener('click', this._onGlobalDismissible, false)
        }
      }
    },

    methods: {
      _onGlobalDismissible (e) {
        if (e.target === this.referenceElm || this.referenceElm.contains(e.target)) {
          return
        }

        this.visible = false
      },

      _handleTriggerClick () {
        this.visible = !this.visible
      }
    },

    beforeDestroy () {},

    components: {
      Panel
    }
  }
</script>

<style lang="scss" type="text/scss">

</style>