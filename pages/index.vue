<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Lingvojumi',
  meta: [{ name: 'description', content: t('@page@home$description') }]
})
</script>

<template>
  <div class="content">
    <section class="slide-main">
      <div class="slide-dots">
        <div class="slide-dot"></div>
        <div class="slide-dot"></div>
      </div>
      <div class="container">
        <div class="header">
          <img src="assets/img/logo.svg" alt="" />
          <LangSwitcher />
        </div>
        <h1 class="slide-main-title" v-html="$t('@main-slide$title')"></h1>
        <div class="slide-main-body">
          <div class="slide-main-content">
            <div class="slide-main-text">{{ $t('@main-slide$text') }}</div>
            <div class="slide-main-image">
              <img src="assets/img/slide-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="slide-services">
      <div class="slide-dots">
        <div class="slide-dot"></div>
        <div class="slide-dot"></div>
      </div>
      <div class="container">
        <div class="slide-services-content">
          <h2 class="slide-services-title">
            {{ $t('@services-slide$title') }}
          </h2>
          <ul class="slide-services-list">
            <li class="service">{{ $t('@service$1') }}</li>
            <li class="service">{{ $t('@service$2') }}</li>
            <li class="service">{{ $t('@service$3') }}</li>
            <li class="service">{{ $t('@service$4') }}</li>
            <li class="service">{{ $t('@service$5') }}</li>
          </ul>
          <article class="total">
            <div>
              <h2 class="total-count">1.3M</h2>
              <p class="total-text">{{ $t('@services-slide$counter') }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="slide-promo">
      <div class="slide-dots">
        <div class="slide-dot"></div>
        <div class="slide-dot"></div>
      </div>
      <div class="container">
        <div class="slide-promo-header">
          <h2 class="slide-promo-title">
            {{ $t('@promo-slide$title') }}
          </h2>
          <a href="https://wa.me/37128118166" target="_blank" class="btn-start"
            ><span>{{ $t('@promo-slide$button') }}</span
            ><i class="btn-start-arrow"></i
          ></a>
        </div>
        <article class="slide-promo-services">
          <h2 class="slide-promo-label">{{ $t('@services-slide$title') }}</h2>
          <ul class="slide-promo-list">
            <li class="slide-promo-service">{{ $t('@service$1') }}</li>
            <li class="slide-promo-service">{{ $t('@service$2') }}</li>
            <li class="slide-promo-service">{{ $t('@service$3') }}</li>
            <li class="slide-promo-service">{{ $t('@service$4') }}</li>
            <li class="slide-promo-service">{{ $t('@service$5') }}</li>
          </ul>
        </article>
        <div class="slide-contacts">
          <address class="slide-address">
            <p class="slide-promo-label">{{ $t('@contacts@label') }}</p>
            <p class="slide-promo-address">Skolas iela 21, Rīga<br />LV-1010</p>
          </address>
          <address class="slide-web-address">
            <a href="tel:+37128118166">+371 28 118 166</a>
            <a href="mailto:info@lingvojumi.lv">info@lingvojumi.lv</a>
          </address>
        </div>
        <footer class="slide-promo-footer">
          <a href="#">{{ $t('@footer$info') }}</a>
          <a href="#">{{ $t('@footer$terms') }}</a>
          <p>2020-2025</p>
        </footer>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use 'index.scss';
</style>
