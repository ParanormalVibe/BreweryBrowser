<template>
  <div id="app-container" class="container">
    <Banner />
    <SearchForm />
    <SearchResultList v-if="searchResults.length > 0" />
  </div>
</template>

<script>
import Banner from './components/Banner'
import SearchForm from "./components/SearchForm";
import SearchResultList from "./components/SearchResultList";

export default {
  name: 'App',
  components: {
    SearchResultList,
    SearchForm,
    Banner
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults
    }
  }
}
</script>

<style>
body {
  background-color: #2B282C !important;
}

#app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
