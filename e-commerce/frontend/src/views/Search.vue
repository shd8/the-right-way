<template>
  <p>Search works with a list of {{category}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['category'],
  name: 'Search',
  components: {
  },
});
</script>
