<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()

const toggleToLang = computed(() => (locale.value === 'en' ? 'lv' : 'en'))
</script>

<template>
  <NuxtLink class="lang-switcher" :to="switchLocalePath(toggleToLang)">{{
    locale === 'en' ? 'Lat' : 'En'
  }}</NuxtLink>
</template>

<style scoped lang="scss">
@use 'LangSwitcher.scss';
</style>
