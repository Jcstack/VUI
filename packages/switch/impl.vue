<template>
  <label class="v-switch"
         :class="[sizeModifier, disabledModifier]"
         ref="label"
         :disabled="disabled"
         :tabindex="disabled ? false : 0"
         @keydown.prevent.enter.space="$refs.label.click()"
         @mousedown="isMouseDown = true"
         @mouseup="isMouseDown = false"
         @mouseout="isMouseDown = false"
         @blur="isMouseDown = false">
    <input v-model="newValue"
           type="checkbox"
           :name="name"
           :disabled="disabled"
           :true-value="trueValue"
           :false-value="falseValue">
    <span class="check" :class="[{ 'is-elastic': isMouseDown }, colorModifier]"></span>
    <span class="control-label"><slot></slot></span>
  </label>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VSwitch',

    mixins: [createMixins(['size', 'disabled', 'color'])],

    props: {
      name: String,
      value: {},
      nativeValue: {},
      trueValue: {
        type: [String, Number, Boolean, Object, Array, Symbol],
        'default': true
      },
      falseValue: {
        type: [String, Number, Boolean, Object, Array, Symbol],
        'default': false
      }
    },
    data () {
      return {
        newValue: this.value,
        isMouseDown: false
      }
    },
    watch: {
      /**
       * When v-model change, set internal value.
       */
      value (value) {
        this.newValue = value
      },
      /**
       * Emit input event to update the user v-model.
       */
      newValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "../../scss/presets";

  $speed-slow: 0.15s;
  $easing: ease-out;

  $switch-width-number: 2.75;
  $switch-width: $switch-width-number * 1em;
  $switch-padding: 0.2em;

  $switch-active-background-color: $primary !default;

  .#{$ns}-switch {
    @include unselectable;
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    & + .#{$ns}-switch {
      margin-left: 0.5em;
    }

    .control-label {
      padding-left: 0.5em;
    }

    input[type=checkbox] {
      display: none;
      + .check {
        display: flex;
        align-items: center;
        width: $switch-width;
        height: #{$switch-width / 2 + $switch-padding};
        padding: $switch-padding;
        background: $grey-light;
        border-radius: 1em;
        transition: background $speed-slow $easing;
        &:before {
          content: "";
          border-radius: 1em;
          width: #{($switch-width - $switch-padding * 2) / 2};
          height: #{($switch-width - $switch-padding * 2) / 2};
          background: $background;
          box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
          transition: transform $speed-slow $easing, width $speed-slow $easing;
          will-change: transform;
        }
        &.is-elastic:before {
          width: 1.75em;
        }
      }
      &:checked + .check {
        background: $switch-active-background-color;
        @each $name, $pair in $colors {
          $color: nth($pair, 1);
          &.is-#{$name} {
            background: $color;
          }
        }
        &:before {
          transform: translate3d(100%, 0, 0);
        }
        &.is-elastic:before {
          // Might be a little offset if base font is not 16px
          transform: translate3d(percentage(16 / ($switch-width-number * 16)), 0, 0);
        }
      }
    }

    &:hover {
      input[type=checkbox] + .check {
        background: rgba($grey-light, 0.9);
      }
      input[type=checkbox]:checked + .check {
        background: rgba($switch-active-background-color, 0.9);
        @each $name, $pair in $colors {
          $color: nth($pair, 1);
          &.is-#{$name} {
            background: rgba($color, 0.9);
          }
        }
      }
    }
    &:focus {
      outline: none;
      input[type=checkbox] + .check {
        box-shadow: 0 0 0.5em rgba($grey, 0.6);
      }
      input[type=checkbox]:checked + .check {
        box-shadow: 0 0 0.5em rgba($switch-active-background-color, 0.8);
        @each $name, $pair in $colors {
          $color: nth($pair, 1);
          &.is-#{$name} {
            box-shadow: 0 0 0.5em rgba($color, 0.8);
          }
        }
      }
    }
    &.is-small {
      @include control-small;
    }
    &.is-medium {
      @include control-medium;
    }
    &.is-large {
      @include control-large;
    }
    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
      color: $grey;
    }
  }
</style>