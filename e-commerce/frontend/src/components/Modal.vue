<template>
    <div :class="['modal', displayModalClass]" @click="toggleModal">
        <div :class="['modal__window', displayWindowClass]" @click.stop>
            <div v-show="isModalOpen">
                <slot name="header">
                    <div class="modal__header p-6 pt-4 pb-4">
                        <button
                            class="modal__header-button"
                            icon="menu-close"
                            icon-size="xs"
                            color="grey-2"
                            hide-label
                            @click="toggleModal"
                        >
                          <i class="far fa-times-circle"></i>
                        </button>
                    </div>
                </slot>
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
/* eslint-disable no-unused-expressions */

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  components: { },
  props: ['isModalOpen'],

  computed: {
    displayModalClass():any {
      return this.isModalOpen ? 'modal--displayed' : '';
    },

    displayWindowClass():any {
      return this.isModalOpen ? 'modal__window--displayed' : '';
    },
  },
  watch: {
    isModalOpen(value:boolean):void {
      value
        ? this.body.classList.add('body--overflow-hidden')
        : this.body.classList.remove('body--overflow-hidden');
    },
  },
  mounted() {
    this.isModalOpen ? this.body.classList.add('body--overflow-hidden') : '';
  },
  unmounted(): void {
    this.body.classList.remove('body--overflow-hidden');
  },
  methods: {
    toggleModal() {
      this.$emit('toggle-modal');
    },
  },
  data() {
    return { body: document.body };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

// @include mq($from: tablet) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100vw;
//     height: 100vh;
// }
.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease;
    visibility: hidden;
    opacity: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;

    &--displayed {
    visibility: visible;
    opacity: 1;
    overflow-y: scroll;
}
    &__window {
        position: relative;
        transition: height ease-in 0.3s;
        transition: opacity ease-in 0.2s;
        background: get-color('white');
        width: rem(725px);
        height: 100vh;
// @include mq($from: tablet) {
//     transform: translateY(-70%);
//     transition: all 500ms ease;
//     height: auto;
// }
    &--displayed {
        transform: translateY(0%);
    }
}
    &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px get-color('grey-5');
    // @include mq($from: tablet) {
    //     position: relative;
    //     justify-content: center;
    // }
    &-title {
        font-size: rem(22px);
        font-weight: get-font-weight('bold');
    }
    }
    //&__header-button {
    // @include mq($from: tablet) {
    //         position: absolute;
    //         top: rem(16px);
    //         right: rem(16px);
    //     }
   // }
        .button {
          padding: 0;

          &-icon {
              width: auto;
          }
        }
}

.modal__header-button {
  border: none;
  background-color: white;
  border-radius: 3em;
  position: absolute;
  right: 2em;
  top: 1em;
  cursor: pointer;
}

.fa-times-circle {
  color: $purple;
  font-size: 5em;
}
</style>
