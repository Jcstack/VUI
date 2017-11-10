export const props = {
  type: {
    type: String,
    default: 'iframe',
    validator: str => Boolean(~['iframe', 'embed', 'video', 'object', 'img', 'img-lazy'].indexOf(str))
  },
  tag: {
    type: String,
    default: 'div'
  },
  aspect: {
    type: String,
    default: '16by9'
  }
}

export default {
  name: 'VEmbed',
  functional: true,
  props,
  render (h, {props, data, children}) {
    return h(
      props.tag,
      {
        ref: data.ref,
        staticClass: 'v-embed',
        class: {
          [`v-embed-${props.aspect}`]: Boolean(props.aspect)
        }
      },
      [h(props.type, Object.assign(data, {ref: '', staticClass: 'embed-item'}), children)]
    )
  }
}