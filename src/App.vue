<template>
  <div>
    <Menubar />
    <div class="layout">
      <Navbar />
      <Home />
    </div>
  </div>
</template>

<script>
import Menubar from "./components/Menubar.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./screens/Home.vue";

export default {
  name: "App",
  components: {
    Menubar,
    Navbar,
    Home,
  },
};
</script>

<style>
.layout {
  margin-left: 95px;
  background: #f7f7f7;
  height: 100vh;
}
</style>
