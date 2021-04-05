<template>
  <div class="search-result row">
    <div class="col">
      <span>{{ brewery.Name }}</span>
      <span>{{ brewery.Phone }}</span>
      <span>{{ brewery.Address }}</span>
      <span v-if="brewery.Address2">{{ brewery.Address2 }}</span>
      <span v-if="brewery.Address3">{{ brewery.Address3 }}</span>
      <span>{{ brewery.City }}, {{ brewery.State }} {{ brewery.PostalCode }}</span>
      <span v-if="brewery.Province">{{ brewery.Province }}</span>
      <span>{{ brewery.Country }}</span>
    </div>
    <div class="col">
      <span>{{ brewery.Type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    brewery: Object
  }
}
</script>

<style scoped>
.search-result {
  width: 600px;
}
</style>