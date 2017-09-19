<template>
  <div id="vui-container" class="sav-container">
    <!-- layout -->
    <section class="sav-section">
      <div class="sav-flex-block">
        <div class="as-item">
          hello item
        </div>
        <div class="as-item">
          hello item
        </div>
        <div class="as-item" style="padding: 0.75rem 0">
          <button
              class="sav-btn is-success"
              :class="{ 'is-loading': loading }"
              @click="loading = !loading"
          >button default</button>
        </div>
      </div>
      <!-- block -->
      <div class="sav-flex-block">
        <div class="as-item">
          <div class="sav-form is-vertical">
            <div class="sav-field">
              <label class="sav-label">Name</label>
              <input/>
            </div>
            <div class="sav-field">
              <label class="sav-label">Name</label>
              <input/>
            </div>
          </div>
        </div>
      </div>
      <!-- components -->
      <div class="sav-flex-block">
        <div class="sav-message is-warn">
          <div class="message-tip">
            hello, this is a message .
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import 'root/scss/sav-vui.scss'

  export default {
    data () {
      return {
        loading: false
      }
    }
  }
</script>