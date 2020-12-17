import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //data
    allUsers: [
      {
        userId: "hoza",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: ""
      },
      {
        userId: "max",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: ""
      },
      {
        userId: "lego",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: ""
      }
    ],
    User: {
      userId: null,
      password: null,
      name: null,
      address: null,
      src: ""
    },
    isLogin: false,
    isLoginError: false,
    userInfo: null
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
    },
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    },
    loginSuccess(state, payload){
      state.isLogin = true;
      state.isloginError = false;
      state.userInfo = payload;
    },
    loginError(state){
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
    selectUser: (state, payload) => {
      state.User = payload;
    },
  },
  actions: {
    addUsers: ({ commit }, payload) => {
      commit("addUsers", payload);
    },
    login({ state, commit}, loginObj){
      let selectedUser = null;
      state.allUsers.forEach(user => {
        if(user.userId === loginObj.userId) selectedUser = user;
      });
      if(selectedUser === null || selectedUser.password!== loginObj.password){
        commit("loginError");
      }else{
        commit("loginSuccess", selectedUser);
        //this.$router.push({ name: "mypage});
        router.push({name: "mypage"});
      }
    },
    logout({commit}) {
      commit("logout");
      router.push({name: "login"});
    },
    selectUser: ({ state, commit }, payload) => {
      if(state.User.userId === payload.userId){
        state.User = null;
      }
      commit("selectUser", payload);
    },
  }
});
