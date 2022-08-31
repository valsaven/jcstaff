<template>
  <div class="jc-footer">
    <div>
      <router-link
        v-slot="{ navigate }"
        to="/"
        custom
      >
        <span class="jc-footer__link" @click="navigate">>>J.C.STAFF WEBサイト TOPへ</span>
      </router-link>
    </div>
    <div>
      © J.C.STAFF Co.,Ltd.
    </div>
  </div>
</template>

<style lang="scss">
.jc-footer {
  align-items: center;
  background-color: #000;
  color: #fff;
  display: flex;
  height: 3rem;
  justify-content: space-around;

  &__link {
    cursor: pointer;
  }
}
</style>
