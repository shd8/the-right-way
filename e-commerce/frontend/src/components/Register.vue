<template>
  <div
  v-if="!isUserLogged" class="register-container"
  >
      <em class="fas fa-user top-user-icon"></em>
      <hr class="hrItem top-hrItem">
      <h2 class="h2Item">
          Fill in all the fields and click on register
      </h2>
      <hr class="hrItem">
      <form
      class="login-form"
      method="post"
      @submit.prevent="register"
      >
      <p v-show="errors.length">
          <strong>Please, check the following errors:</strong>
          <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
      </p>
          <section class="login-form__credential credentials">
            <div class="form-credentials">
                <div class="credentials-title">
                  <h3>
                      <em class="fas fa-user fa-user-input"></em>
                      Credentials
                  </h3>
                  <hr class="hrItem">
              </div>

              <div class='custom-input username-input'>
                  <em class="fas fa-user fa-user-input"></em>
                  <input
                  name="username"
                  type="username"
                  placeholder="username ..."
                  v-model="username"
                  />
              </div>

              <div class='custom-input'>
                  <em class="fas fa-at"></em>
                  <input
                  name="email"
                  type="email"
                  placeholder="email ..."
                  v-model="email"
                  />
              </div>

              <div class='custom-input'>
                  <em class="fas fa-key"></em>
                  <input
                  autocomplete="pass"
                  type="password"
                  placeholder="password"
                  name="password"
                  v-model="password"
                  />
              </div>
            </div>

          <div class="form-address">
               <div class="address-title">
              <h3>
                  <em class="fas fa-map-marker-alt"></em>
                  Address
              </h3>
              <hr class="hrItem">
              </div>

              <div class='custom-input'>
                  <em class="fas fa-globe-europe"></em>
                  <input
                  type="text"
                  placeholder="country ..."
                  name="country"
                  v-model="country"
                  />
              </div>

              <div class='custom-input'>
                  <em class="fas fa-city"></em>
                  <input
                  type="text"
                  placeholder="city ..."
                  name="city"
                  v-model="city"
                  />
              </div>

              <div class='custom-input'>
                  <em class="fas fa-road"></em>
                  <input
                  type="text"
                  placeholder="street ..."
                  name="street"
                  v-model="street"
                  />
              </div>

              <div class='custom-input'>
                  <em class="far fa-envelope"></em>
                  <input
                  type="text"
                  placeholder="postal code ..."
                  name="postalCode"
                  v-model="postalCode"
                  />
              </div>
          </div>

          </section>

      </form>
          <section>
              <input
              class="login-form__login-button"
              type="submit"
              value="Register"
              />
          </section>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: 'Register',

  computed: {
    ...mapState([
      'isUserLogged',
    ]),

    ...mapActions([
      'registerUserRequest',
    ]),
  },

  methods: {
    register(e:Event) {
      e.preventDefault();

      if (
        this.username
        && this.email
        && this.password
        && this.country
        && this.city
        && this.street
        && this.postalCode
      ) {
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password,
          country: this.country,
          city: this.city,
          street: this.street,
          postalCode: this.postalCode,
        };
        this.registerUserRequest(userData);
      }

      this.errors = [];

      if (!this.username) {
        this.errors.push('Username is required');
      }
      if (!this.email) {
        this.errors.push('Email is required');
      }
      if (!this.password) {
        this.errors.push('Password is required');
      }
      if (!this.country) {
        this.errors.push('Country is required');
      }
      if (!this.city) {
        this.errors.push('City is required');
      }
      if (!this.street) {
        this.errors.push('Street is required');
      }
      if (!this.postalCode) {
        this.errors.push('Postal code is required');
      }
    },
  },

  data(): any {
    return {
      errors: [],
      username: '',
      email: '',
      password: '',
      country: '',
      city: '',
      street: '',
      postalCode: '',
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

.top-hrItem {
  margin-bottom: 0em;
}

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

.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .top-user-icon {
      display: none;
  }
}

.credentials-title,
.address-title {
    margin: 1em 0em 0em 1.5em;
}

.fa-user {
  color: $purple;
  font-size: 4em;
  padding: 0.5em;
}

.fa-user-input {
  font-size: 1em;
}

.fa-map-marker-alt {
  padding: 0.5em;
  color: $purple;
  font-size: 1em;
}

.hrItem {
  width: 90%;
}

.h2Item {
  padding-top: 0.5em;
  font-size: 1.5em;
}

.credentials {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.custom-input {
  width: 90%;
  margin: 1em 1em;
}

.form-credentials,
  .form-address {
    width: 100%;
  }

@media (min-width: 900px) {
  .register-container {
      .top-user-icon {
      display: block;
    }
  }
}

@media (min-width: 720px) {
  .form-credentials,
  .form-address {
    width: 50%;
  }

  .username-input {
    margin-top: 3.5em;
  }

  .credentials {
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 1em;
  }
}

</style>
