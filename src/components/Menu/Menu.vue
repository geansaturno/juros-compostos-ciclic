<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light menu">
    <a class="navbar-brand" href="https://www.ciclic.com.br">
      <img src="@/assets/logo.png" class="menu-logo" alt="Ciclic" loading="lazy" />
    </a>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {}
</script>

<style lang="scss">
.menu {
  height: 80px;

  &-logo {
    width: 120px;
  }
}
</style>
