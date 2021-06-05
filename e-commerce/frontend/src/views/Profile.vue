<template>
  <p>Profile works</p>
  <Login />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    Login,
  },
});
</script>
