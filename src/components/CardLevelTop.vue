<template>
  <div class="cardtop">
    <div class="cardscore">{{ dataObj.amount }}/{{ dataObj.max_level }}</div>
    <div class="cardbody">
      <span class="title">{{ dataObj.title }}</span>
      <div class="message">
        <div class="icon"></div>
        <span>{{ dataObj.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CardLevelTop",

  computed: {
    ...mapState({
      dataObj: "dados",
    }),
  },
};
</script>

<style scoped>
.cardtop {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 5px solid #3fb3f6;
  padding: 10px 20px;
  border-radius: 20px;
  background: #fff;
}
.cardtop .cardscore {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid #3fb3f6;
  border-radius: 50%;
  margin-right: 30px;
}
.cardtop .cardbody {
  display: flex;
  flex-direction: column;
}
.cardtop .cardbody .title {
  font-size: 1.5rem;
  font-weight: bold;
}
.cardtop .cardbody .message {
  display: flex;
  align-items: center;
}
.cardtop .cardbody .message .icon {
  width: 10px;
  height: 10px;
  border: 1px solid #3fb3f6;
  background: #3fb3f6;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
