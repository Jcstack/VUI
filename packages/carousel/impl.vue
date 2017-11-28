<template>
  <div class="v-carousel"
       @mouseenter="pause"
       @mouseleave="restart"
       @focusin="pause"
       @focusout="restart"
  >
    <div class="v-carousel-inner">
      <!-- an item -->
      <div v-for="(el, $index) in slides" class="v-carousel-item"
           :class="[
             _transitionModeCls($index),
             _activeModeCls($index),
           ]"
           v-collect-item="$index"
      >
        <div class="item-inner"
        >
          <slot name="item-body"
                :item="el"
                :index="$index"
          >
            <strong>
              {{ $index }}
            </strong>
          </slot>
        </div>
      </div>
    </div>
    <template v-if="hasControls">
      <a class="v-carousel-control-prev" @click="prev"></a>
      <a class="v-carousel-control-next" @click="next"></a>
    </template>
    <template v-if="hasIndicators">
      <ul class="v-carousel-indicators">
        <li v-for="(el, $index) in slides"
            @click="setSlide($index)"
            :key="`slide_${$index}`"
            :class="{ 'is-active': $index === index }"
        >
          {{ $index }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  import { on, off, reflow } from '../../sources/utils/dom'

  const TransitionEndEvents = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'otransitionend oTransitionEnd',
    transition: 'transitionend'
  }

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

  function getTransitionEndEvent (el) {
    for (const name in TransitionEndEvents) {
      if (el.style[name] !== undefined) {
        return TransitionEndEvents[name]
      }
    }

    return null
  }

  export default {
    name: 'VCarousel',

    props: {
      value: Number,
      hasControls: Boolean,
      hasIndicators: {
        type: Boolean,
        'default': true
      },
      interval: {
        type: Number,
        'default': 5000
      },
      items: {
        type: Array,
        required: true
      }
    },

    data () {
      return {
        isSliding: false,
        index: this.value || 0,
        slides: this.items,
        transitionEndEvent: null,
        transitionState: null
      }
    },

    created () {
      this._intervalId = null
      this._animationTimeout = null
    },

    methods: {
      setSlide (slide) {
        const len = this.slides.length
        if (len === 0) {
          return
        }

        if (this.isSliding) {
          // Schedule slide after sliding complete
          this.$once('sliding-end', () => this.setSlide(slide))
          return
        }

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

      pause () {
        if (Boolean(this._intervalId)) {
          clearInterval(this._intervalId)
          this._intervalId = null
          // Make current slide focusable for screen readers
          this._elSlides[this.index].tabIndex = 0
        }
      },

      start () {
        if (!Boolean(this.interval)) {
          return
        }

        Object.values(this._elSlides).forEach(slide => {
          slide.tabIndex = -1
        })

        this._intervalId = setInterval(() => {
          this.next()
        }, Math.max(1000, this.interval))
      },

      restart (evt) {
        if (!this.$el.contains(document.activeElement)) {
          this.start()
        }
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

          called = true
          console.debug('[TransitionEnd]', elToSlide)

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
      },

      'items' () {
        throw new Error('@todo implementation')
      }
    },

    mounted () {
      this.transitionEndEvent = getTransitionEndEvent(this.$el) || null

      // start sliding
      this.start()
    },

    computed: {},

    destroyed () {
      clearInterval(this._intervalId)
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
