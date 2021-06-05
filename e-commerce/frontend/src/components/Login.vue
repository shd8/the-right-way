<template>
    <div class="profile-container">
        <i class="fas fa-user"></i>
        <hr class="hrItem">
        <h2 class="h2Item">
            Login or create an account to buy stuff, save your Wishlist and your conversations !
        </h2>
        <hr class="hrItem">

        <div class='email custom-input'>
            <i class="fas fa-at"></i>
            <input type="text" placeholder="email ..."/>
        </div>

        <div class='password custom-input'>
            <i class="fas fa-key"></i>
            <input type="password" placeholder="password ..."/>
        </div>

     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  computed: {
    ...mapGetters([
      'getCartLength',
      'getWishlistLength',
    ]),
  },
  name: 'Login',
  components: {
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

.profile-container {
    padding-top: 7em;
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

</style>
