<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: 'Image Upload App',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A web application for uploading images using Nuxt.js and Vuetify.js'
        }
      ]
    }
  }
}
</script>
