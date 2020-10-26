import Card from './src/components/Card.vue'

export const MyLibrary = {
  install(Vue, options) {
    const components = {
      Card
    }
    for (const [name, c] of Object.entries(components)) {
      Vue.component(name, c)
    }
  }
}
