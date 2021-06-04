<template>
  <div class="dashboard">
    <img
    src="../images/logo.svg"
    alt="logo"
    srcset=""
    class="logo">
    <CategorySelector />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import CategorySelector from '@/components/CategorySelector.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    CategorySelector,
  },
  methods: {
    ...mapActions([
      'fetchProductsFromApi',
    ]),
  },
  mounted() {
    this.fetchProductsFromApi();
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

.dashboard{
  padding-top: 9em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo{
    display: flex;
    align-self: center;
    height: 100%;
    width: 19em;
    box-shadow: none;
  }

  .logo:hover {
    box-shadow: none;
  }
}
</style>
