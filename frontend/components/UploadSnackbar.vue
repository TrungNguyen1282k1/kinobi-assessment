<template>
  <v-snackbar v-model="visible" :color="color" timeout="3000" v-if="message">
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'success'
    },
    value: Boolean
  },
  computed: {
    visible: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
