<template>
  <v-form>
    <v-file-input
      v-model="file"
      label="Choose an image"
      accept="image/*"
      outlined
      dense
    />

    <v-btn color="primary" class="mt-2" @click="uploadFile">
      Upload Image
    </v-btn>

    <v-snackbar v-model="snackbar" timeout="3000" color="success">
      {{ snackbarMessage }}
    </v-snackbar>

    <div v-if="uploadedFiles.length" class="mt-4">
      <h3>Uploaded Files</h3>
      <ul>
        <li v-for="(filename, index) in uploadedFiles" :key="index">
          <a :href="`${$axios.defaults.baseURL.replace('/api', '')}/uploads/${filename}`" target="_blank">
            {{ filename }}
          </a>
        </li>
      </ul>
    </div>
    <div v-else class="mt-4">
      No files uploaded yet.
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      uploadedFiles: [],
      snackbar: false,
      snackbarMessage: ''
    }
  },
  mounted() {
    this.fetchUploadedFiles()
  },
  methods: {
    async uploadFile() {
      if (!this.file) {
        this.snackbarMessage = 'Please select a file first.'
        this.snackbar = true
        return
      }

      const formData = new FormData()
      formData.append('file', this.file)

      try {
        const response = await this.$axios.post('/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        this.snackbarMessage = 'File uploaded successfully!'
        this.snackbar = true

        this.uploadedFiles.push(response.data.filename)
        this.file = null
      } catch (err) {
        console.error('Upload failed', err)
        this.snackbarMessage = 'Failed to upload file.'
        this.snackbar = true
      }
    },

    async fetchUploadedFiles() {
      try {
        const response = await this.$axios.get('/files')
        this.uploadedFiles = response.data
      } catch (err) {
        console.error('Failed to fetch uploaded files', err)
      }
    }
  }
}
</script>

<style scoped>
ul {
  padding-left: 1rem;
}
a {
  text-decoration: none;
  color: #1976d2;
}
</style>
