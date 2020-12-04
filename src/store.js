import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //data
    allUsers: [
      {
        id: 1,
        email: "hoza",
        userId: "hoza",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://goo.gl/oqLfJR"
      },
      {
        id: 2,
        email: "max",
        userId: "max",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9"
      },
      {
        id: 3,
        email: "lego",
        userId: "lego",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD"
      }
    ],
    isLogin: false,
    isLoginError: false
  },
  getters: {
    //computed
    allUsersCount: (state) => {
      return state.allUsers.length;
    },
    countOfSeoul: (state) => {
      let count = 0;
      state.allUsers.forEach((user) => {
        if (user.address === "Seoul") {
          count++;
        }
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    }
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    },
    loginSuccess(state){
      state.isLogin = true;
    },
    loginError(state){
      state.isLogin = false;
      state.isLoginError = true;
    }
  },
  actions: {
    addUsers: ({ commit }, payload) => {
      commit("addUsers", payload);
    },
    login({ state, commit}, loginObj){
      let selectedUser = null;
      state.allUsers.forEach(user => {
        if(user.email === loginObj.email) selectedUser = user;
      });
      selectedUser === null
        ? commit("loginError")
        : selectedUser.password !== loginObj.password
          ? commit("loginError")
          : commit("loginSuccess");
    }
  }
});
