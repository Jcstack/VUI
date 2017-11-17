<template>
  <div class="v-cascade-panel">
    <div class="as-head"
         v-if="title != null"
    >
      <a v-if="level >0"
         @click="vDispatch('VCascade', 'panel-prev')"
      >
        <iconfont icon="left"></iconfont>
        {{ title }}
      </a>
      <span v-else>
        {{ title }}
      </span>
    </div>
    <div class="as-body">
      <slot>
        <strong>
          {{ content }}
        </strong>
      </slot>
    </div>
  </div>
</template>

<script>
  import Iconfont from '../icon/iconfont.js'
  import Emitter from '../../sources/mixins/emitter'

  export default {
    name: 'VCascadePanel',

    mixins: [Emitter],

    props: {
      content: String,
      title: String,
      level: {
        type: Number,
        'default': 0
      }
    },

    components: {
      Iconfont
    }
  }
</script>
