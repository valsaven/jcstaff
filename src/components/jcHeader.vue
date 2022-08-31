<template>
  <div class="jc-header">
    <!-- Logo -->
    <div class="jc-header-logo">
      <router-link
        v-slot="{ href, navigate, isActive }"
        to="/"
      >
        <img src="/logo.gif" class="logo" alt="J.C.STAFF" />
      </router-link>
    </div>

    <!-- Menu -->
    <ul class="jc-header-menu">
      <router-link
        v-for="(item, i) in menuItems"
        :key="i"
        v-slot="{ href, navigate, isActive }"
        :to="`/${item}`"
        custom
      >
        <li
          class="menu-item"
          @click="navigate"
        >
          <!-- Text -->
          <div
            class="menu-item__text"
            v-text="item.toUpperCase()"
          />

          <!-- Underline -->
          <div :class="`menu-item__underline menu-item__underline--${item}`"/>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      menuItems: [
        'company',
        'works',
        'recruit',
        'contact'
      ],
    }
  },

  computed: {},

  methods: {},

  mounted() {},
});
</script>

<style lang="scss">
.jc-header {
  align-items: center;
  border-left: .2rem solid;
  border-right: .2rem solid;
  display: flex;
  padding: 0 2rem;

  .jc-header-logo {
    border-right: 6px solid #b50a02;
    margin-right: 1.8rem;
  }

  .jc-header-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    list-style-type: none;

    .menu-item {
      cursor: pointer;

      &__text {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 2px;
      }

      &__underline {
        height: 4px;
        width: 100%;

        &--company {
          background: rgb(49, 125, 185);
          background: linear-gradient(90deg, rgba(49, 125, 185, 1) 45%, rgba(0, 0, 0, 1) 55%);
        }

        &--works {
          background: rgb(197, 61, 67);
          background: linear-gradient(90deg, rgba(197, 61, 67, 1) 45%, rgba(0, 0, 0, 1) 55%);
        }

        &--recruit {
          background: rgb(39, 169, 59);
          background: linear-gradient(90deg, rgba(39, 169, 59, 1) 45%, rgba(0, 0, 0, 1) 55%);
        }

        &--contact {
          background: rgb(252, 200, 0);
          background: linear-gradient(90deg, rgba(252, 200, 0, 1) 45%, rgba(0, 0, 0, 1) 55%);
        }
      }
    }
  }

  @media only screen and (max-width: 639px) {
    flex-wrap: wrap;
    padding: 0;

    .jc-header-logo {
      border: none;
    }
  }
}
</style>
