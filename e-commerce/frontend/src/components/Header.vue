<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/wishlist">Wishlist</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/detail">Detail</router-link> |
    <router-link to="/search">Search</router-link> |
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
