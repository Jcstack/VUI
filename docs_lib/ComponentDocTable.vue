<template>
  <div class="vue-component-doc-table">
    <!-- tabs -->
    <div class="v-tabs">
      <ul>
        <li v-for="el in tabs" :class="{ 'is-active': el === active }">
          <a href="javascript:;"
             @click="active = el"
          >{{ el }}</a>
        </li>
      </ul>
    </div>
    <!-- panels -->
    <div class="panels">
      <template v-for="el in tabs">
        <div class="panels-inner" v-if="el === active">
          <slot :name="el">
            <p>
              没有对应支持 :)
            </p>
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueComponentDocTable',

    data () {
      return {
        active: 'props',
        tabs: ['props', 'events', 'slots', 'methods']
      }
    },

  }
</script>

<style lang="scss">
  $theme-color: orange;
  .vue-component-doc-table {
    table {
      display: table;
      td, th {
        padding: 10px 15px;
        text-align: left;
      }
      thead {
        tr {
          border-top: none;
        }
        th {
          border: none;
        }
      }
    }

    > .v-tabs {
      margin-bottom: 0;
      a {
        text-decoration: none;
        &:hover {
          border-bottom-color: #7a7a7a;
        }
      }

      .is-active {
        a {
          border-bottom-color: $theme-color;
          color: $theme-color;
        }
      }
    }

    .panels {
      min-height: 300px;

      h2 {
        margin: 10px 0 0.8rem;
      }
    }
  }
</style>