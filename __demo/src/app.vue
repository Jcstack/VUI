<template>
  <div class="container">
    <div class="row">
      <!-- Slide Range -->
      <sav-range v-model="percentVal"></sav-range>
    </div>
    <h3>
      {{ percentVal }}%
    </h3>
    <div class="row">
      <div class="col-xs-6 offset-xs-4">
        <sav-range v-model="percentVal2"
                 :vertical="true"
        ></sav-range>
      </div>
    </div>
    <h2>
      {{ percentVal2 }}%
    </h2>
  </div>
</template>

<script>
  import SavRange from '../../src/components/SavSlider2.vue'

  export default {
    name: 'app',

    data: function () {
      return {
        percentVal: 200,
        percentVal2: 35
      }
    },

    components: {
      SavRange
    }
  };
</script>
