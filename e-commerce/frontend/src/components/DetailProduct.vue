<template>
  <div
  v-if='!isUserLogged'
  :class="['modal-heart', displayModalClass]"
  >
    <button
    class="custom-button"
    @click='handleToggleModal'
    :class="{'modal-heart-right-mode': rightMode}"
    >
      <em class="far fa-heart"></em>
    </button>
      <Modal
      :isModalOpen="showModal"
      @toggleModal='toggleModal'
      >
        <div class="modalized-login">
          <LoginRegister />
        </div>
      </Modal>
  </div>

  <div v-if='!isUserLogged' :class="['modal-dollar', displayModalClass]">
    <button
    class="custom-button"
    @click='handleToggleModal'
    :class="{'modal-dollar-right-mode': rightMode}"
    >
      <em class="fas fa-dollar-sign"></em>
    </button>
      <Modal
      :isModalOpen="showModal"
      @toggleModal='toggleModal'
      >
        <div class="modalized-login">
          <LoginRegister />
        </div>
      </Modal>
  </div>

  <AddToWishlist
  :id='id'
  class="wishlist"
  v-if='isUserLogged'
  :class="{'wishlist-right-mode': rightMode}"
  />
  <AddToCart
  :id='id'
  class="cart"
  v-if="isUserLogged"
  :class="{'cart-right-mode': rightMode}"
  />

  <Carousel>
      <Slide v-for="slide in images" :key="slide">
        <img class="carouselItem" :src='slide' alt="" srcset="" @click="openImage(slide)">
      </Slide>
      <template #addons>
      <Navigation />
      <Pagination />
      </template>
  </Carousel>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import Modal from '@/components/Modal.vue';
import LoginRegister from '@/components/LoginRegister.vue';
import AddToWishlist from '@/components/AddToWishlist.vue';
import AddToCart from '@/components/AddToCart.vue';

import {
  Carousel,
  Pagination,
  Slide,
  Navigation,
} from 'vue3-carousel';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'DetailProduct',
  props: ['id', 'name', 'price', 'images'],
  components: {
    Carousel,
    Slide,
    Pagination,
    Modal,
    Navigation,
    LoginRegister,
    AddToWishlist,
    AddToCart,
  },

  computed: {
    ...mapActions([
      'retrieveFromUserWishlist',
    ]),

    ...mapState([
      'isUserLogged',
      'rightMode',
    ]),

    displayModalClass():any {
      return this.showModal ? 'modal-icon--displayed' : '';
    },
  },

  methods: {

    toggleModal() {
      this.showModal = !this.showModal;
    },

    handleToggleModal() {
      this.toggleModal();
    },

    openImage(url:string) {
      window.open(url, '_blank');
    },
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
@import "../styles/_mixins.scss";

em {
  color: $purple;
  font-size: 1.5em;
}

.product-name {
  color: $purple;
  padding-bottom: 1em;
}

.product-price {
  padding: 0.5em 0em;
}

.cart {
  margin: 7.5em 14em 0em 0em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.wishlist {
  margin: 24.5em 0em 0em 14em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.cart-right-mode {
  margin: 7em 0em 0em 13.5em;
}

.wishlist-right-mode {
  margin: 24em 13.5em 0em 0em;
}

.modal-heart,
.modal-dollar {
  position: absolute;
  z-index: 1;

  button {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
}

.modal-dollar {
  margin: 6em 11em 0em 0em;
}

.modal-heart {
  margin: 20em 0em 0em 11em;
}

.modal-heart-right-mode {
  margin: 0em 27.5em 0em 0em;
}

.modal-dollar-right-mode {
  margin: 0em 0em 0em 27.5em;
}

.modal-icon--displayed {
  z-index: 100;
}

.modal--displayed {
  padding-top: 5em;

  .modal-dollar {
    z-index: 100;
  }
}

@media (min-width: 600px) {
  .carousel {
    max-width: 34em;
  }

  .cart {
    margin: 5em 30em 0em 0em;
  }

  .wishlist {
    margin: 28em 0em 0em 31em;
  }

  .cart-right-mode {
    margin: 5em 0em 0em 30.5em;
  }

  .wishlist-right-mode {
    margin: 28em 31em 0em 0em;
  }

  button {
    font-size: 1.1em;
  }

  .carouselItem {
    height: 26em;
    width: 34em;
  }

  .add-to-wishlist {
    margin: 10em 36em 0em 0em;
  }

  .modal-dollar {
    margin: 6em 33.5em 0em 0em;
  }

  .modal-heart {
    margin: 31em 0em 0em 33em;
  }

  .modal-heart-right-mode {
    margin: 0em 60.5em 0em 0em;
  }

  .modal-dollar-right-mode {
    margin: 0em 0em 0em 61.5em;
  }
}

.modalized-login {
  background-color: white;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  cursor: pointer;
}

</style>
