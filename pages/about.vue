<script setup lang="ts">
useHead({
  title: 'About | App',
  meta: [{ name: 'description', content: 'About my amazing site.' }]
})

const localePath = useLocalePath()
</script>

<template>
  <h1>{{ $t('hello') }}</h1>
  <NuxtLink :to="localePath('/')">Home</NuxtLink>
  <LangSwitcher />
</template>

<style scoped></style>
