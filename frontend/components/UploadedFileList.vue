<template>
  <div>
    <h3>Uploaded Files</h3>
    <ul>
      <li v-for="(filename, index) in files" :key="index">
        <a :href="`${baseUrl}/uploads/${filename}`" target="_blank">{{ filename }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['files'],
  computed: {
    baseUrl() {
      return this.$axios.defaults.baseURL.replace('/api', '')
    }
  }
}
</script>