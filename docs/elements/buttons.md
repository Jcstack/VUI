# Buttons

> hi , i am buttons .

---

> that is awesome .

<div class="demo-box">
  <button class="v-btn">
    default button
  </button>
  <button class="v-btn is-light" :class="{ 'is-loading': isLoading }">
    hello body
  </button>

  <button class="v-btn is-primary is-focused">
    auto focused
  </button>

  <button class="v-btn is-primary is-outline">
    块状按钮
  </button>

  <a class="v-btn is-danger" @click="_handleClick">
    Anchor
  </a>

  <a href="javascript:;" class="v-btn is-link" @click="_handleClick">
    Link
  </a>
</div>


<div class="demo-box">
  <a class="v-btn is-white">White</a>
  <a class="v-btn is-light">Light</a>
  <a class="v-btn is-dark">Dark</a>
  <a class="v-btn is-black is-medium">Submit</a>
  <a class="v-btn is-link">Link</a>
</div>

## Modifiers

可用的修饰符

### is-danger

<script>
  export default {
    data () {
      return {
        isLoading: false,
      }
    },

    methods: {
      _handleClick () {
        this.isLoading = !this.isLoading
      }
    }
  }
</script>