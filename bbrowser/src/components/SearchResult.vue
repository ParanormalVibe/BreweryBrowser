<template>
  <div class="search-result row">
    <div class="col">
      <span>{{ breweryName }}</span>
      <span>{{ breweryPhone }}</span>
      <span>{{ breweryAddress }}</span>
      <span v-if="breweryAddress2">{{ breweryAddress2 }}</span>
      <span v-if="breweryAddress3">{{ breweryAddress3 }}</span>
      <span>{{ breweryCity }}, {{ breweryState }} {{ breweryPostalCode }}</span>
      <span v-if="breweryProvince">{{ breweryProvince }}</span>
      <span>{{ breweryCountry }}</span>
    </div>
    <div class="col">
      <span>{{ breweryType }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult"
}
</script>

<style scoped>
.search-result {
  width: 600px;
}
</style>