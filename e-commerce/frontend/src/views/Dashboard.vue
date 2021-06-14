<template>
  <div class="dashboard">
    <img
    v-show="!rightMode"
    src="../images/logo.svg"
    alt="logo"
    srcset=""
    class="logo">

    <img
    v-show="rightMode"
    src="../images/wrong-hand.svg"
    alt="logo"
    srcset=""
    class="logo-hand">

    <img
    v-show="rightMode"
    src="../images/logo-wrong.svg"
    alt="logo"
    srcset=""
    class="wrong-logo">

    <CategorySelector />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import CategorySelector from '@/components/CategorySelector.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    CategorySelector,
  },

  computed: {
    ...mapState([
      'rightMode',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchProductsFromApi',
    ]),
  },
  mounted() {
    this.fetchProductsFromApi();
  },
  data() {
    return {
      showModal: false,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

.dashboard{
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrong-logo,
  .logo-hand,
  .logo{
    display: flex;
    align-self: center;
    height: 100%;
    width: 19em;
    box-shadow: none;
  }

  .wrong-logo:hover,
  .logo-hand:hover,
  .logo:hover {
    box-shadow: none;
  }
}

.logo-hand {
  transform: rotateY(180deg);
  font-size: 1.1em;
}

.wrong-logo {
  font-size: 1.2em;
}

</style>
