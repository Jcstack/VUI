import Tags from './impl.vue'
import Tag from './impl_tag.vue'

Tags.install = function (Vue) {
  Vue.component(Tags.name, Tags)
  Vue.component(Tag.name, Tag)
}

export {
  Tags as default,
  Tag
}
