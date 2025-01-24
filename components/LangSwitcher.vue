<script setup lang="ts">
const { setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="switch">
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('fr')">fr</button>
  </div>
  <div class="switch">
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
  </div>
</template>

<style scoped>
.switch {
  display: flex;
  gap: 10px;
}
</style>
