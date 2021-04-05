<template>
  <input type="text" v-model="query" class="form-control" placeholder="" aria-label="Search field">
</template>

<script>
export default {
  name: "SearchInput",
  computed: {
    query: {
      get() {
        return this.$store.state.searchQuery
      },
      set(value) {
        this.$store.commit('updateSearchQuery', value)
      }
    }
  }
}
</script>

<style scoped>

</style>