<template>
  <div>
    <NavBar />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/frontend/Navbar/Navbar.vue";
import Footer from "@/components/frontend/Footer/Footer.vue";

export default {
  name: "Layout",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
