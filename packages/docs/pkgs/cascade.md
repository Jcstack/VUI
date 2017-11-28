# Cascade 级联面板

<div class="demo-box">
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
          <strong>这是一个不带菜单の面板</strong> <br>
          <code>{{ state }}</code> <br> <br>
          <button class="v-btn is-primary"
                  @click="$refs.cascade.next({
                      query: 'i am so sorry'
                    })"
          > Go to Next manually .
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

```html
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
        <strong>这是一个不带菜单の面板</strong>
        <code>{{ state }}</code> <br> <br>
        <button class="v-btn is-primary"
                @click="$refs.cascade.next({
                      query: 'i am so sorry'
                    })"
        >{{ state.inState ? state.inState.params: '--' }}
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
<script>
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
    }
  }
</script>
```

<script>
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
        // debugger
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
    }
  }
</script>

<div class="demo-box">
<component-doc-table>
<div slot="props">

# v-cascade
Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
panels     | 条目数据        | Array    | [`required { id, name, [items] }`]      | /
pending    | 是否正在整备数据 | Boolean  | /      | /
</div>
<div slot="slots">

Name       | Description    | Scoped | Default
----       | -------------- | ------ | -------
panel-`[ref-id]`| 对应面板内容(非`menu`模式下有效)| { `state`, `item` }      | /
</div>
<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
panel-enter| 进入面板              | [`inItemData`, `stateData`, `acceptCallback`]
panel-leave| 进入面板              | [`outItemData`, `stateData`]
</div>
</component-doc-table>
</div>

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
