<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <v-container>
        <panel title="Register">
          <div class="pl-4 pr-4 pt-2 pb-2">
            <form
              name="tab-tracker-form"
              autocomplete="off">
              <v-text-field
              label="Email"
              v-model="email"
              ></v-text-field>
              <br>
              <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
              ></v-text-field>
              <br>
              <div class="error" v-html="error" />
              <br>
              <v-btn
              class="cyan"
              @click="register">
              Register
              </v-btn>
            </form>
          </div>
        </panel>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: red;
}

.container {
  max-width: 900px;
}
</style>
