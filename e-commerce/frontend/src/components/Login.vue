<template>
    <div
    v-if="!isUserLogged" class="login-container"
    >
        <i class="fas fa-user"></i>
        <hr class="hrItem">
        <h2 class="h2Item">
            Login or create an account to buy stuff, save your Wishlist and your conversations !
        </h2>
        <hr class="hrItem">
        <form
        class="login-form"
        method="post"
        @submit.prevent="loginButtonPressed"
        >
        <p v-if="errors.length">
            <b>Please, check the following errors:</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
        <span class="login-form__credential credentials">
            <label
            class='email custom-input'
            for="email"
            >
                <i class="fas fa-at"></i>
                <input
                name="email"
                type="email"
                placeholder="email ..."
                v-model="email"
                />
            </label>

            <label
            class='password custom-input'
            for="password"
            >
                <i class="fas fa-key"></i>
                <input
                name="password"
                autocomplete="pass"
                type="password"
                placeholder="················"
                v-model="password"
                />
            </label>
        </span>

        <span>
            <input
            class="login-form__login-button"
            type="submit"
            value="Log in"
            />
        </span>
        </form>
     </div>

</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState([
      'isUserLogged',
    ]),

    ...mapActions([
      'logUserRequest',
    ]),

  },
  name: 'Login',
  methods: {
    loginButtonPressed(e:Event) {
      e.preventDefault();

      let result;

      if (this.email && this.password) {
        const userData = {
          email: this.email,
          password: this.password,
        };
        this.logUserRequest(userData);
        result = true;
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push('Email is required');
      }
      if (!this.password) {
        this.errors.push('Password is required');
      }

      return result;
    },
  },
  data():any {
    return {
      errors: [],
      email: '',
      password: '',
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

.login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__buttons {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
    }

    &__login-button {
        background-color: $light-purple;
        font-size: 1.5em;
        border-style: none;
        border-radius: 1em;
        padding: 0.2em 0.5em;
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        margin-bottom: 1em;
    }

    &__login-button:hover {
        box-shadow: 3px 3px 10px 7px rgba(0,0,0, 0.22);
    }
}

.login-container,
.logged-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fa-user {
  color: $purple;
  font-size: 4em;
  padding: 0.5em;
}

.hrItem {
    margin: 0;
}

.h2Item {
    padding-top: 0.5em;
    font-size: 1.5em;
}

.email {
    margin-top: 2em;
}

.custom-input {
    margin-bottom: 1em;
}

.credentials {
    width: 100%;
    display: flex;
    flex-direction: column;
}

@media (min-width: 800px) {
    .credentials {
        // flex-direction: row;
        width: 80%;
    }

    .email {
        margin-top: 2em;
    }

    .custom-input {
        margin-bottom: 2em;
    }
}

</style>
