<template>
    <div
    class="header"
    :class="{'header-left-mode': !rightMode}"
    >
        <nav
        class="nav"
        :class="{'right-nav': rightMode}"
        >
            <div
            class="nav__buttons"
            :class="{'right-mode-nav-buttons': rightMode}"
            >
                <section
                class="links"
                :class="{'right-mode-links': rightMode}"
                >
                    <router-link to="/cart" @click="scrollToTop">
                        <em class="fas fa-shopping-cart">
                            <p class="cart-number">{{getCartLength}}</p>
                        </em>
                    </router-link>
                    <router-link to="/wishlist" @click="scrollToTop">
                        <em class="far fa-heart">
                            <p class="wishlist-number">{{getWishlistLength}}</p>
                        </em>
                    </router-link>
                    <router-link to="/profile" @click="scrollToTop">
                        <em
                        class="far fa-user"
                        :class="{'right-mode-user': rightMode}"
                        ></em>
                    </router-link>
                </section>

                <div
                class='search'
                :class="{'right-mode-search': rightMode}"
                >
                    <router-link to="/search" @click="scrollToTop">
                        <em class="fas fa-search"></em>
                    </router-link>
                    <input
                    class="search__input"
                    type="text"
                    placeholder="Search something ..."
                    v-model="searchInput"
                    v-on:input="filterWithSearchInput"
                    />
                </div>
            </div>

            <router-link
            class="nav__logo"
            to="/"
            @click="scrollToTop"
            :class="{'right-mode-logo': rightMode}"
            >
                <img class="peace-logo" src="../images/peace.svg" alt="" srcset="">
            </router-link>
        </nav>
    </div>

    <div
    class="filtered-search"
    @click='emptyInput'
    >
        <ul
        v-for='product in filteredProducts'
        :key="product._id"
        class="filtered-search__products"
        >
          <SearchProduct
          :id='product._id'
          :name='product.name'
          :price='product.price'
          :image='product.images[0]'
          :category='product.category'
          />
        </ul>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';
import SearchProduct from '@/components/SearchProduct.vue';

export default defineComponent({
  name: 'Header',
  computed: {
    ...mapGetters([
      'getCartLength',
      'getWishlistLength',
    ]),

    ...mapState([
      'rightMode',
      'products',
    ]),

  },
  methods: {

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    emptyInput() {
      this.searchInput = '';
      this.filteredProducts = [];
    },

    filterWithSearchInput() {
      if (this.searchInput !== '') {
        this.filteredProducts = this.products
          .filter((product:any) => product.name.toLowerCase()
            .includes(this.searchInput.toLowerCase()))
          .slice(0, 5);
      } else {
        this.filteredProducts = [];
      }
    },
  },

  components: {
    SearchProduct,
  },
  data():any {
    return {
      searchInput: '',
      filteredProducts: [],
    };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";

* {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.header {
    position: fixed;
    width: 100%;
    background-color: $black;
    display: flex;
    flex-direction: column;
    z-index: 99;
}

.header-left-mode {
    cursor: url(https://cur.cursors-4u.net/cursors/cur-8/cur770.cur), auto;
}

.nav {
    display: flex;
    justify-content: space-between;
    margin: 1em 0em 1em 0em;

    &__buttons {
        display: flex;
        padding: 0;
        color: white;
        width: 100%;
    }

    &__logo {
        display: flex;
    }
}

.right-mode-nav-buttons {
    flex-direction: row-reverse;
}

.right-nav {
    flex-direction: row-reverse;
}

.right-mode-buttons {
    padding-right: 1em;
    flex-direction: row-reverse;
}

.right-mode-logo {
    padding-left: 2em;
}

.fa-shopping-cart,
.fa-heart,
.fa-user {
    font-size: 1.5em;
    color: $purple;
    width: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0.3em;

    &:hover {
        color: $light-purple;
    }
}

.fa-user {
    margin-right: 1em;
}

.peace-logo {
    margin-right: 1.5em;
}

.search {
    display: flex;
    align-self: center;
    background-color: white;
    border-radius: 1em;
    align-items: center;
    width: 60%;

    &__input {
        font-size: 1em;
        width: 85%;
        border: none;
        padding: 0.2em 0em;
    }

    &__input:focus {
        outline: none;
    }
}

.links {
    display: flex;
}

.cart-number,
.wishlist-number {
    font-weight: bold;
    font-size: 0.6em;
    position: fixed;
    color: white;
    margin: 1em 0em 0em 2em;
    padding: 0.2em 0.2em;
    background-color: $purple;
    border-radius: 50%;
    height: 1em;
    width: 1em;
    border: 2px solid $black;
    display: flex;
    justify-content: center;
}

.fa-search {
    padding: 0.2em 0.5em;
    transform: rotateY(180deg);
    color: $black;
}

.filtered-search {
    position: fixed;
    z-index: 98;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 1em;
    padding-top: 5em;
    width: 100%;
    border-radius: 1em;
    align-items: center;

    &__products {
        width: 80%;
        align-self: center;
    }
}

@media (max-width: 700px) {

    .nav__buttons {
        flex-direction: column;
    }

    .peace-logo {
        margin-bottom: 2.5em;
    }

    .right-mode-links {
        justify-content: flex-end;
    }

    .right-mode-logo {
        margin: 0em 0em 0em 0em;
    }

    .search {
        width: 100%;
        margin: 1em 0em 0em 3em;
    }

    .right-mode-search {
        margin: 1em 5em 0em 0em;
        width: 110%;
    }

    .right-mode-user {
        margin-right: 0.3em;
    }

    .filtered-search {
        padding-top: 8em;
    }
}

</style>
