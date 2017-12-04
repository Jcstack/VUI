<template>
  <div class="suggest-page">
    <v-suggest-input
        :local="inputLocal"
        ref="ref_suggest"
        :on-results="_handleMovieResults"
        placeholder="Search Movies"
        v-model="inputValue"
        :suggest-dropdown-theme="`my-suggest-menu`"
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
  </div>
</template>

<script>
  import VSuggestInput from 'packages/suggest/impl_input.vue'
  import $ from 'jquery'

  export default {
    data() {
      return {
        inputLocal: false,
        inputValue: ''
      }
    },

    components: {
      VSuggestInput
    },

    created() {
      // this.pullDouban250().then(collections => {
      //   this.$refs.ref_suggest.setLocalData(collections)
      // })
    },

    methods: {
      _handleMovieResults(payload) {
        if (payload.key === '') {
          return Promise.resolve(null)
        }

        return this.searchDoubanMovies(payload.key)
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