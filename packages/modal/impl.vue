<template>
  <div class="v-modal"
       :class="{ 'is-active' : _visible }"
       v-if="!isCard"
  >
    <div class="v-modal-overlay"></div>
    <div class="v-modal-content">
      <!-- default modal content -->
      <slot></slot>
    </div>
    <button class="v-modal-close"
            @click="_handleClose"
    >
    </button>
  </div>
  <div class="v-modal"
       :class="{ 'is-active' : _visible }"
       v-else>
    <div class="v-modal-overlay"></div>
    <div class="v-modal-card">
      <header class="v-modal-card-head">
        <slot name="header">
          <div class="v-modal-card-title">{{ title }}</div>
          <button class="v-close"
                  @click="_handleClose"
          ></button>
        </slot>
      </header>
      <section class="v-modal-card-body">
        <!-- default slot content -->
        <slot></slot>
      </section>
      <footer class="v-modal-card-foot">
        <slot name="footer">
          <button class="v-btn is-primary">Save changes</button>
          <button class="v-btn is-link">Cancel</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  import is from 'is-type-of'

  export default {
    name: 'VModal',

    props: {
      title: String,
      visible: Boolean,
      isCard: {
        type: Boolean,
        'default': false
      }
    },

    data () {
      return {}
    },

    created () {
      // handle events
      this.$on('dimission', (e) => {
        if (is.string(e)) {
          switch (e) {
            case 'close':
              this.$emit('close')
              break
          }
        } else if (is.promise(e)) {
          e.then(() => {
            this.$emit('close')
          }, (err) => {
            this.$emit('error')
            console.debug(err)
          })
        }
      })
    },

    computed: {
      _visible () {
        return this.visible
      }
    },

    methods: {
      _handleClose () {
        this.$emit('dimission', 'close')
      }
    }
  }
</script>