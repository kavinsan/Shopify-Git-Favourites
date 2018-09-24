<template>
  <div>
    <app-header></app-header>

    <app-search id="search"></app-search>
    <!-- <app-starred id="starred"></app-starred> -->

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
import Starred from "../components/Starred.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-search": Search,
    "app-starred": Starred
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
