<template>
    <div class="header">
        <nav
        class="nav"
        :class="{'right-nav': rightMode}"
        >
            <div
            class="nav__buttons"
            :class="{'right-mode-buttons': rightMode}"
            >
                <router-link to="/cart" @click="scrollToTop">
                    <i class="fas fa-shopping-cart">
                        <p class="cart-number">{{getCartLength}}</p>
                    </i>
                </router-link>
                <router-link to="/wishlist" @click="scrollToTop">
                    <i class="far fa-heart">
                        <p class="wishlist-number">{{getWishlistLength}}</p>
                    </i>
                </router-link>
                <router-link to="/profile" @click="scrollToTop">
                    <i class="far fa-user"></i>
                </router-link>
            </div>
            <router-link
            class="nav__logo"
            to="/"
            @click="scrollToTop"
            :class="{'right-mode-logo': rightMode}"
            >
                <img class="peace-logo" src="../images/peace.svg" alt="" srcset="">
            </router-link>
        </nav>
        <div class='search'>
                <router-link to="/search" @click="scrollToTop">
                    <i class="fas fa-search"></i>
                </router-link>
                <input class="search__input" type="text" placeholder="Search something ..."/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapGetters([
      'getCartLength',
      'getWishlistLength',
    ]),

    ...mapState([
      'rightMode',
    ]),
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  name: 'Header',
  components: {
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";

* {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.header {
    position: fixed;
    width: 100%;
    background-color: $black;
    display: flex;
    flex-direction: column;
    z-index: 99;
}

.nav {
    display: flex;
    justify-content: space-between;
    margin: 1em 0em 1em 1em;

    &__buttons {
        display: flex;
        padding: 0;
        color: white;
    }

    &__logo {
        display: flex;
    }
}

.right-nav {
    flex-direction: row-reverse;
}

.right-mode-buttons {
    padding-right: 1em;
    flex-direction: row-reverse;
}

.right-mode-logo {
    padding-left: 1em;
}

.fa-shopping-cart,
.fa-heart,
.fa-user {
    font-size: 1.5em;
    color: $purple;
    width: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0.3em;

    &:hover {
        color: $light-purple;
    }
}

.peace-logo {
    margin-right: 2.5em;
}

.search {
    display: flex;
    align-self: center;
    background-color: white;
    margin-bottom: 1em;
    width: 80%;
    border-radius: 1em;
    align-items: center;

    &__input {
        font-size: 1em;
        width: 85%;
        border: none;
        padding: 0.2em 0em;
    }

    &__input:focus {
        outline: none;
    }
}

.cart-number,
.wishlist-number {
    font-weight: bold;
    font-size: 0.6em;
    position: fixed;
    color: white;
    margin: 1em 0em 0em 2em;
    padding: 0.2em 0.2em;
    background-color: $purple;
    border-radius: 50%;
    height: 1em;
    width: 1em;
    border: 2px solid $black;
    display: flex;
    justify-content: center;
}

.fa-search {
    padding: 0.2em 0.5em;
    transform: rotateY(180deg);
    color: $black;
}

</style>
