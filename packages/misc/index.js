import PageProgress from './page_progress.vue'

const Misc = {}

Object.defineProperty(Misc, 'install', {
  value (Vue) {
    Vue.component(PageProgress.name, PageProgress)
  }
})

export {
  Misc as default,
  PageProgress
}
