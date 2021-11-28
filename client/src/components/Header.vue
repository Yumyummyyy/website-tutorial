<template>
  <div>
    <v-toolbar
      fixed
      height=72
      elevation=4
      color=rgb(255,0,0)
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-4">
        <span
          class="home"
          @click="navigateTo({name: 'root'})">
          TabTracker
        </span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn
          flat
          dark
          @click="navigateTo({name: 'songs'})">
          browse
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          dark
          @click="navigateTo({name: 'login'})">
          Login
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          flat
          dark
          @click="logout">
          Logout
        </v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          dark
          @click="navigateTo({name: 'register'})">
          Sign Up
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
