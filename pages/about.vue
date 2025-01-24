<script setup lang="ts">
useHead({
  title: 'About | App',
  meta: [{ name: 'description', content: 'About my amazing site.' }]
})

const { t } = useI18n()
</script>

<template>
  <h1>{{ t('hello') }}</h1>
  <NuxtLink to="/">Home</NuxtLink>
  <LangSwitcher />
</template>

<style scoped></style>
