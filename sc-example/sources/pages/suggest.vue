<template>
  <div class="suggest-page">
    <v-suggest-input
        :local="inputLocal"
        ref="ref_suggest"
        :on-results="_handleMovieResults"
        placeholder="Search Movies"
        v-model="inputValue"
        :to-value-string="_itemToValueString"
        :suggest-input-theme="`my-suggest-menu`"
        :loading="inputLoading"
        @item-selected="_handleItemSelected"
        :disabled="inputDisabled"
    >
      <!--<template slot="result-item"-->
                <!--slot-scope="{ item, index}"-->
      <!--&gt;-->
        <!--<a href="javascript:;" class="as-link-item">-->
          <!--<div class="v-cols">-->
            <!--<span class="v-col">-->
            <!--<img :src="item.cover" alt="">-->
          <!--</span>-->
            <!--<span class="v-col">-->
            <!--{{index + 1}} . {{ item.title }}-->
          <!--</span>-->
          <!--</div>-->
        <!--</a>-->
      <!--</template>-->
    </v-suggest-input>

    <hr>
    <!-- suggest popover -->
    <v-suggest-select
        :local="false"
        ref="ref_suggest2"
        :suggest-select-theme="`my-suggest-select`"
        value-bag="Select Douban Movies"
        :on-results="_handleMovieResults"
        :to-value-bag="_handleItemToValueBag"
    ></v-suggest-select>
  </div>
</template>

<script>
  import VSuggestInput from 'packages/suggest/impl_input.vue'
  import VSuggestSelect from 'packages/suggest/impl_select.vue'
  import $ from 'jquery'

  export default {
    data() {
      return {
        inputLocal: false,
        inputValue: '',
        inputLoading: false,
        inputDisabled: false
      }
    },

    components: {
      VSuggestInput,
      VSuggestSelect
    },

    created() {
      // this.pullDouban250().then(collections => {
      //   this.$refs.ref_suggest2.setLocalData(collections)
      // }).catch(e => {
      // })
    },

    methods: {
      _handleItemToValueBag (item) {
        return {
          text: item.original_title,
          value: item.id
        }
      },

      _itemToValueString (item) {
        return item.original_title
      },

      _handleItemSelected (item) {
        console.log(item)
      },

      _handleMovieResults(payload) {
        if (payload.key === '') {
          return Promise.resolve(null)
        }

        this.inputLoading = true

        return this.searchDoubanMovies(payload.key).then(results => {
          if (Array.isArray(results)) {
            results.__key = payload.key
          }

          this.inputLoading = false

          return results
        })
      },

      pullDouban250() {
        return new Promise((resolve, reject) => {
          const lkey = '__top250'
          if (localStorage.key(lkey)) {
            return resolve(JSON.parse(localStorage.getItem(lkey)))
          }

          $.getJSON('http://local.www/_d/douban/top250.json').then(res => {
            if (res && res.subjects) {
              resolve(res = res.subjects.map(function (n) {
                return {
                  id: n.id,
                  original_title: n.original_title,
                  title: n.title,
                  cover: n.images && n.images.small,
                  year: n.year
                }
              }))
              localStorage.setItem(lkey, JSON.stringify(res))
            } else {
              reject()
            }
          })
        })
      },

      searchDoubanMovies(key) {
        return new Promise((resolve, reject) => {
          $.getJSON('http://local.www/_d/douban/search.json?q=' + encodeURIComponent(key)).then(res => {
            if (res && res.subjects) {
              resolve(res = res.subjects.map(function (n) {
                return {
                  id: n.id,
                  original_title: n.original_title,
                  title: n.title,
                  cover: n.images && n.images.small,
                  year: n.year
                }
              }))
            } else {
              reject()
            }
          })
        })
      }
    }
  }
</script>

<style>
  .suggest-page {
    width: 60vw;
    margin: 0 auto;
    /*width: 280px;*/
    /*border-radius: 4px;*/
    /*margin: 50px auto;*/
    /*background-color: #ffffff;*/
    /*padding: 5px;*/
    /*box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);*/
    /*overflow: auto;*/
  }

  .my-suggest-menu .v-dropdown-content {
    width:  380px;
  }
</style>