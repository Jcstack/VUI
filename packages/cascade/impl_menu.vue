<template>
  <div class="v-cascade-menu v-dropdown-content">
    <template v-for="it in items">
      <a @click="vDispatch('VCascade', 'menu-next', it)"
         class="v-dropdown-item has-more"
         v-if="it !== '-'"
      >
        <span class="as-left" v-if="typeof it === 'object'">
          <i :class="['as-icon', it.icon]"
             v-if="it.icon"></i>
          {{ it.text }}
        </span>
        <span class="as-left" v-else>
          {{ it }}
        </span>
        <i class="as-arrow-link fa fa-angle-right"></i>
      </a>
      <span class="v-dropdown-divider" v-else></span>
    </template>
  </div>
</template>

<script>
  import Emitter from '../../sources/mixins/emitter'

  export default {
    name: 'VCascadeMenu',

    mixins: [Emitter],

    props: {
      items: {
        type: Array,
        'default': Array
      }
    }
  }
</script>