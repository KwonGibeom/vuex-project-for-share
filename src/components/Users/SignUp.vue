<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field label="아이디" v-model="userId" ref="userId"></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
      ref="password"
    ></v-text-field>
    <v-text-field label="이름" v-model="name" ref="name"></v-text-field>
    <v-text-field label="주소" v-model="address"></v-text-field>
    <v-text-field label="이미지" v-model="src"></v-text-field>
    <v-btn @click="clearForm">초기화</v-btn>
    <v-btn v-if="isSignUp" @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
//import { EventBus } from "@/main.js";
//import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userId: null,
      password: null,
      name: null,
      address: null,
      src: null,
      isSignCheck: true,
      isSignUp: true
    };
  },
  methods: {
    //...mapMutations(['addUsers']),
    ...mapActions(["addUsers"]),
    signUp() {
      if(this.validation()){
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        };
        //EventBus.$emit('signUp', userObj)
        //this.addUsers(userObj)
        //this.$store.commit('addUsers', userObj)
        //this.$store.dispatch('addUsers', userObj)
        this.addUsers(userObj);
        this.clearForm();
      }
    },
    clearForm() {
      (this.userId = null),
      (this.password = null),
      (this.name = null),
      (this.address = null),
      (this.src = null);
      this.isSignUp = true;
    },
    validation() {
      if(this.userId === null){
        alert("아이디를 입력해주세요.");
        this.$refs.userId.focus();
        return false;
      }
      this.$store.state.allUsers.forEach((user) => {
        if(user.userId === this.userId){
          this.isSignCheck = false;
          return false;
        }
      });
      if(!this.isSignCheck){
        alert("중복된 아이디가 존재합니다.");
        this.$refs.userId.focus();
        return false;
      }
      if(this.password === null){
        alert("비밀번호를 입력해주세요.");
        this.$refs.password.focus();
        return false;
      }
      if(this.name === null){
        alert("이름을 입력해주세요.");
        this.$refs.name.focus();
        return false;
      }
      return true;
    },
  },
  computed:{ 
    setUser() {
      return this.$store.state.User;
    } 
  }, 
  watch:{ 
    setUser(val) {
      this.userId = val.userId;
      this.password = val.password;
      this.name = val.name;
      this.address = val.address;
      this.src = val.src;
      this.isSignUp = false;
    }
  },
  mounted() {
    this.userId = this.$store.state.User.userId;
    this.password = this.$store.state.User.password;
    this.name = this.$store.state.User.name;
    this.address = this.$store.state.User.address;
    this.src = this.$store.state.User.src;
    this.userId === null ? this.isSignUp = true : this.isSignUp = false;
  }
};
</script>
