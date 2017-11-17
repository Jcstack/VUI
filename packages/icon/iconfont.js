import Icon from './impl.vue'

export default {
  name: 'VIconfont',

  extends: Icon,

  props: {
    ns: {
      type: String,
      'default': 'iconfont'
    }
  },

  computed: {
    iconFontCls () {
      let cls = []

      cls.push(this.ns)
      cls.push(`icon-${this.icon}`)

      return cls
    }
  }
}