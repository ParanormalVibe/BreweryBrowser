<template>
  <div class="search-form input-group mb-5">
    <SearchInput />
    <SearchButton @submit="onSubmit" />
  </div>
</template>

<script>
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
export default {
name: "SearchForm",
  components: { SearchButton, SearchInput },
  computed: {
    query() {
      return this.$store.state.searchQuery
    }
  },
  methods: {
    onSubmit() {
      // todo: axios
    }
  }
}
</script>

<style scoped>
.search-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>