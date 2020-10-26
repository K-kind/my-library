import Card from '@/components/Card.vue'

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
