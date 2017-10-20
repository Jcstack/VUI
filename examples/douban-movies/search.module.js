const elInput = document.querySelector('input[name=key]')
const elControl = document.querySelector('.search-field > .v-control')
const DOUBAN_SEARCH_API = 'https://api.douban.com/v2/movie/search'
const $ = jQuery
const rx = Rx

function search (key) {
  return rx.Observable.fromPromise($.ajax({
    dataType: 'jsonp',
    url: DOUBAN_SEARCH_API + '?q=' + encodeURIComponent(key),
  }))
}

function renderResults (results = []) {
  if (results && results.length === 0) {
    app.subjects = []
    return
  }

  app.selectIndex = null

  app.subjects = results.map(n => {
    console.log(n)
    return {
      id: n.id,
      title: n.title + ' / ' + n.original_title,
      link: n.alt,
      cover: n.images.medium,
      scores: n.rating.average,
      genres: n.genres.join(' '),
      active: false
    }
  })
}

function setLoadingState (state = false) {
  elControl.classList[state ? 'add' : 'remove']('is-loading')
}

Vue.config.debug = true
Vue.config.devtools = true

const app = new Vue({
  el: '#search_results',

  data () {
    return {
      subjects: [],
      selectIndex: null
    }
  },

  watch: {
    'selectIndex' (a) {
      console.log(a)
    }
  },

  computed: {
    'curActiveId' () {
      if (this.selectIndex != null && this.subjects[this.selectIndex]) {
        return this.subjects[this.selectIndex].id
      }
    }
  }
})

$(elInput)
.on('focus', function () {
  $(window).on('keyup.select.movie', function (e) {
    const max = app.subjects.length
    let dir = 0

    if (e.which === 40) {
      dir = 1
    } else if (e.which === 38) {
      dir = -1
    } else if (e.which === 13) {
      // enter
      if (app.curActiveId) {
        window.open('https://movie.douban.com/subject/' + app.curActiveId)
        return
      }
    }

    if (dir && max) {
      let delta

      if (app.selectIndex == null) {
        delta = ~dir ? 0 : (max-1)
      } else {
        delta = app.selectIndex + dir
        delta = delta < 0 ? (max-1) : (
          delta >= max ? 0 : delta
        )
      }

      app.selectIndex = delta

      e.preventDefault()
    } else {
      app.selectIndex = null
    }

  })
})
.on('blur', function () {
  $(window).off('keyup.select.movie')
})

let key = ''

Rx.Observable
.fromEvent(elInput, 'keyup')
.debounceTime(150)
.subscribe((e) => {
  const val = e.target.value

  if (!val || val.trim() === '') {
    key = ''
    renderResults([])
    return
  }

  if (val.trim() !== key) {
    setLoadingState(true)

    search(key = val.trim())
    .subscribe(data => {
      renderResults(data.subjects)
      setLoadingState(false)
    }, err => {
      console.debug(err)
    }, () => {
      setLoadingState(false)
    })
  }
})