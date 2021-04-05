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
      return [
        {
          id: 5494,
          name: "MadTree Brewing",
          brewery_type: "regional",
          street: "3301 Madison Rd",
          address_2: null,
          address_3: null,
          city: "Cincinnati",
          county_province: null,
          state: "Ohio",
          postal_code: "45209-1132",
          country: "United States",
          phone: "5138368733",
          website_url: "http://www.madtreebrewing.com"
        }
      ] // placeholder for vuex store object
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