<template>
  <div class="search-result-list">
    <SearchResult v-for="result in results" :key="result.id" :brewery="result" />
  </div>
</template>

<script>
import SearchResult from "./SearchResult";
export default {
  name: "SearchResultList",
  components: {SearchResult},
  computed: {
    results() {
      return [] // placeholder for vuex store object
    }
  }
}
</script>

<style scoped>

</style>