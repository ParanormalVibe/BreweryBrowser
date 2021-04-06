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
      return this.$store.getters.currentPage.items
    }
  }
}
</script>

<style scoped>
.search-result-list {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>