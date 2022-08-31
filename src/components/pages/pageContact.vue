<template>
  <div class="contact">
    <div class="sidebar">Mailform ►</div>

    <div class="page">
      <div class="page__header">
        <span>メールフォーム</span>
      </div>
      <div class="page__body"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
    }
  },

  computed: {},

  methods: {},

  mounted() {}
})
</script>

<style lang="scss">
.contact {
  border-left: .2rem solid;
  border-right: .2rem solid;
  display: flex;
  height: auto;

  .sidebar {
    background-color: #f6b506;
    color: #fff;
    width: 248px;
    // max-width: 250px;
  }

  .page {
    width: 100%;

    &__header {
      background: rgb(242,162,29);
      background: linear-gradient(90deg, rgba(242,162,29,1) 92%, rgba(252,210,50,1) 92%, rgba(253,215,71,1) 94%, rgba(255,226,114,1) 94%, rgba(255,235,122,1) 96%, rgba(254,244,130,1) 96%, rgba(255,250,193,1) 98%, rgba(255,255,255,1) 98%);
      color: #fff;
      font-size: 2.2rem;
      height: 1.8rem;
      padding: 1.2rem 1.6rem;
    }
  }
}
</style>
