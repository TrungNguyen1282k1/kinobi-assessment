export default {
  head: {
    title: "My Nuxt Vuetify Upload App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A web application for uploading images using Nuxt.js and Vuetify.js"
      }
    ]
  },

  css: [
    'vuetify/dist/vuetify.min.css',
    '@/assets/styles/main.css'
  ],

  plugins: [
    '@/plugins/vuetify.js'
  ],

  buildModules: ['@nuxtjs/vuetify'],
  vuetify: {
    defaultAssets: {
      icons: 'mdi'
    },
    theme: {
      dark: false
    }
  },

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'http://localhost:3001/api'
  },

  build: {
    transpile: ['vuetify/lib'],
    loaders: {
      scss: {
        implementation: require('sass')
      },
      sass: {
        implementation: require('sass')
      }
    }
  }
}
