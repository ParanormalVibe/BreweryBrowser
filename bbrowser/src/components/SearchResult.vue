<template>
  <div class="search-result row">
    <div class="col">
      <span>{{ brewery.name }}</span>
      <span>{{ brewery.phone }}</span>
      <span>{{ brewery.address }}</span>
      <span v-if="brewery.address2">{{ brewery.address2 }}</span>
      <span v-if="brewery.address3">{{ brewery.address3 }}</span>
      <span>{{ brewery.city }}, {{ brewery.state }} {{ brewery.postalCode }}</span>
      <span v-if="brewery.province">{{ brewery.province }}</span>
      <span>{{ brewery.country }}</span>
    </div>
    <div class="col">
      <span>{{ brewery.type }}</span>
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