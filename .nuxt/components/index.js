export { default as Carousel } from '../../components/Carousel.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Page } from '../../components/Page.vue'
export { default as Login } from '../../components/login.vue'
export { default as Popupmodal } from '../../components/popupmodal.vue'
export { default as Social } from '../../components/social.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
