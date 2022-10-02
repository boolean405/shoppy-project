<template>
  <!-- <NavBar></NavBar> -->
  <NavBar :cartCount="cartCount"></NavBar>
  <!-- <NavBar></NavBar> -->

  <router-view />

  <!-- footer section -->
  <FooterComp></FooterComp>
  <!-- footer section -->
</template>

<script>
// import cartCount from './components/ProductCard.vue'
// console.log(cartCount)
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
export default {

  components: { NavBar, FooterComp },

}
</script>

<style>
footer a {
  text-decoration: none;

}
</style>
