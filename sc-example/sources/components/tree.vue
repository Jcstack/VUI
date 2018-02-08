<template>
  <div class="x-tree">
    <div class="root">
      <h2>{{ root.name }}</h2>
      <tree-menu :nodes="root.children" class="sub-menu"></tree-menu>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  const TreeMenu = {
    props: {
      nodes: Array
    },

    data () {
      return {
        expand: false
      }
    },

    template: `
      <div class="bl">
        <a class="ar" @click="expand = !expand">*</a>
        <ul class="er" v-if="expand">
          <li v-for="node in nodes">
          {{ node.name }}
            <template v-if="Array.isArray(node.children)">
              <tree-menu :nodes="node.children" class="sub-menu"></tree-menu>
            </template>
          </li>
        </ul>
      </div>
    `
  }

  Vue.component('TreeMenu', TreeMenu)

  export default {
    name: 'XTree',

    props: {
      root: Object
    },

    components: {
      TreeMenu
    }
  }
</script>

<style lang="scss" type="text/scss">
  .sub-menu {
    padding-left: 20px;
  }

  .bl {
    display: flex;
    .ar {
      width: 20px;
      height: 20px;
    }
    .er {
      background-color: #ccc;
    }
  }
</style>
