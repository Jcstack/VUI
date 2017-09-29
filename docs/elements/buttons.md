# Buttons

> hi , i am buttons .

<div class="demo-box">
  <button class="v-btn">
    default button
  </button>
  <button class="v-btn is-light" :class="{ 'is-loading': isLoading }">
    hello body
  </button>

  <button class="v-btn is-primary is-outline">
    块状按钮
  </button>

  <a href="javascript:;" class="v-btn is-warning" @click="_handleClick">
    大道无为
  </a>

  <a href="javascript:;" class="v-btn is-link" @click="_handleClick">
    Link
  </a>
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