<template>
  <div class="search-result row">
    <div class="col left-details">
      <span>{{ brewery.name }}</span>
      <span>{{ brewery.phone }}</span>
      <span>{{ brewery.address }}</span>
      <span v-if="brewery.address_2">{{ brewery.address_2 }}</span>
      <span v-if="brewery.address_3">{{ brewery.address_3 }}</span>
      <span>{{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }}</span>
      <span v-if="brewery.county_province">{{ brewery.county_province }}</span>
      <span>{{ brewery.country }}</span>
    </div>
    <div class="col right-details">
      <span>{{ brewery.id }}</span>
      <span>{{ brewery.brewery_type }}</span>
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
  width: 90%;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}
span {
  color: white;
}
.left-details {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.right-details {
  text-align: right;
  display: flex;
  flex-direction: column;
}
</style>