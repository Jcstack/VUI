export default {
  methods: {
    _initMaybeLongCode () {
      let elsLongDemoBox = this.$el.querySelectorAll('.__maybe-long-code')

      if (elsLongDemoBox && elsLongDemoBox.length) {
        Array.from(elsLongDemoBox).map(el => {
          do {
            el = el.previousSibling
            if (el && el.nodeType === 1 && el.tagName.toLowerCase() === 'pre') {
              return el
            }
          } while (el)
        })
        .filter(n => n != null)
        .forEach(el => {
          el.classList.add('__too-long-hl-code')
          el.addEventListener('click', function () {
            el.classList.remove('__too-long-hl-code')
          })
        })
      }
    }
  }
}