<template>
  <nav id="nav">
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
    <router-link to="/">
        <img class="peace-logo" src="../images/peace.svg" alt="" srcset="">
    </router-link>
    </nav>
    <div class='search'>
        <router-link to="/search">
            <i class="fas fa-search"></i>
        </router-link>
        <input type="text"/>
    </div>
    <router-view/>
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

* {
    background-color: $black;
}

</style>
