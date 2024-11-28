<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from "@/components/frontend/Layout/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
/* Ajoutez ici des styles globaux si nécessaire */
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}
</style>
