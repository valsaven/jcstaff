<template>
  <div class="jc-header">
    <!-- Logo -->
    <div class="jc-header__logo">
      <a href="http://www.jcstaff.co.jp" target="_blank">
        <img src="/logo.gif" class="logo" alt="J.C.STAFF" />
      </a>
    </div>

    <!-- Menu -->
    <ul class="jc-header__menu jc-header-menu">
      <li
        v-for="item in menuItems"
        class="menu-item"
      >
        <!-- Text -->
        <div
          class="menu-item__text"
          v-text="item.toUpperCase()"
        />
        <!-- Underline -->
        <div :class="`menu-item__underline menu-item__underline--${item}`"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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

  mounted() {}
})
</script>

<style lang="scss">
.jc-header {
  align-items: center;
  border-left: 0.2rem solid;
  border-right: 0.2rem solid;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

.jc-header-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  list-style-type: none;
}

.menu-item {
  &__text {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 2px;
  }

  &__underline {
    height: 4px;
    width: 100%;

    &--company {
      background: rgb(49,125,185);
      background: linear-gradient(90deg, rgba(49,125,185,1) 45%, rgba(0,0,0,1) 55%);
    }

    &--works {
      background: rgb(197,61,67);
      background: linear-gradient(90deg, rgba(197,61,67,1) 45%, rgba(0,0,0,1) 55%);
    }

    &--recruit {
      background: rgb(39,169,59);
      background: linear-gradient(90deg, rgba(39,169,59,1) 45%, rgba(0,0,0,1) 55%);
    }

    &--contact {
      background: rgb(252,200,0);
      background: linear-gradient(90deg, rgba(252,200,0,1) 45%, rgba(0,0,0,1) 55%);
    }
  }
}
</style>
