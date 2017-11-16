<template>
  <div class="v-cascade-panel">
    <div class="as-head"
         v-if="title != null"
    >
      <a v-if="level >0"
         @click="vDispatch('VCascade', 'panel-prev')"
      >
        <i class="as-icon fa fa-angle-left"></i>
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
    }
  }
</script>
