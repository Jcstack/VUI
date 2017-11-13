<template>
  <div class="v-carousel">
    <div class="v-carousel-inner">
      <!-- a item -->
      <div v-for="(el, $index) in slides" class="v-carousel-item"
           :class="[
             _transitionModeCls($index),
             _activeModeCls($index),
             `color-${$index}`
           ]"
           v-collect-item="$index"
      >
        <div class="item-inner"
        >
          <strong>
            {{ $index }}
          </strong>
        </div>
      </div>
    </div>
    <a class="v-carousel-control-prev" @click="prev">Left</a>
    <a class="v-carousel-control-next" @click="next">right</a>
  </div>
</template>

<script>
  import { on, off, reflow } from '../../sources/utils/dom'
  // Transition Event names
  const TransitionEndEvents = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'otransitionend oTransitionEnd',
    transition: 'transitionend'
  }

  // Slide directional classes
  const DIRECTION = {
    next: {
      outClass: 'to-left',
      inClass: 'from-next'
    },
    prev: {
      outClass: 'to-right',
      inClass: 'from-prev'
    }
  }

  // Fallback Transition duration (with a little buffer) in ms
  const TRANS_DURATION = 600 + 50

  // Return the browser specific transitionend event name
  function getTransitionEndEvent (el) {
    for (const name in TransitionEndEvents) {
      if (el.style[name] !== undefined) {
        return TransitionEndEvents[name]
      }
    }
    // fallback
    return null
  }

  export default {
    name: 'VCarousel',

    props: {
      value: [String, Number]
    },

    data () {
      return {
        isSliding: false,
        index: this.value || 0,
        slides: [1, 2, 3, 4, 5],
        transitionEndEvent: null,
        transitionState: null
      }
    },

    created () {
      this._animationTimeout = null
    },

    methods: {
      setSlide (slide) {
        const len = this.slides.length

        // Make sure we have an integer (you never know!)
        slide = Math.floor(slide)
        // Set new slide index. Wrap around if necessary
        this.index = slide >= len ? 0 : (slide >= 0 ? slide : len - 1)
      },

      prev () {
        this.setSlide(this.index - 1)
      },

      next () {
        this.setSlide(this.index + 1)
      },

      _transitionModeCls (index) {
        if (!this.isSliding || !this.transitionState) {
          return ''
        }

        const cls = []

        if (index === this.transitionState.enter) {
          cls.push(this.transitionState.direction.inClass)
          cls.push(this.transitionState.direction.outClass)
        } else if (index === this.transitionState.leave) {
          cls.push(this.transitionState.direction.outClass)
        }

        return cls
      },

      _activeModeCls (index) {
        const s = this.transitionState
        if (
          (s == null && this.index === index) ||
          (!this.isSliding && s && s.enter === index) ||
          (this.isSliding && s && s.leave === index)
        ) {
          return 'is-active'
        }
      }
    },

    watch: {
      'index' (a, b) {
        if (a === b || this.isSliding) {
          return
        }

        const elSlides = this._elSlides
        debugger
        const elToSlide = elSlides[a]
        const elFromSlide = elSlides[b]

        if (!elToSlide || !elFromSlide) {
          return
        }

        // Determine sliding direction
        let direction = (a > b) ? DIRECTION.next : DIRECTION.prev
        // Rotates
        if (b === 0 && a === this.slides.length - 1) {
          direction = DIRECTION.prev
        } else if (b === this.slides.length - 1 && a === 0) {
          direction = DIRECTION.next
        }

        // force sync enter to element with initial transition state
        elToSlide.classList.add(direction.inClass)

        this.transitionState = {
          direction,
          enter: a,
          leave: b
        }

        // reactive animation CLASS by watcher
        // ---
        // transition End handler
        let called = false
        const onceTransEnd = (evt) => {
          if (called) {
            return
          }

          console.log('YET TransitionEnd')
          called = true

          if (this.transitionEndEvent) {
            const events = this.transitionEndEvent.split(/\s+/)
            events.forEach(event => {
              off(elToSlide, event, onceTransEnd)
            })
          }

          this._animationTimeout = null
          this.isSliding = false
          // Notify ourselves that we're done sliding (slid)
          this.$nextTick(() => this.$emit('sliding-end', a))
        }

        // Clear transition classes after transition ends
        if (this.transitionEndEvent) {
          const events = this.transitionEndEvent.split(/\s+/)
          events.forEach(event => {
            on(elToSlide, event, onceTransEnd)
          })
        }

        // trigger a reflow of next slide
        reflow(elToSlide)

        // start animating
        this.isSliding = true

        // Fallback to setTimeout
         this._animationTimeout = setTimeout(onceTransEnd, TRANS_DURATION)
      }
    },

    mounted () {
      this.transitionEndEvent = getTransitionEndEvent(this.$el) || null
    },

    computed: {},

    destroy () {
      clearTimeout(this._animationTimeout)
      this._animationTimeout = null
    },

    directives: {
      'collect-item' (el, binding, vnode) {
        let elSlides = vnode.context._elSlides

        if (vnode.context._elSlides == null) {
          elSlides = vnode.context._elSlides = {}
        }

        elSlides[binding.value] = el
      }
    }
  }
</script>

<style lang="scss">
  .v-carousel {
    margin-top: 20px;
    width: 100%;
  }

  .v-carousel-item {
    background-color: rgba(239, 242, 246, 0.64);
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
</style>