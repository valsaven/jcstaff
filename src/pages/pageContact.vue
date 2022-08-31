<template>
  <div class="contact">
    <div class="sidebar">Mailform ►</div>

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
            name="comment"
            rows="8"
            cols="80"
            spellcheck="false"
            data-gramm="false"
            style="width: 629px;
            height: 203px;"
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
  height: auto;

  .sidebar {
    background-color: #f6b506;
    color: #fff;
    width: 248px;
  }

  .page {
    width: 100%;

    &__header {
      background: rgb(242,162,29);
      background: linear-gradient(90deg, rgba(242,162,29,1) 92%, rgba(252,210,50,1) 92%, rgba(253,215,71,1) 94%, rgba(255,226,114,1) 94%, rgba(255,235,122,1) 96%, rgba(254,244,130,1) 96%, rgba(255,250,193,1) 98%, rgba(255,255,255,1) 98%);
      color: #fff;
      display: flex;
      font-size: 2rem;
      height: 1.8rem;
      padding: 1.2rem 1.6rem;
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
