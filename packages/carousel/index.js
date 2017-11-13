import Carousel from './impl.vue'

Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
}

export default Carousel
