<template>
  <div class="card" v-for="obj in dataObj.infos" :key="obj.min_points">
    <div class="cardheader" :style="'background-color:' + obj.backcolor">
      <span>{{ obj.level }}</span>
      <span class="points">
        <q-icon name="lock" size="sm" />
        {{ obj.min_points }}
      </span>
    </div>
    <div class="cardbody">
      <div class="icon" :style="'background-color:' + obj.backcolor"></div>
      <span>A cada 100 pontos equivale a R$20,00</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CardLevel",

  computed: {
    ...mapState({
      dataObj: "dados",
    }),
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  width: calc(45% - 10px);
  margin-bottom: 30px;
}
.card .cardheader {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 1.5rem;
  color: #fff;
}
.card .cardheader .points {
  display: flex;
  align-items: center;
}
.card .cardbody {
  display: flex;
  align-items: center;
  background: #fff;
  margin-top: -20px;
  padding: 30px;
  border-radius: 10px;
}
.card .cardbody .icon {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
