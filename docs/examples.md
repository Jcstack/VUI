# Components Demo Page

<div class="demo-box">
  <template v-for="el in ['primary', 'danger', 'info', 'success', 'black']">
    <v-btn :color-modifier="el"
           size-modifier="small"
           :is-loading="switcher"
           @click.native="switcher = !switcher"
    >
      click me
    </v-btn>
  </template>
</div>

<div class="demo-box">
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


<script>
  import VBtn from 'packages/button'

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
      VBtn
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .v-btn {
    margin-right: 1rem;
  }
</style>