<template>
  <div class="v-range-slider"
       :class="[
         {'is-dragging': isDragging, 'is-vertical': vertical, 'is-horizontal': !vertical},
         colorModifier
       ]"
       v-collect-client-size="volatileSize">
    <div class="v-range-progress-bar"
         @click="_onClickBarHandler"
         data-progress>
      <span class="v-range-progress-bar-line"
            :style="[ realLineOffsetStyle ]"
      ></span>
      <span class="v-range-progress-point"
            @mousedown="_onMouseDownHandler"
            :style="[ realPointOffsetStyle ]"
            data-point></span>
    </div>
  </div>
</template>

<script>
  import { createMixins } from '../../sources/utils/mixin'

  export default {
    name: 'VRangeSlider',

    mixins: [createMixins(['color', 'state'])],

    props: {
      value: {
        type: Number,
        'default': 0
      },

      vertical: {
        type: Boolean,
        'default': false
      },

      step: {
        type: Number,
        'default': 1
      },

      disabled: {
        type: Boolean,
        'default': false
      }
    },

    data () {
      const vm = this

      // instance properties
      vm._moveTimer = null
      vm._percentUnits = 100

      return {
        localValue: null,
        localPercentValue: 0,
        isDragging: false,
        volatileSize: {
          POINT_RADIUS: 0, // could be calculated
          _jumperPointOffsetX: -1,
          _startClientX: 0,
          _startClientY: 0,
          _startOffsetLeft: 0,
          _startOffsetTop: 0,
          _pointMinClientX: 0,
          _pointMaxClientX: 0,
          _pointMaxOffsetLeft: 0,
          _pointMaxOffsetTop: 0,
          pointClientWidth: 0,
          pointClientHeight: 0,
          pointOffsetLeft: 0,
          rangeOffsetWidth: 0,
          sync: () => vm
        }
      }
    },

    created () {},

    computed: {
      styleOffsetValue () {
        let pv = this.localPercentValue * 100

        // filter step
        if (this.vertical) {
          // ignore decimal offset . it maybe not smooth with wide bar
          pv = 100 - this.value
        }

        return pv
      },

      realPointOffsetStyle () {
        const pv = this.styleOffsetValue

        return this.vertical ? {
          top: `${ (pv) }%`,
        } : {
          left: `${ (pv) }%`
        }
      },

      realLineOffsetStyle () {
        const pv = this.styleOffsetValue

        return this.vertical ? {
          height: `${ (100 - pv) }%`,
        } : {
          width: `${ (pv) }%`
        }
      }
    },

    methods: {
      syncVolatileSize (...args) {
        this.volatileSize.sync(...args)
      },

      _onMouseDownHandler (evt) {
        this.isDragging = true

        // cache start point coordinate
        this.syncVolatileSize(evt)

        document.addEventListener('mousemove', this._mouseMovingHandler, true)
        document.addEventListener('mouseup', this._cleanDragging, true)
      },

      _mouseMovingHandler (evt) {
        if (!this.isDragging) {
          return
        }

        const vm = this

        vm._moveTimer && clearTimeout(vm._moveTimer)

        vm._moveTimer = setTimeout(() => {
          // recollect important
          this.syncVolatileSize()

          const vs = this.volatileSize
          const isVer = this.vertical

          const pointOffsetPositive = !isVer ? vs.pointOffsetLeft : vs.pointOffsetTop
          const rangeOffsetLength = !isVer ? vs.rangeOffsetWidth : vs.rangeOffsetHeight

          ;(function onMove (deltaX, deltaY) {
            const DELTA = isVer ? deltaY : deltaX

            if (
              (DELTA < 0 && pointOffsetPositive <= 0) ||
              (DELTA > 0 && pointOffsetPositive >= rangeOffsetLength)) {

              vm.localPercentValue = DELTA < 0 ? 0 : 1

              // update relative origin point
              if (isVer) {
                Object.assign(vs, {
                  _startClientY: deltaY < 0 ? vs._pointMinClientY : vs._pointMaxClientY,
                  _startOffsetTop: deltaY < 0 ? 0 : vs._pointMaxOffsetTop
                })
              } else {
                Object.assign(vs, {
                  _startClientX: deltaX < 0 ? vs._pointMinClientX : vs._pointMaxClientX,
                  _startOffsetLeft: deltaX < 0 ? 0 : vs._pointMaxOffsetLeft
                })
              }

//              console.debug('[VRange][Reset Start Center :X :Y DELTA]', `[ ${vs._startClientX}, ${vs._startClientY} ]`, deltaX, deltaY)
            } else {
              // calculate percent
//              console.debug(`[VRange]((!isVer ? vs._startOffsetLeft : vs._startOffsetTop) + DELTA) / rangeOffsetLength`)
//              console.debug(`[VRange]((!${isVer} ? ${vs._startOffsetLeft} : ${vs._startOffsetTop}) + ${DELTA}) / ${rangeOffsetLength}`)

              let v = (( (!isVer ? vs._startOffsetLeft : vs._startOffsetTop) + DELTA) / rangeOffsetLength)
              console.debug(`[VRange] fuzzy percentage`, v)

              if (v > 1) {
                console.warn(`[VRange] delta percent value error . it can not be greater than 1`, v)
                v = 1
              } else if (v < 0) {
                v = 0
              }

              vm.localPercentValue = v
              // end
//              console.debug('[VRange][Point Center :X :Y]', `[ ${vs._startClientX}, ${vs._startClientY} ]`, deltaX, deltaY, '[new]', v)
            }

            vm._updatePercentStepVal()
          }(evt.clientX - vs._startClientX, evt.clientY - vs._startClientY))

        }, 0)
      },

      _updatePercentStepVal () {
        let vm = this
        // step value
        let pv = this.vertical ? (1 - vm.localPercentValue) : vm.localPercentValue

        pv = Math.round(pv * 100)
        // handle step unit `pv` equal one step
        pv = (pv % vm.step) === 0 ? pv : (
          pv > vm.step ? (Math.floor(pv / vm.step) * vm.step) : vm.step
        )

        // emit value
        if (pv !== this.value) {
          this.localValue = pv
          vm.$emit('input', pv)
        }
      },

      _cleanDragging () {
        // clean sth
        this.isDragging = false

        document.removeEventListener('mousemove', this._mouseMovingHandler, true)
        document.removeEventListener('mouseup', this._cleanDragging, true)

        // base size
        this.syncVolatileSize()
      },

      _onClickBarHandler (evt) {
        this.syncVolatileSize(evt)

        // set percent
        const vs = this.volatileSize

        if (vs._jumperPointOffsetX !== -1) {
          this.localPercentValue = (vs._jumperPointOffsetX / vs.rangeOffsetWidth)
          this._updatePercentStepVal()
        }
      }
    },

    watch: {
      'value': {
        immediate: true,
        handler (a, b) {
          // @TODO reactor
          if (b == null || this.localValue !== a) {
            let percentVal = a

            percentVal /= this._percentUnits

            percentVal = percentVal > 1 ? 1 : ( percentVal < 0 ? 0 : percentVal)
            this.localPercentValue = this.vertical ? (1 - percentVal) : percentVal
            this.localValue = a
          }
        }
      },
      'localPercentValue' (a, b) {
        this.syncVolatileSize()
      }
    },

    directives: {
      'collectClientSize': {
        inserted (el, binding) {
          const elProgress = el.querySelector('[data-progress]')
          const elPoint = el.querySelector('[data-point]')
          const _sync = binding.value.sync

          // static
          const POINT_RADIUS = elPoint.offsetWidth / 2
          const POINT_CLIENT_WIDTH = elPoint.clientWidth
          const POINT_CLIENT_HEIGHT = elPoint.clientHeight

          binding.value.sync = function (...args) {
            const vm = _sync()

            if (args[0] && args[0] instanceof MouseEvent) {
              let evt = args[0]

              switch (evt.type) {
                case 'mousedown':
                  const pBound = elProgress.getBoundingClientRect()
                  Object.assign(vm.volatileSize, {
                    _startClientX: evt.clientX,
                    _startClientY: evt.clientY,
                    _startOffsetLeft: elPoint.offsetLeft,
                    _startOffsetTop: elPoint.offsetTop,
                    _pointMinClientX: pBound.left,
                    _pointMaxClientX: pBound.left + elProgress.offsetWidth,
                    _pointMinClientY: pBound.top,
                    _pointMaxClientY: pBound.top + elProgress.offsetHeight,
                    _pointMaxOffsetLeft: elProgress.offsetWidth,
                    _pointMaxOffsetTop: elProgress.offsetHeight
                  })
                  break
                case 'click':
                  if (evt.currentTarget === elProgress) {
                    Object.assign(vm.volatileSize, {
                      _jumperPointOffsetX: evt.target === elPoint ? -1 : evt.offsetX
                    })
                  }
                  break
                default:

              }

              return
            }

            // collect dom info
            Object.assign(vm.volatileSize, {
              POINT_RADIUS: POINT_RADIUS,
              pointOffsetLeft: elPoint.offsetLeft, // dynamic
              pointOffsetTop: elPoint.offsetTop,
              pointClientWidth: POINT_CLIENT_WIDTH, // without border
              pointClientHeight: POINT_CLIENT_HEIGHT,
              rangeOffsetWidth: elProgress.offsetWidth, // maybe dynamic
              rangeOffsetHeight: elProgress.offsetHeight
            })
          }

          binding.value.sync()
        }
      }
    }
  }
</script>
