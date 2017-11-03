<template>
  <nav class="v-pagination"
       :class="[ sizeModifier, alignModifier, disabledModifier ]"
  >
    <a class="v-pagination-previous" @click="_movePage(-1)">{{ prevPageText }}</a>
    <a class="v-pagination-next" @click="_movePage(1)">{{ nextPageText }}</a>
    <ul class="v-pagination-list">
      <li
          v-if="slideLabels && slideLabels.length"
          v-for="el in slideLabels">
        <span class="v-pagination-ellipsis" v-if="el === 'DOT'">&hellip;</span>
        <a class="v-pagination-link"
           :class="{ 'is-current': localPage === +el }"
           @click="_onPage(el)"
           v-else>{{ el }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {createMixins} from '../../sources/utils/mixin'
  export default {
    name: 'VPagination',

    mixins: [createMixins(['size', 'align', 'disabled'])],

    props: {
      prevPageText: {
        type: String,
        'default': '上一页'
      },

      nextPageText: {
        type: String,
        'default': '下一页'
      },

      page: {
        type: Number,
        'default': null
      },

      total: {
        type: Number,
        'default': 0
      },

      limit: {
        type: Number,
        'default': 10
      },

      offset: {
        type: Number,
        'default': 3
      }
    },

    data () {
      return {
        localPage: this.page,
        localTotal: this.total || 0,
        currentSlideLabels: [],
        currentSlidePos: null
      }
    },

    watch: {
      'total' (val) {
        this.localTotal = val
      },

      'page' (val) {
        if (val && val !== this.localPage) {
          this._onPage(val)
        }
      }
    },

    methods: {
      _onPage (n) {
        this.localPage = +n
        this.$emit('on-page', this.localPage)
        this.$emit('update:page', this.localPage)
      },

      /**
       * @param delta {Number}
       * @private
       */
      _movePage (delta) {
        if (!this.pages || this.pages < 2) {
          return
        }

        let to = (this.localPage || 0) + delta

        if (delta > 0 && to > this.pages) {
          to = 1
        } else if (delta < 0 && to <= 0) {
          to = this.pages
        }

        this._onPage(to)
      }
    },

    computed: {
      pages () {
        return (this.localTotal && this.localTotal <= this.limit) ? 1 : Math.ceil(this.localTotal / this.limit)
      },

      slidePos () {
        if (this.pages && this.pages > (this.offset + 2 + 2)) {
          return Math.ceil((this.localPage || 1) / this.offset)
        }

        return null
      },

      slideLabels () {
        console.debug('[Slide Labels Rebuild] Position@', this.slidePos)
        const labels = []

        if (this.slidePos == null) {
          Array(this.pages).fill(1).forEach((n, i) => labels.push(n + i))
        } else {
          const starter = (this.slidePos - 1) * this.offset
          Array(this.offset).fill(starter + 1).forEach((n, i) => {
            (n += i, this.pages >= n) && labels.push(n)
          })

          // header & footer
          labels[0] > 1 && labels.unshift(labels[0] - 1)
          labels[labels.length - 1] < this.pages && labels.push(labels[labels.length - 1] + 1)

          labels[0] !== 1 && (labels.unshift('DOT'), labels.unshift(1))
          labels[labels.length - 1] !== this.pages && (labels.push('DOT'), labels.push(this.pages))
        }

        return labels
      }
    }
  }
</script>