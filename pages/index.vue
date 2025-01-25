<script setup lang="ts">
useHead({
  title: 'Home | App',
  meta: [{ name: 'description', content: 'My amazing site.' }]
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
        <h1 class="slide-main-title">
          Breaking language barriers, building business bridges.
        </h1>
        <div class="slide-main-body">
          <div class="slide-main-content">
            <main class="slide-main-text">
              We provide a full range of translation services to and from any
              language, helping our clients tackle business and legal challenges
              with confidence.
            </main>
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
          <h1 class="slide-services-title">Services</h1>
          <ul class="slide-services-list">
            <li class="service">Translations</li>
            <li class="service">Notarial Certification</li>
            <li class="service">Bureau-Certified</li>
            <li class="service">Apostile</li>
            <li class="service">Legalization</li>
          </ul>
          <article class="total">
            <main>
              <h1 class="total-count">1.3M</h1>
              <p class="total-text">Words translated</p>
            </main>
          </article>
        </div>
      </div>
    </section>
    <div class="slide-contacts">
      <div class="slide-dots">
        <div class="slide-dot"></div>
        <div class="slide-dot"></div>
      </div>
      <div class="container">
        <h1 class="slide-contacts-title">
          Let’s translate something meaningful together
        </h1>
      </div>
    </div>
    <div class="container"></div>
  </div>
</template>

<style scoped lang="scss">
@use 'index.scss';
</style>
