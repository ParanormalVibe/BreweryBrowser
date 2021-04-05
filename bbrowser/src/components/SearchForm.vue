<template>
  <div class="search-form input-group mb-3">
    <SearchInput />
    <SearchButton />
  </div>
</template>

<script>
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
export default {
name: "SearchForm",
  components: {SearchButton, SearchInput}
}
</script>

<style scoped>
.search-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
}
</style>