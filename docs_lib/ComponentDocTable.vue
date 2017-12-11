<template>
  <div class="vue-component-doc-table">
    <!-- tabs -->
    <div class="v-tabs">
      <ul>
        <li v-for="el in localTabs" :class="{ 'is-active': el === localActive }">
          <a href="javascript:;"
             @click="localActive = el"
          >{{ el }}</a>
        </li>
      </ul>
    </div>
    <!-- panels -->
    <div class="panels">
      <template v-for="el in localTabs">
        <div class="panels-inner" v-if="el === localActive">
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

    props: {
      tabs: {
        type: String,
        'default': 'props,events,slots,methods'
      },

      active: String
    },

    data () {
      return {
        localActive: this.active || 'props'
      }
    },

    computed: {
      localTabs () {
        let tabs = this.tabs.split(',')

        return tabs.map(n => n.trim())
      }
    }

  }
</script>

<style lang="scss" type="text/scss">
  $theme-color: #e96900;
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