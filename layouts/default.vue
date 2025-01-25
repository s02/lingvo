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
    padding-inline-end: mixins.responsive(1920, 0, 2528, 608);
  }

  @media (width >= 2528px) {
    align-items: center;
    padding-inline-end: 0;
  }
}
</style>
