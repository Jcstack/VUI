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
  data () {
    return {
      isSliding: false,
      slideActiveIndex: 0,
      slideTransitionState: null,
      slideTransitionEndEvent: null,
      slideAnimationTimeout: null
    }
  },

  methods: {
    _slideTransitionModeCls (index) {
      if (!this.isSliding || !this.slideTransitionState) {
        return ''
      }

      const cls = []

      if (index === this.slideTransitionState.enter) {
        cls.push(this.slideTransitionState.direction.inClass)
        cls.push(this.slideTransitionState.direction.outClass)
      } else if (index === this.slideTransitionState.leave) {
        cls.push(this.slideTransitionState.direction.outClass)
      }

      return cls
    },

    _slideActiveModeCls (index) {
      const s = this.slideTransitionState

      if (
        (s == null && this.slideActiveIndex === index) ||
        (!this.isSliding && s && s.enter === index) ||
        (this.isSliding && s && s.leave === index)
      ) {
        return 'is-active'
      }
    }
  },

  watch: {
    'slideActiveIndex' (a, b) {
      if (a === b || this.isSliding) {
        return
      }

      const elSlides = this._elSlides
      const len = Array.isArray(elSlides) ? elSlides.length : Object.keys(elSlides).length
      const elToSlide = elSlides[a]
      const elFromSlide = elSlides[b]

      if (!elToSlide || !elFromSlide) {
        return
      }

      // Determine sliding direction
      let direction = (a > b) ? DIRECTION.next : DIRECTION.prev

      // Rotates
      if (b === 0 && a === len - 1) {
        direction = DIRECTION.prev
      } else if (b === len - 1 && a === 0) {
        direction = DIRECTION.next
      }

      // force sync enter to element with initial transition state
      elToSlide.classList.add(direction.inClass)

      this.slideTransitionState = {
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
        console.debug('[SlideTransitionEnd]', elToSlide)

        if (this.transitionEndEvent) {
          const events = this.transitionEndEvent.split(/\s+/)
          events.forEach(event => {
            off(elToSlide, event, onceTransEnd)
          })
        }

        this.slideAnimationTimeout = null
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
      this.slideAnimationTimeout = setTimeout(onceTransEnd, TRANS_DURATION)
    }
  },

  mounted () {
    this.transitionEndEvent = getTransitionEndEvent(this.$el) || null
  },

  directives: {
    'collect-slide-item' (el, binding, vnode) {
      let elSlides = vnode.context._elSlides

      if (vnode.context._elSlides == null) {
        elSlides = vnode.context._elSlides = {}
      }

      elSlides[binding.value] = el
    }
  }
}
