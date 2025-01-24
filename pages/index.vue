<script setup lang="ts">
useHead({
  title: 'Home | App',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

const localePath = useLocalePath()
</script>

<template>
  <h1>{{ $t('welcome') }}</h1>
  <NuxtLink :to="localePath('about')">About</NuxtLink>
  <LangSwitcher />
</template>

<style scoped></style>
