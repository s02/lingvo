<script setup lang="ts">
useHead({
  title: 'Home | App',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})
</script>

<template>
  <div class="content">
    <div class="slide-main">
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
            <div class="slide-main-text">
              We provide a full range of translation services to and from any
              language, helping our clients tackle business and legal challenges
              with confidence.
            </div>
            <div class="slide-main-image">
              <img src="assets/img/slide-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'index.scss';
</style>
