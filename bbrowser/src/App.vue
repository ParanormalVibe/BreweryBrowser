<template>
  <div id="app-container" class="container">
    <Banner />
    <SearchForm />
    <Error v-if="queryHasError" />
    <Paginator v-if="searchResults.length > 0 && !queryHasError" />
    <SearchResultList v-if="searchResults.length && !queryHasError> 0" />
    <Paginator v-if="searchResults.length > 0 && !queryHasError" />
  </div>
</template>

<script>
import Banner from './components/Banner'
import SearchForm from "./components/SearchForm";
import SearchResultList from "./components/SearchResultList";
import Paginator from "./components/Paginator";
import Error from "./components/Error"

export default {
  name: 'App',
  components: {
    Paginator,
    SearchResultList,
    SearchForm,
    Banner,
    Error
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults
    },
    queryHasError() {
      return this.$store.state.queryHasError
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
