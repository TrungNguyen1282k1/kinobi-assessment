export const state = () => ({
  files: [],
  snackbarSuccess: false,
  snackbarError: false,
  snackbarMessage: '',
  snackbarErrorMessage: '',
  userId: 'user123'
})

export const mutations = {
  setFiles(state, files) {
    state.files = files
  },
  addFile(state, file) {
    state.files.unshift(file)
  },

  setSnackbarSuccessMessage(state, message) {
    state.snackbarMessage = message
  },
  setSnackbarErrorMessage(state, message) {
    state.snackbarErrorMessage = message
  },
  toggleSnackbarSuccess(state, value) {
    state.snackbarSuccess = value
  },
  toggleSnackbarError(state, value) {
    state.snackbarError = value
  },

  clearSnackbar(state) {
    state.snackbarMessage = ''
    state.snackbarErrorMessage = ''
    state.snackbarSuccess = false
    state.snackbarError = false
  }
}

export const actions = {
  async uploadFile({ commit, state }, file) {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('userId', state.userId)

      const res = await this.$axios.post('/upload', formData)

      commit('addFile', res.data.file.filename)
      commit('setSnackbarSuccessMessage', 'File uploaded successfully!')
      commit('toggleSnackbarSuccess', true)
    } catch (err) {
      console.error('Upload failed', err)
      commit('setSnackbarErrorMessage', 'Upload failed.')
      commit('toggleSnackbarError', true)
    }
  },

  async fetchFiles({ commit, state }) {
    try {
      const res = await this.$axios.get(`/files?userId=${state.userId}`)
      const filenames = res.data.map(f => f.filename)
      commit('setFiles', filenames)
    } catch (err) {
      console.error('Fetch failed', err)
      commit('setSnackbarErrorMessage', 'Failed to fetch files.')
      commit('toggleSnackbarError', true)
    }
  }
}

export const getters = {
  uploadedFiles: state => state.files,
  successMessage: state => state.snackbarMessage,
  errorMessage: state => state.snackbarErrorMessage,
  hasSuccess: state => state.snackbarSuccess,
  hasError: state => state.snackbarError
}
