<template>
    <div
    v-if="!isUserLogged" class="register-container"
    >
        <i class="fas fa-user"></i>
        <hr class="hrItem">
        <h2 class="h2Item">
            Fill in all the fields and click on register
        </h2>
        <hr class="hrItem">
        <form class="login-form" action="" @submit.prevent="loginButtonPressed">
            <span class="login-form__credential credentials">

                <div class="credentials-title">
                    <h3>
                        <i class="fas fa-user fa-user-input"></i>
                        Credentials
                    </h3>
                    <hr class="hrItem">
                </div>

                <div class='custom-input'>
                    <i class="fas fa-user fa-user-input"></i>
                    <input type="text" placeholder="username ..."/>
                </div>

                <div class='custom-input'>
                    <i class="fas fa-at"></i>
                    <input type="email" placeholder="email ..."/>
                </div>

                <div class='custom-input'>
                    <i class="fas fa-key"></i>
                    <input autocomplete="pass" type="password" placeholder="password"/>
                </div>

                <div class="address-title">
                <h3>
                    <i class="fas fa-map-marker-alt"></i>
                    Address
                </h3>
                <hr class="hrItem">
                </div>

                <div class='custom-input'>
                    <i class="fas fa-globe-europe"></i>
                    <input type="text" placeholder="country ..."/>
                </div>

                <div class='custom-input'>
                    <i class="fas fa-city"></i>
                    <input type="text" placeholder="city ..."/>
                </div>

                <div class='custom-input'>
                    <i class="fas fa-road"></i>
                    <input type="text" placeholder="street ..."/>
                </div>

                <div class='custom-input'>
                    <i class="far fa-envelope"></i>
                    <input type="text" placeholder="postal code ..."/>
                </div>
            </span>

            <span>
                <button
                class="login-form__login-button"
                @click="logUser">
                    Register
                </button>
            </span>
        </form>
    </div>

</template>

<script lang="ts">
/* eslint-disable no-unused-expressions */

import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';

export default defineComponent({
  name: 'Register',

  computed: {
    ...mapState([
      'isUserLogged',
    ]),
    ...mapMutations([
      'logUser',
    ]),
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

.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
    flex-direction: column;
}

@media (min-width: 800px) {
    .credentials {
        // flex-direction: row;
        width: 60%;
    }
}

</style>
