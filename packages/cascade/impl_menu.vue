<template>
  <div class="v-cascade-menu v-dropdown-content">
    <template v-for="it in items">
      <a @click="vDispatch('VCascade', 'menu-next', it)"
         class="v-dropdown-item has-more"
         v-if="it !== '-'"
      >
        <div class="as-left" v-if="typeof it === 'object'">
          <span class="has-icon" v-if="it.icon">
            <i :class="[it.icon]"></i>
          </span>
          {{ it.text }}
        </div>
        <span class="as-left" v-else>
          {{ it }}
        </span>
        <iconfont class="as-arrow-link"
                  icon="right"
        ></iconfont>
      </a>
      <span class="v-dropdown-divider" v-else></span>
    </template>
  </div>
</template>

<script>
  import Iconfont from '../icon/iconfont.js'
  import Emitter from '../../sources/mixins/emitter'

  export default {
    name: 'VCascadeMenu',

    mixins: [Emitter],

    props: {
      items: {
        type: Array,
        'default': Array
      }
    },

    components: {
      Iconfont
    }
  }
</script>