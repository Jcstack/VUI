<template>
  <div class="page-cascade">
    <div class="v-box">
      <!--<v-icon-->
      <!--icon="fa fa-twitter fa-2x"-->
      <!--color="primary"-->
      <!--size="large"-->
      <!--&gt;</v-icon>-->

      <v-button
          color="danger"
          class="helloxx"
          size="small"
      >
        <v-iconfont
            icon="delete"
        ></v-iconfont>
      </v-button>
    </div>
    <div class="v-box">
      <v-cascade
          :panels="panels"
          @panel-enter="_onPanelEnter"
          class="my-cascade"
          ref="cascade"
      >

        <template slot="panel-b"
                  slot-scope="{ state, item}"
        >
          <p class="v-notification" style="flex: 1">
            <code>{{ state }}</code> <br> <br>
            <button class="v-btn is-primary"
                    @click="$refs.cascade.next({
                      query: 'i am so sorry'
                    })"
            >{{ state.inState ? state.inState.query : '--' }}
            </button>
          </p>
        </template>

        <template slot="panel-c">
          <div class="c-content">
            hello
          </div>
        </template>
      </v-cascade>
    </div>
  </div>
</template>

<script>
  import VCascade from 'packages/cascade/impl.vue'
  import VIcon from 'packages/icon/impl.vue'
  import VIconfont from 'packages/icon/iconfont'
  import VButton from 'packages/button/button'

  export default {
    data () {
      return {
        panels: [
          {
            id: 'a',
            items: ['淘宝 Taobao.com', '京东 JD.com', '-',
              {
                text: '谷歌 Google.com',
                icon: 'fa fa-google'
              },
              {
                text: 'VUI Github.com',
                icon: 'fa fa-github'
              }]
          },
          {
            id: 'b',
            name: 'Game'
          },
          {
            id: 'c',
            name: 'Game2',
            items: []
          }
        ]
      }
    },

    methods: {
      _onPanelEnter (item, inState, accept) {
//        debugger
        if (item.id === 'c') {

          setTimeout(() => {
            item.items.push(inState && inState.query)
          }, 3000)

          return
        }

        accept && accept({
          inState,
          data: 'inject data to panel'
        })
      }
    },

    components: {
      VCascade, VIcon,
      VIconfont, VButton
    }
  }
</script>

<style lang="scss" type="text/scss">
  .page-cascade {
    padding-top: 100px;
    margin: 0 auto;
    width: 360px;
  }

  .my-cascade {
    margin: -1.25rem;
  }
</style>