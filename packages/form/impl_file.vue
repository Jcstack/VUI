<template>
  <div class="v-control">
    <input type="file"
           class="v-file v-single-file-input"
           name="file"
           :id="labelId"
           @change="_handleFileChange"
           :accept="acceptTypes"
    >
  </div>
</template>
<script>
  export default {
    props: {
      acceptTypes: {
        type: String,
        'default': '.gif,.jpeg,.jpg,.png'
      },

      labelId: {
        type: String,
        'default': `v-file-input-${Date.now()}`
      }
    },
    data () {
      return {}
    },
    methods: {
      _handleFileChange: function (e) {
        this.$emit('on-file-change', e.target.files[0])
        e.target.value = ''
      }
    }
  }
</script>
