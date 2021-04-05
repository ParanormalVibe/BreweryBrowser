<template>
  <div id="app-container" class="container">
    <Banner />
    <SearchForm />
    <SearchResultList />
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
  }
}
</script>

<style>
#app-container {

}
</style>
