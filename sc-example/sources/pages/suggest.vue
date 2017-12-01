<template>
  <div class="suggest-page">
    <v-suggest-input
        :local="true"
        ref="ref_suggest"
    ></v-suggest-input>
  </div>
</template>

<script>
  import VSuggestInput from 'packages/suggest/impl_input.vue'
  import $ from 'jquery';

  export default {
    components: {
      VSuggestInput
    },

    created() {
      this.pullDouban250().then(collections => {
        this.$refs.ref_suggest.setLocalData(collections)
      })
    },

    methods: {
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
      }
    }
  }
</script>

<style>
  .suggest-page {
    width: 280px;
    height: 320px;
    border-radius: 4px;
    margin: 50px auto;
    background-color: #ffffff;
    padding: 5px;
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
    overflow: auto;
  }
</style>