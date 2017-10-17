# 弹框 Modal

<div class="demo-box">
  <button class="v-btn"
          @click="modalVisible = !modalVisible"
  >show Modal
  </button>
  <button class="v-btn is-primary"
          @click="modalVisible2 = !modalVisible2"
  >show Card Modal
  </button>
</div>

<div class="v-modal" :class="{ 'is-active' : modalVisible }">
  <div class="v-modal-overlay"></div>
  <div class="v-modal-content is-large">
    <div class="v-box">
      <h2>
        hello body
      </h2>
    </div>
  </div>
  <button class="v-modal-close is-large" aria-label="close"
          @click="modalVisible = !modalVisible"
  >
  </button>
</div>

<div class="v-modal" :class="{ 'is-active' : modalVisible2 }">
  <div class="v-modal-overlay"></div>
  <div class="v-modal-card">
    <header class="v-modal-card-head">
      <p class="v-modal-card-title">Modal title</p>
      <button class="v-close" aria-label="close"></button>
    </header>
    <section class="v-modal-card-body">
      <!-- Content ... -->
      <h2>
        card content
      </h2>
    </section>
    <footer class="v-modal-card-foot">
      <button class="v-btn is-primary">Save changes</button>
      <button class="v-btn is-link">Cancel</button>
    </footer>
  </div>
</div>

<script>
  export default {
    data () {
      return {
        modalVisible: false,
        modalVisible2: false
      }
    }
  }
</script>