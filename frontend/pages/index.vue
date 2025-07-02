<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Image Upload Application</h1>
      </v-col>

      <v-col cols="12">
        <UploadForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UploadForm from '~/components/UploadForm.vue'

export default {
  components: {
    UploadForm
  }
}
</script>
