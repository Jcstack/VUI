<template>
  <div class="v-progress"
       v-if="type !== 'raw'"
       :class="[colorModifier, stateModifier]"
  >
    <!-- line -->
    <div class="v-progress-line-bar" v-if="type === 'line'">
      <div class="v-progress-line-bar-outer" :style="{height: strokeWidth + 'px'}">
        <div class="v-progress-line-bar-value" :style="{ width: `${this.valuePercentage}%`}"></div>
        <slot></slot>
      </div>
    </div>
    <!-- circle -->
    <div class="v-progress-circle-bar"
         :style="{height: width + 'px', width: width + 'px'}"
         v-else>
      <svg viewBox="0 0 100 100">
        <path class="v-progress-circle-track" :d="trackPath" stroke="#e5e9f2" :stroke-width="relativeStrokeWidth"
              fill="none"></path>
        <path class="v-progress-circle-path" :d="trackPath" stroke-linecap="round" :stroke="strokeColor"
              :stroke-width="relativeStrokeWidth" fill="none" :style="circlePathStyle"></path>
      </svg>
      <slot>
        <span class="inner-text">{{ valuePercentage }}%</span>
      </slot>
    </div>
  </div>
  <progress
      class="v-progress"
      :class="[colorModifier, sizeModifier, stateModifier]"
      :value="value"
      :max="max"
      v-else></progress>
</template>

<script>
  import { elementMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VProgress',

    mixins: [elementMixins],

    props: {
      type: {
        type: String,
        'default': 'line',
        validator: val => ['raw', 'line', 'circle'].indexOf(val) > -1
      },

      value: {
        type: Number,
        'default': 0,
        required: true
      },

      max: {
        type: Number,
        'default': 100
      },

      strokeWidth: {
        type: Number,
        'default': 6
      },

      strokeColor: {
        type: String,
        'default': '#20a0ff'
      },

      width: {
        type: Number,
        'default': 128
      }
    },

    computed: {
      valuePercentage () {
        let percentage = this.value / this.max

        if (percentage > 1) {
          percentage = 1
        } else if (percentage < 0) {
          percentage = 0
        }

        return parseInt(percentage * 100)
      },

      isCircle () {
        return this.type === 'circle'
      },

      relativeStrokeWidth () {
        if (!this.isCircle) return 0

        return (this.strokeWidth / this.width * 100).toFixed(1)
      },

      trackPath () {
        if (!this.isCircle) return ''

        let radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10)

        return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
      },

      perimeter () {
        if (!this.isCircle) return 0

        let radius = 50 - parseFloat(this.relativeStrokeWidth) / 2
        return 2 * Math.PI * radius
      },

      circlePathStyle () {
        if (!this.isCircle) return null

        let perimeter = this.perimeter
        return {
          strokeDasharray: `${perimeter}px,${perimeter}px`,
          strokeDashoffset: (1 - this.valuePercentage / 100) * perimeter + 'px',
          transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
      }
    }
  }
</script>