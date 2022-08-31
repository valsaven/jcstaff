<template>
  <div class="jc-footer">
    <div>
      <router-link
        v-slot="{ href, navigate, isActive }"
        to="/"
      >
        >>J.C.STAFF WEBサイト TOPへ
      </router-link>
    </div>
    <div>
      © J.C.STAFF Co.,Ltd.
    </div>
  </div>
</template>

<style>
.jc-footer {
  background-color: #000;
  color: #fff;
}
</style>
