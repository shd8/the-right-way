<template>
<div class="search">
<p>Search works with a list of {{category}}</p>
  <ul v-for='pokemon in getPokemons' :key="pokemon">
    <li>{{pokemon}}</li>
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
  name: 'Search',
  components: {
  },
  computed: {
    ...mapGetters([
      'getCount',
      'getPokemons',
    ]),
  },
  methods: {
    ...mapActions([
      'getPokemonsFromApi',
    ]),
  },
  setup() {
    const store = useStore();
    store.dispatch('getPokemonsFromApi');
    return {};
  },
});
</script>

<style scoped lang="scss">

.search {
  padding-top: 7em;
}
</style>
