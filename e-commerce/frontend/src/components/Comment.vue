<template>
    <span class="comment">
        <span class='head'>
            <p class="head__username">{{user}}</p>
            <div class="head__rate">
                <p class="rate">{{rating}}</p>
                <i class="fas fa-star"></i>
            </div>
        </span>
        <p class="content">{{comment}}</p>
    </span>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import {
  mapActions,
  mapGetters,
  useStore,
} from 'vuex';

export default defineComponent({
  props: ['user', 'rating', 'comment'],
  name: 'Comment',
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
    onMounted(() => {
      store.dispatch('fetchProductsFromApi');
    });
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

.comment {
    width: 70%;
    max-width: 30em;
    background: $light-purple;
    margin: 1em 0em;
    border-radius: 1em 1em 0em 1em;
    padding: 1.5em 2em;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.head {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1em;

    &__rate {
        display: flex;
        align-items: center;
    }
}

.content {
    line-height: 2em;
}

.rate {
    padding-right: 0.5em;
}

.fa-star {
    font-size: 1.5em;
}

@media (min-width: 600px) {
    .comment {
        width: 70em;
    }
}

</style>
