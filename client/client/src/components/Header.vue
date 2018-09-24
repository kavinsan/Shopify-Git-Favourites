<template>
  <header>
      <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {

  data () {
    return {
        title: "My Github Favourites"
    }
  }
}
</script>

<style scoped>
    header {
        background: purple;
    }
    h1 {
        color: white;
        text-align: center;
    }
</style>
