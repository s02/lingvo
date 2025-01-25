<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (width >= 1920px) {
    align-items: center;
  }
}
</style>
