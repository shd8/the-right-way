<template>
    <div class="header">
        <nav class="nav">
            <div class="nav__buttons">
                <router-link to="/cart">
                    <i class="fas fa-shopping-cart"></i>
                </router-link>
                <router-link to="/wishlist">
                    <i class="far fa-heart"></i>
                </router-link>
                <router-link to="/profile">
                    <i class="far fa-user"></i>
                </router-link>
            </div>
            <router-link class="nav__logo" to="/">
                <img class="peace-logo" src="../images/peace.svg" alt="" srcset="">
            </router-link>
        </nav>
        <div class='search'>
                <router-link to="/search">
                    <i class="fas fa-search"></i>
                </router-link>
                <input class="search__input" type="text" placeholder="Search something ..."/>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: {
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";

.header {
    position: fixed;
    width: 100%;
    background-color: $black;
    display: flex;
    flex-direction: column;
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

.fa-shopping-cart,
.fa-heart,
.fa-user {
    font-size: 1.5em;
    color: $black;
    background-color: $grey;
    height: 2em;
    width: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0.3em;
}

.peace-logo {
    margin-right: 2em;
}

.search {
    display: flex;
    align-self: center;
    background-color: white;
    margin-bottom: 1.5em;
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

.fa-search {
    padding: 0.2em 0.5em;
    transform: rotateY(180deg);
    color: $black;
}

</style>
