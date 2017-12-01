<template>
  <div class="main-body">
    <h1>project-vue</h1>
    <div>
      <div class="v-badge">
        <span class="has-badge-count">
          98
        </span>
      </div>
      <p>
        <span class="v-tags">
          <a href="javascript:;" class="v-tag is-rounded">
            hello
          </a>
          <span class="v-tag is-danger">
            world
          </span>
          <span class="v-tag is-primary">
            world
          </span>
        </span>
      </p>
    </div>
    <!-- carousel demo -->
    <!--<v-carousel :items="carouselItems">-->
    <!--<div slot="item-body" slot-scope="props">-->
    <!--<strong>{{ props.index + 1 }}</strong>-->
    <!--<p>{{ props.item }}</p>-->
    <!--</div>-->
    <!--</v-carousel>-->

    <div class="demo-box" style="padding: 20px 0;">
      <!-- cascade demo -->
      <v-cascade title="我是一个Fake按钮">
        <button class="v-btn is-default"
                ref="trigger"
                slot-scope="entry"
                @click="entry.clickHandler"
        >Hover Me</button>
      </v-cascade>
    </div>
    <div class="demo-box">
      <v-progress :value="sliderValue"
                  stroke-color="red"
                  type="circle"
                  class="my-progress"
      >
      </v-progress>
      <div class="demo-box">
        <v-range-slider v-model="sliderValue"
                        :step="4"
                        :vertical="false"
                        color="info"
        ></v-range-slider>
        <strong>
          {{ sliderValue }}
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
  import VEmbed from 'packages/embed'
  import VCarousel from 'packages/carousel'
  import VCascade from 'packages/cascade'
  import VProgress from 'packages/progress'
  import VRangeSlider from 'packages/slider'

  export default {
    name: 'app',

    data () {
      return {
        carouselItems: [1, 2, 3, 4],
        sliderValue: 10
      }
    },

    components: {
      VEmbed,
      VCarousel, VCascade,
      VProgress,
      VRangeSlider
    }
  }
</script>

<style lang="scss" type="text/scss">
  .v-carousel {
    margin-top: 20px;
    width: 100%;
  }

  .v-carousel-item {
    background-color: rgba(10, 10, 10, 0.64);
    .item-inner {
      min-height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  $color-list: red, blue, orange, green, black;

  @each $color in $color-list {
    $index: index($color-list, $color) - 1;
    .color-#{$index} strong {
      color: $color;
      font-size: 60px;
    }
  }
  .my-progress {
    width: 300px;
  }
</style>
