<template>
  <nav aria-label="Search result page navigation" class="app-paginator">
    <ul class="pagination">
      <li :class="{ disabled: (currentPage - 1 <= 0) }" class="page-item"><a @click="onPageClick(currentPage - 1)" class="page-link" href="#">Previous</a></li>
      <li v-if="currentPage - 2 > 0" class="page-item"><a @click="onPageClick(currentPage - 2)" class="page-link" href="#">{{ currentPage - 2 }}</a></li>
      <li v-if="currentPage - 1 > 0" class="page-item"><a @click="onPageClick(currentPage - 1)"  class="page-link" href="#">{{ currentPage - 1}}</a></li>
      <li class="page-item active"><a class="page-link" href="#">{{ currentPage }}</a></li>
      <li v-if="currentPage + 1 <= pageCount" class="page-item"><a @click="onPageClick(currentPage + 1)" class="page-link" href="#">{{ currentPage + 1}}</a></li>
      <li v-if="currentPage + 2 <= pageCount" class="page-item"><a @click="onPageClick(currentPage + 2)" class="page-link" href="#">{{ currentPage + 2 }}</a></li>
      <li v-if="currentPage + 1 <= pageCount" class="page-item"><a @click="onPageClick(currentPage + 1)" class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Paginator",
  computed: {
    pageCount() {
      return this.$store.getters.currentPage.pages
    },
    currentPage() {
      return this.$store.getters.currentPage.currentPage
    }
  },
  methods: {
    onPageClick(pageNumber) {
      this.$store.commit('updatePageNumber', pageNumber)
    }
  }
}
</script>

<style scoped>
  .app-paginator {
    margin: 0 auto;
  }
</style>