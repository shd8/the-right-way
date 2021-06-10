<template>

  <div v-if='$store.state.isUserLogged' class="logged">
    <i class="fas fa-user"></i>
    <h2 class="h2Item">Welcome {{currentUser.username}}</h2>
    <hr class="hrItem">
    <h3>* Remember to check your data before making a purchase</h3>
    <ul id='user-data' class="logged__user-data">
      <li>
        <p>Username: <span>{{currentUser.username}}</span></p>
      </li>
      <li>
        <p>Email: <span>{{currentUser.email}}</span></p>
      </li>
      <li>
      <p>Password <span>*************</span></p>
      </li>
      <h3 class="shipping-title">Shipping address:</h3>
      <hr class="hrItem shippingHr">
      <ul>
        <li>
          <p>
          Country: <span>{{currentUser.address.country}}</span>
          </p>
        </li>
        <li>
          <p>
          City: <span>{{currentUser.address.city}}</span>
          </p>
        </li>
        <li>
          <p>
          Street: <span>{{currentUser.address.street}}</span>
          </p>
        </li>
        <li>
        <p>
          Postal code: <span>{{currentUser.address.postalCode}}</span>
        </p>
        </li>
      </ul>
    </ul>

    <span
    class="cart-length"
    :class="{'right-mode-cart-length': rightMode}"
    >
      <router-link to="/cart" @click="scrollToTop">
          <i class="fas fa-shopping-cart"></i>
      </router-link>
      <p class="cart-number">You have {{getCartLength}} products in the cart!</p>
    </span>

    <span
    class="wishlist-length"
    :class="{'right-mode-wishlist-length': rightMode}"
    >
      <router-link to="/wishlist" @click="scrollToTop">
          <i class="far fa-heart"></i>
      </router-link>
      <p class="wishlist-number">You have {{getWishlistLength}} products in the wishlist!</p>
    </span>

    <span>
      <button
      class="logout-button"
      @click="logoutUser"
      >Logout</button>
    </span>

  </div>

  <div
  v-else
  class="notLogged">
    <LoginRegister />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginRegister from '@/components/LoginRegister.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: 'Profile',
  components: {
    LoginRegister,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    ...mapState([
      'currentUser',
      'rightMode',
    ]),

    ...mapGetters([
      'getCartLength',
      'getWishlistLength',
    ]),

    ...mapMutations([
      'logoutUser',
    ]),
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

h3 {
  color: $purple;
  width: 80%;
  font-size: 1em;
  text-align: left;
  padding-bottom: 2em;
}

.shipping-title {
  padding: 1em 0 0.5em 0em;
}

.shippingHr {
  margin-bottom: 1em;
}

li {
  list-style: none;
  width: 80%;
}

span {
  color: $purple;
}

p {
  display: flex;
  justify-content: space-between;
}

.fa-user,
.fa-shopping-cart,
.fa-heart {
  color: $purple;
  font-size: 4em;
  padding: 0.5em;
}

.cart-number,
.wishlist-number {
  font-size: 1em;
  color: black;
}

.cart-length,
.wishlist-length {
  display: flex;
  align-items: center;
  width: 80%;
}

.right-mode-cart-length,
.right-mode-wishlist-length {
  flex-direction: row-reverse;
}

.notLogged {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logged {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0em 0em 2em 0em;

  &__user-data {
    width: 80%;
    font-size: 1.3em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
.register-button {
    background-color: white;
    border: none;
    font-size: 1.2em;
    color: $purple;
    text-decoration: underline 0.2em;
    padding-left: 0.5em;
    cursor: pointer;
}

.logout-button {
  background-color: $light-purple;
  font-size: 1.5em;
  border-style: none;
  border-radius: 1em;
  padding: 0.2em 0.5em;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin-bottom: 1em;

  &:hover {
    box-shadow: 3px 3px 10px 7px rgba(0,0,0, 0.22);
  }
}

@media (min-width: 720px) {

  #user-data {
    width: 60%;
  }
}

</style >
