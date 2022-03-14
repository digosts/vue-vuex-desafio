<template>
  <div class="container">
    <card-level-top></card-level-top>
    <div class="title">
      <h4>Próximos Níveis:</h4>
    </div>
    <card-level></card-level>
  </div>
</template>

<script>
import CardLevelTop from "../components/CardLevelTop.vue";
import CardLevel from "../components/Cardlevel.vue";

export default {
  name: "Home",

  components: {
    CardLevel,
    CardLevelTop,
  },

  mounted() {
    this.$store.dispatch("getDados");
  },
};
</script>

<style scoped>
.container {
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.title {
  width: 100%;
  margin: 0px 0 10px 0;
}
.title h4 {
  font-weight: bold;
}
</style>
