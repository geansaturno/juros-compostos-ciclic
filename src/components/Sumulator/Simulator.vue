<template>
  <div class="row">
    <form class="col-12" @submit="requestData">
      <div class="form-group">
        <label for="name">Nome</label>
        <input v-model="name" class="form-control" id="name" />
      </div>
      <div class="form-group">
        <label for="contribution">Mensalidade</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">R$</span>
          </div>
          <input v-model.number="contribution" step="0.01" type="number" class="form-control" id="contribution" />
        </div>
      </div>
      <div class="form-group">
        <label for="years">Tempo</label>
        <div class="input-group">
          <input v-model.number="years" type="number" class="form-control" id="years" />
          <div class="input-group-append">
            <span class="input-group-text">Anos</span>
          </div>
        </div>
      </div>
      <Button :text="'Simular'" type="submit" class="btn-block"/>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import Button from '../Button/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Simulator extends Vue {
  @Provide() name = '';
  @Provide() contribution = 0;
  @Provide() years = 0;

  requestData (event: Event) {
    event.preventDefault()
    console.log('requisitando', this.name, this.contribution, this.years)
  }
}

</script>

<style>
</style>
