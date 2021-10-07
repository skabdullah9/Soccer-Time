<template>
  <div :class="$store.state.darkMode ? 'dark bg-gray-800' : 'bg-gray-100'">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
