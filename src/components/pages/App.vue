<template>
  <div id="app">
    <Menu class="mb-3"/>
    <div class="container">
      <Simulator/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Simulator from '@/components/Sumulator/Simulator.vue'
import Menu from '@/components/Menu/Menu.vue'

@Component({
  components: {
    Simulator,
    Menu
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
