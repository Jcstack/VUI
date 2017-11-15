import Progress from './impl.vue'

Progress.install = function (Vue) {
  Vue.component(Progress.name, Progress)
}

export default Progress
