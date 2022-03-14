import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    dados: {},
  },
  mutations: {
    SET_Dados(state, dados) {
      state.dados = dados;
    },
  },
  actions: {
    getDados({ commit }) {
      axios
        .get("http://homapi.flip.net.br/flip-reward/api/v1/test/hie#00954C")
        .then((response) => response.data)
        .then((items) => {
          console.log(items);
          commit("SET_Dados", items);
        });
    },
  },
  modules: {},
});
