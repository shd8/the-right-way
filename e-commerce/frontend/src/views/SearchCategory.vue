<template>
<div class="search">
<p>Search works with a list of {{category}}</p>
  <ul v-for='product in getProducts' :key="product._id">
    <li>{{product}}</li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  mapActions,
  mapGetters,
  useStore,
} from 'vuex';

export default defineComponent({
  props: ['category'],
  name: 'SearchCategory',
  components: {
  },
  computed: {
    ...mapGetters([
      'getProducts',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProductsFromApi',
    ]),
  },
  setup() {
    const store = useStore();
    store.dispatch('fetchProductsFromApi');
    return {};
  },
});
</script>

<style scoped lang="scss">

.search {
  padding-top: 7em;
}
</style>
