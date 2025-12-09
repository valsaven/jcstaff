<template>
  <div class="recruit">
    <div class="sidebar">
      <div class="sidebar-space" >
        【 2023年度4月入社 】
      </div>

      <!-- TODO: Add links for sidebar items -->
      <div
        class="sidebar-item"
        @mouseover="hoverClassAdd"
        @mouseleave="hoverClassRemove"
      >
        <span>お問い合わせ</span><span class="sidebar-item__arrow">►</span>
      </div>

      <router-link
        v-slot="{ navigate }"
        to="/company"
        custom
      >
        <div
          class="sidebar-item"
          @mouseover="hoverClassAdd"
          @mouseleave="hoverClassRemove"
          @click="navigate"
        >
          <span>会社概要</span><span class="sidebar-item__arrow">►</span>
        </div>
      </router-link>
    </div>

    <div class="page">
      <div class="page__header">
        <span>求 人 案 内	</span>
      </div>

      <div class="page__body">
        <p>2022.7.7</p>
        <p>2023年4月入社 新卒・既卒採用募集は終了しました。</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    hoverClassAdd(event: any) {
      event.target.classList.add('sidebar-item--hovered');
    },

    hoverClassRemove(event: any) {
      event.target.classList.remove('sidebar-item--hovered')
    }
  },
})
</script>

<style lang="scss">
.recruit {
  border-left: .2rem solid;
  border-right: .2rem solid;
  display: flex;
  font-weight: bold;
  height: 100%;

  .sidebar__space,
  .page__header {
    height: 1.8rem;
  }

  .sidebar {
    background-color: #70ad47;
    color: #fff;
    width: 248px;

    .sidebar-space {
      font-size: .9rem;
      padding: 1.2rem .9rem;
    }

    .sidebar-item {
      align-items: center;
      cursor: pointer;
      display: flex;
      font-size: 1.2rem;
      height: 2.5rem;
      justify-content: space-between;
      padding: 0 1.4rem;

      &:active
      &:focus,
      &:hover {
        background-color: #476d2c;
      }

      &__arrow {
        display: none;
        transform: scaleX(0.4);
      }

      &--hovered {
        .sidebar-item__arrow {
          display: flex;
        }
      }
    }
  }

  .page {
    width: 100%;

    &__header {
      background: #548235;
      color: #fff;
      display: flex;
      font-size: 2rem;
      padding: 1.2rem 1.6rem;
    }

    &__body {
      padding: .4rem 1rem;
      text-align: initial;
    }
  }
}
</style>
