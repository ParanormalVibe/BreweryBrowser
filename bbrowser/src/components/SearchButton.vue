<template>
  <button @click="onClick" class="btn btn-primary">Search</button>
</template>

<script>
export default {
  name: "SearchButton",
  emits: [ 'submit' ],
  methods: {
    onClick() {
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>

</style>