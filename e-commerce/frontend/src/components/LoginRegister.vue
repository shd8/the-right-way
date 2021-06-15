<template>

  <div
  class="login"
  v-show="!showRegister"
  >
    <Login />
    <p v-if='!isUserLogged'>Not registered yet?
      <button
      class="register-button"
      @click="handleToggleLogin"
      >
        Click here !
      </button>
    </p>
  </div>

  <div
  class='register'
  v-show="showRegister"
  >
    <Register />
    <p v-if='!isUserLogged'>Do you already have an account?
        <button
        class="register-button"
        @click="handleToggleLogin">
            Enter here !
        </button>
    </p>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'LoginRegister',
  components: {
    Login,
    Register,
  },
  computed: {
    ...mapState([
      'isUserLogged',
    ]),
  },
  methods: {

    handleToggleLogin() {
      this.toggleLogin();
    },

    toggleLogin() {
      this.showRegister = !this.showRegister;
    },

  },
  data() {
    return {
      showRegister: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

.register-button {
  background-color: white;
  border: none;
  font-size: 1.2em;
  color: $purple;
  text-decoration: underline 0.2em;
  padding-left: 0.5em;
  cursor: pointer;
}

.login,
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register--displayed {
  display: none;
}

@media (min-width: 800px) {

  .register {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
}

</style >
