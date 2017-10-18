<template>
  <div class="sav-range-slider"
       :class="{ 'is-dragging': isDragging, 'is-vertical': vertical, 'is-horizontal': !vertical }"
       v-collect-client-size="volatileSize">
    <div class="sav-range-progress-bar"
         @click="_onClickBarHandler"
         data-progress>
      <span class="sav-range-progress-bar-line"></span>
      <span class="sav-range-progress-point"
            @mousedown="_onMouseDownHandler"
            :style="[ realPointOffsetStyle ]"
            data-point></span>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'SavRangeSlider',
    props: {
      value: {
        type: [String, Number],
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

      return {
        _moveTimer: null,
        _percentUnits: 100,
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
        },
        proxyPercentValue: 0,
        isDragging: false
      }
    },

    created () {
      let percentVal = this.value

      if (typeof this.value === 'string') {
        percentVal = /^(\d{1,3})%$/.test(this.value) ? +(RegExp.$1) : parseInt(percentVal)
        percentVal = Number.isNaN(percentVal) ? 0 : percentVal
      }

      // @todo float
      percentVal /= this.$data._percentUnits

      percentVal = percentVal > 1 ? 1 : ( percentVal < 0 ? 0 : percentVal)
      this.proxyPercentValue = this.vertical ? (1 - percentVal) : percentVal
    },

    computed: {
      realPointOffsetStyle () {
        // percent value
        let pv = this.proxyPercentValue

        return this.vertical ? {
          top: `${ (pv) * 100}%`,
        } : {
          left: `${ (pv) * 100}%`
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

        evt.stopPropagation()
        evt.preventDefault()
      },

      _mouseMovingHandler (evt) {
        evt.stopPropagation()
        evt.preventDefault()

        if (!this.isDragging) {
          return
        }

        const vm = this

        vm.$data._moveTimer && clearTimeout(vm.$data._moveTimer)

        vm.$data._moveTimer = setTimeout(() => {
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
              vm.proxyPercentValue = DELTA < 0 ? 0 : 1

              // update relative center point
              if (isVer) {
                Object.assign(vs, {
                  _startClientY: DELTA < 0 ? vs._pointMinClientY : vs._pointMaxClientY,
                  _startOffsetTop: DELTA < 0 ? 0 : vs._pointMaxOffsetTop
                })
              } else {
                Object.assign(vs, {
                  _startClientX: deltaX < 0 ? vs._pointMinClientX : vs._pointMaxClientX,
                  _startOffsetLeft: deltaX < 0 ? 0 : vs._pointMaxOffsetLeft
                })
              }

              console.debug('[Save Range][Reset Start Center :X :Y DELTA]', `[ ${vs._startClientX}, ${vs._startClientY} ]`, deltaX, deltaY)
            } else {
              // calculate percent
              console.debug(`[Sav Range]((!isVer ? vs._startOffsetLeft : vs._startOffsetTop) + DELTA) / rangeOffsetLength`)
              console.debug(`[Sav Range]((!${isVer} ? ${vs._startOffsetLeft} : ${vs._startOffsetTop}) + ${DELTA}) / ${rangeOffsetLength}`)

              let v = (( (!isVer ? vs._startOffsetLeft : vs._startOffsetTop) + DELTA) / rangeOffsetLength)
              vm.proxyPercentValue = v > 1 ? (console.warn(`[Sav Range] delta percent value error . it can not be greater than 1`, v), 1)
                : v
              // end
              console.debug('[Sav Range][Point Center :X :Y]', `[ ${vs._startClientX}, ${vs._startClientY} ]`, deltaX, deltaY)
            }

            vm._updatePercentStepVal()
          }(evt.clientX - vs._startClientX, evt.clientY - vs._startClientY))

        }, 0)
      },

      _updatePercentStepVal () {
        let vm = this
        // step value
        let pv = this.vertical ? (1 - vm.proxyPercentValue) : vm.proxyPercentValue

        pv = Math.round(pv * 100)
        pv = (pv % vm.step) === 0 ? pv : (Math.floor(pv / vm.step) * vm.step + (pv % vm.step < (vm.step / 2) ? 0 : vm.step))

        // emit value
        vm.$emit('input', pv)
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
          this.proxyPercentValue = (vs._jumperPointOffsetX / vs.rangeOffsetWidth)
          this._updatePercentStepVal()
        }
      }
    },

    watch: {
      'proxyPercentValue' () {
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
                    _pointMaxClientX: pBound.left + elProgress.offsetWidth + vm.volatileSize.POINT_RADIUS,
                    _pointMinClientY: pBound.top,
                    _pointMaxClientY: pBound.top + elProgress.offsetHeight + vm.volatileSize.POINT_RADIUS,
                    _pointMaxOffsetLeft: elProgress.offsetWidth,
                    _pointMaxOffsetTop: elProgress.offsetHeight,
                    rangeOffsetWidth: elProgress.offsetWidth, // maybe dynamic
                    rangeOffsetHeight: elProgress.offsetHeight,
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
              pointClientHeight: POINT_CLIENT_HEIGHT
            })
          }

          binding.value.sync()
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss">
  $st-range: 'sav-range-slider';
  $st-progress: 'sav-range-progress';
  $line-bar-weight: 4px;
  $point-width: 16px;

  .test-wrap {
    padding: 50px 0;
  }

  .sav-range-slider {
    position: relative;
    background-color: brown;
    padding: 15px 10px;
    width: 100%;

    &.is-dragging {
      .sav-range-progress-point {
        /*cursor: grabbing;*/
        opacity: .5;
      }
    }

    &.is-vertical {
      height: 320px; /* need be calculated */
      width: 24px;
      padding: 5px 10px;
      background-color: #0e729f;
      .#{$st-progress}-bar {
        height: 100%;
        width: $line-bar-weight;
        &-line {
          height: 100%;
        }
      }

      .#{$st-progress}-point {
        background-color: #00c3b1;
        left: -($point-width - $line-bar-weight) / 2;
        top: 0;
        transform: translateY(-50%);
      }
    }

    &.is-horizontal {
      .#{$st-progress}-point {
        top: -($point-width - $line-bar-weight) / 2;
        left: 0;
        transform: translateX(-50%);
      }
    }
  }

  .sav-range-progress {
    &-bar {
      position: relative;
      height: $line-bar-weight;
      background-color: transparent;
      width: 100%;
      &-line {
        height: $line-bar-weight;
        background-color: #ffffff;
        display: block;
      }
    }

    &-point {
      position: absolute;
      width: $point-width;
      height: $point-width;
      background-color: rosybrown;
      border-radius: $point-width;
      user-select: none;
      opacity: 1;
      cursor: grab;
    }
  }
</style>