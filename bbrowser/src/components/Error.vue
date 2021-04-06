<template>
  <div class="app-error">
    <h2>Uh oh!</h2>
    <p>Looks like something went wrong! Please try again later.</p>
  </div>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style scoped>
.app-error {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>