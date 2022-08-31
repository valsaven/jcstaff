<template>
  <div class="contact">
    <div class="sidebar">
      <div class="sidebar__space" />

      <div class="sidebar__item">
        <span title="メールフォーム">Mailform</span><span class="sidebar__item--arrow">►</span>
      </div>
    </div>

    <div class="page">
      <div class="page__header">
        <span>メールフォーム</span>
      </div>

      <div class="page__body">
        <a
          href="https://ssl.jcstaff.co.jp/infomation/2020_10_09.htm"
          target="_self"
        >
          <b>◆ 弊社への企画の御提案等に関するお願い。</b>
        </a>

        <!-- TODO: Move pairs text-input to separate components -->
        <!-- TODO: Add margin-bottom: 1rem for this components -->
        <div class="contact-form">
          <div>
            <span class="contact-form__bullet">■</span><b>お名前</b>
          </div>
          <input type="text" name="名前" size="50" value="" />

          <div>
            <span class="contact-form__bullet">■</span><b>メールアドレス</b>
          </div>
          <input type="text" name="email" size="50" value="" />

          <div>
            <span class="contact-form__bullet">■</span><b>件名</b>
          </div>
          <input type="text" name="subject" size="50" value="ホームページに関するお問い合わせ" />

          <div>
            <span class="contact-form__bullet">■</span><b>本文</b>
          </div>
          <textarea
            class="contact-form__textarea"
            name="comment"
            rows="8"
            cols="80"
            spellcheck="false"
            data-gramm="false"
          />

          <input class="contact-form__button" type="submit" id="submit_button" name="" value="送信"/>
        </div>
      </div>
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
  height: 100%;

  .sidebar__space,
  .page__header {
    height: 1.8rem;
    padding: 1.2rem 1.6rem;
  }

  .sidebar {
    background-color: #f6b506;
    color: #fff;
    width: 248px;

    &__item {
      align-items: center;
      background-color: #f2a21d;
      cursor: pointer;
      display: flex;
      font-size: 1.8rem;
      height: 2.5rem;
      justify-content: space-around;

      &--arrow {
        transform: scaleX(0.4);
      }
    }
  }

  .page {
    width: 100%;

    &__header {
      background: rgb(242,162,29);
      background: linear-gradient(90deg, rgba(242,162,29,1) 92%, rgba(252,210,50,1) 92%, rgba(253,215,71,1) 94%, rgba(255,226,114,1) 94%, rgba(255,235,122,1) 96%, rgba(254,244,130,1) 96%, rgba(255,250,193,1) 98%, rgba(255,255,255,1) 98%);
      color: #fff;
      display: flex;
      font-size: 2rem;
    }

    &__body {
      padding: .4rem 1rem;
      text-align: initial;

      .contact-form {
        align-items: start;
        display: flex;
        flex-direction: column;

        &__bullet {
          color: #f8b500;
          margin-right: .4rem;
        }

        &__textarea {
          margin-bottom: 1rem;
          max-width: 600px;
          resize: vertical;
          width: 100%;
        }

        &__button {
          background-color: #f39800;
          border-style: none;
          color: #fff;
          font-weight: bold;
          padding: .5rem 2rem;
        }
      }
    }
  }
}
</style>
