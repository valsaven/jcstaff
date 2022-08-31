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
      <li class="jc-header-menu__item">COMPANY</li>
      <li class="jc-header-menu__item">WORKS</li>
      <li class="jc-header-menu__item">RECRUIT</li>
      <li class="jc-header-menu__item">CONTACT</li>
    </ul>
  </div>
</template>

<style lang="scss">
.jc-header {
  align-items: center;
  display: flex;
  justify-content: center;
}

.jc-header-menu {
  display: flex;
  gap: 1.2rem;
  list-style-type: none;

  &__item {
    font-size: 1.6rem;
    font-weight: bold;
  }
}
</style>
