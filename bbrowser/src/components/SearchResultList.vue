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
      return this.$store.state.searchResults
    }
  }
}
</script>

<style scoped>
.search-result-list {
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>