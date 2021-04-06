<template>
  <div class="search-form input-group mb-5">
    <SearchInput />
    <SearchButton @submit="onSubmit" />
  </div>
</template>

<script>
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import axios from "axios"

export default {
name: "SearchForm",
  components: { SearchButton, SearchInput },
  computed: {
    query() {
      return this.$store.state.searchQuery
    }
  },
  methods: {
    async onSubmit() {
      let response = await axios.get('https://api.openbrewerydb.org/breweries/search?query=' + this.query)
      if (response.status !== 200) {
        this.$store.commit('flagQueryError')
      }
      else {
        this.$store.commit('updateSearchResults', response.data)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.search-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>