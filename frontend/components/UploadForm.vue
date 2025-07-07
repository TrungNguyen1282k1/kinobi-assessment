<template>
  <v-form>
    <FileInput v-model="file" />

    <v-btn color="primary" class="mt-2" @click="handleUpload">
      Upload File
    </v-btn>

    <UploadSnackbar v-model="snackbarSuccess" :message="snackbarMessage" color="success" />
    <UploadSnackbar v-model="snackbarError" :message="snackbarErrorMessage" color="error" />

    <UploadedFileList v-if="uploadedFiles.length" :files="uploadedFiles" class="mt-4" />
    <div v-else class="mt-4">No files uploaded yet.</div>
  </v-form>
</template>

<script>
import FileInput from '~/components/FileInput.vue'
import UploadSnackbar from '~/components/UploadSnackbar.vue'
import UploadedFileList from '~/components/UploadedFileList.vue'

export default {
  components: {
    FileInput,
    UploadSnackbar,
    UploadedFileList
  },
  data() {
    return {
      file: null,
      userId: 'user123'
    }
  },
  computed: {
    uploadedFiles() {
      return this.$store.state.files
    },
    snackbarSuccess: {
      get() {
        return this.$store.state.snackbarSuccess
      },
      set(val) {
        this.$store.commit('toggleSnackbarSuccess', val)
      }
    },
    snackbarError: {
      get() {
        return this.$store.state.snackbarError
      },
      set(val) {
        this.$store.commit('toggleSnackbarError', val)
      }
    },
    snackbarMessage() {
      return this.$store.state.snackbarMessage
    },
    snackbarErrorMessage() {
      return this.$store.state.snackbarErrorMessage
    }
  },
  mounted() {
    this.$store.dispatch('fetchFiles', this.userId)
  },
  methods: {
    async handleUpload() {
      if (!this.file) {
        this.$store.commit('setSnackbarErrorMessage', 'Please select a file first.')
        this.snackbarError = true
        return
      }

      await this.$store.dispatch('uploadFile', this.file)
      this.file = null
    }
  }
}
</script>
