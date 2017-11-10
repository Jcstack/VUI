import Embed from './embed'

/* istanbul ignore next */
Embed.install = function (Vue) {
  Vue.component(Embed.name, Embed)
}

export default Embed