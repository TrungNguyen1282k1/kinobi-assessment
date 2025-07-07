<template>
  <v-file-input
    v-model="file"
    label="Choose a file"
    accept="*/*"
    outlined
    dense
  />
</template>

<script>
export default {
  props: ['value'],
  computed: {
    file: {
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