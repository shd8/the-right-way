<template>
  <div class="dashboard">
    <!-- <button @click='handleToggleModal'>
      modaliza
    </button>
    <Modal
    :isModalOpen="showModal"
    @toggleModal='toggleModal'
    >
    <div class="modalized-login">
      <Login />
    </div>
    </Modal> -->
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
import Modal from '@/components/Modal.vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    CategorySelector,
    // Modal,
    // Login,
  },
  methods: {
    ...mapActions([
      'fetchProductsFromApi',
    ]),
    toggleModal() {
      this.showModal = !this.showModal;
    },

    handleToggleModal() {
      this.toggleModal();
    },
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

.modalized-login {
  background-color: white;
  border-radius: 1em;
}

</style>
