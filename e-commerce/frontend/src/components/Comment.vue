<template>
    <div class="comment">
        <section class='head'>
            <span class="head__username">{{user}}</span>
            <div class="head__rate">
                <span class="rate">{{rating}}</span>
                <em class="fas fa-star"></em>
            </div>
        </section>
        <p class="comment__content">{{comment}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['user', 'rating', 'comment'],
  name: 'Comment',
  components: {
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import '../styles/_colors.scss';

.comment {
    width: 70%;
    max-width: 30em;
    background: $light-purple;
    margin: 1em 0em;
    border-radius: 1em 1em 0em 1em;
    padding: 1.5em 2em;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 5px 10px 10px rgba(0,0,0,0.22);

    &__content {
        line-height: 2em;
    }
}

.head {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1em;

    &__username {
        font-size: 1.4em;
    }

    &__rate {
        display: flex;
        align-items: center;
    }
}

.rate {
    padding-right: 0.5em;
    font-size: 1.4em;
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
