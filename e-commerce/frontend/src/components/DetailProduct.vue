<template>

  <div
  v-if='!isUserLogged'
  :class="['modal-heart', displayModalClass]"
  >
    <button
    @click='handleToggleModal'
    :class="{'modal-heart-right-mode': rightMode}"
    >
      <i class="far fa-heart"></i>
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
    @click='handleToggleModal'
    :class="{'modal-dollar-right-mode': rightMode}"
    >
      <i class="fas fa-dollar-sign"></i>
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
        <img class="carousel__item" :src='slide' alt="" srcset="">
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

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    handleToggleModal() {
      this.toggleModal();
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

button {
  background-color: white;
  width: 3em;
  height: 3em;
  border-style: none;
  border-radius: 50%;
  border: 1px solid $purple;

  &:hover {
    cursor: pointer;
  }
}

i {
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

.carousel {
  @include carousel;
}

.carousel__item {
  @include carouselItem;
}

.cart {
  margin: 8.5em 14em 0em 0em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.wishlist {
  margin: 25.5em 0em 0em 14em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.cart-right-mode {
  margin: 8.5em 0em 0em 13.5em;
}

.wishlist-right-mode {
  margin: 25.5em 13.5em 0em 0em;
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
  margin: 7em 11em 0em 0em;
}

.modal-heart {
  margin: 21em 0em 0em 11em;
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
    margin: 6.5em 30em 0em 0em;
  }

  .wishlist {
    margin: 29em 0em 0em 31em;
  }

  .cart-right-mode {
    margin: 6em 0em 0em 30.5em;
  }

  .wishlist-right-mode {
    margin: 29em 31em 0em 0em;
  }

  button {
    font-size: 1.1em;
  }

  .carousel__item {
    height: 26em;
    width: 34em;
  }

  .add-to-wishlist {
    margin: 10em 36em 0em 0em;
  }

  .modal-dollar {
    margin: 7em 33.5em 0em 0em;
  }

  .modal-heart {
    margin: 32em 0em 0em 33em;
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

</style>
