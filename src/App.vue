<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile router :to="{ name: 'home' }" exact>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="{ name: 'users' }" exact>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLogin === false" router :to="{ name: 'login' }" exact>
          <v-list-tile-action>
            <v-icon>login</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <div v-else>
          <v-list-tile router :to="{ name: 'mypage' }" exact>
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Mypage</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$store.dispatch('logout')">
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-xs-center">
        <v-menu offset-y v-if="isLogin">
          <v-btn
            slot="activator"
            flat
            dark
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile router :to="{name: 'mypage'}">
              <v-list-tile-title>마이페이지</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              @click="$store.dispatch('logout')"
            >
              <v-list-tile-title>로그아웃</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat v-else router :to="{name: 'login'}">Log In</v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapState(["isLogin"])
  },
  // methods: {
  //   ...mapActions(["logout"])
  // },
  props: {
    source: String
  }
};
</script>
