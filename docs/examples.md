# Components Demo Page

<div class="demo-box">
  <template v-for="el in ['primary', 'danger', 'info', 'success', 'black']">
    <v-btn :color="el"
           size="small"
           v-tip.top="`this is a sav tip`"
           :is-loading="switcher"
           @click.native="switcher = !switcher"
    >
      click me
    </v-btn>
  </template>

  <div style="padding-top: 30px;">
    <popover-popper
        title="Title"
        content="hello body 我的世界 我快递费蓝思科技烦死你dffffs顶顶顶"
        width="200"
    >
      <button class="v-btn" slot="reference">Toggle Popover</button>
    </popover-popper>
  </div>
</div>

<div class="demo-box">

  <nav class="v-breadcrumb">
    <ul>
      <li><a href="#">Vui</a></li>
      <li><a href="#">
        <span class="has-icon is-small">
          <i class="fa fa-github"></i>
        </span>
        Components
      </a></li>
      <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
    </ul>
  </nav>

  <div class="v-cols">
    <div class="v-col is-8">
      <div class="v-field is-grouped">
        <div class="v-control is-expanded">
          <input type="text" class="v-input is-large">
        </div>
        <div class="v-control">
          <button class="v-btn is-info is-large">
            <span class="has-icon">
              <i class="fa fa-github"></i>
            </span>
            <span>
              Click Me
            </span>
          </button>
        </div>
      </div>
      <div class="v-field">
        <div class="v-control">
          <input type="text" class="v-input is-danger" placeholder="....">
        </div>
      </div>
    </div>
    <div class="v-col">
      this is right
    </div>
  </div>
</div>

<div class="demo-box" pre>
  <div class="v-box">
    <div class="v-media">
      <figure class="v-media-left">
        <p class="v-image is-48x48"></p>
      </figure>
      <div class="v-media-content">
        <div class="v-content">
          <p>
            <strong>Sean Brown</strong>
            <br>
            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et
            netus
            et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
            <br>
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
        <div class="v-media">
          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
        </div>
        <div class="v-media">
          Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod.
          Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
        </div>
      </div>
    </div>
  </div>
</div>

<div class="demo-box">

  # Here is Content

  <div class="v-box">
    <div class="v-content">
      <h1>我的快递被人偷了...</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
        nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
        erat vel, interdum mattis neque.</p>
      <h2>Second level</h2>
      <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi,
        sit
        amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
        rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
    </div>
  </div>
</div>

<div class="demo-box">
  <table class="v-table" style="width: 100%">
    <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Three</td>
      <td>Four</td>
    </tr>
    <tr>
      <td>Five</td>
      <td>Six</td>
    </tr>
    <tr>
      <td>Seven</td>
      <td>Eight</td>
    </tr>
    <tr>
      <td>Nine</td>
      <td>Ten</td>
    </tr>
    <tr>
      <td>Eleven</td>
      <td>Twelve</td>
    </tr>
    </tbody>
  </table>
</div>

<script>
  import Vue from 'vue'
  import VBtn from 'packages/button'
  import TooltipInstaller from 'packages/tooltip'
  import { PopoverPopper } from 'packages/popover'

  Vue.use(TooltipInstaller)

  export default {
    data () {
      return {
        switcher: false
      }
    },

    watch: {
      'switcher' (a) {
        a && setTimeout(() => {
          this.switcher = false
        }, 2000)
      }
    },

    components: {
      VBtn,
      PopoverPopper
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .v-btn {
    margin-right: 1rem;
  }

  .v-breadcrumb {
    a {
      color: #7a7a7a;
    }
  }

  .v-media {
    &-left {
      margin-right: 1rem;
      .v-image {
        &.is-48x48 {
          width: 48px;
          height: 48px;
          background-color: #eee8d5;
        }
      }
    }
    p {
      margin: 0;
      line-height: 1.4rem;
    }
  }

  .v-content {
    p, ul, ol {
      line-height: inherit;
      margin: inherit;
    }

    ul, ol {
      margin-left: 2em;
      margin-top: 1em;
    }
  }
</style>
