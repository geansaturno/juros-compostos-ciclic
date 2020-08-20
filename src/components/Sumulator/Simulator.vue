<template>
  <div class="row">
    <transition name="fade">
      <form class="col-12" @submit="showMessage" v-if="!result">
        <div class="form-group">
          <label for="name">Nome</label>
          <input v-model="name" class="form-control" id="name" required />
        </div>
        <div class="form-group">
          <label for="contribution">Mensalidade</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">R$</span>
            </div>
            <input
              v-model.number="contribution"
              step="0.01"
              type="number"
              class="form-control"
              required
              id="contribution"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="years">Tempo</label>
          <div class="input-group">
            <input v-model.number="years" type="number" class="form-control" id="years" required />
            <div class="input-group-append">
              <span class="input-group-text">Anos</span>
            </div>
          </div>
        </div>
        <Button :text="'Simular'" type="submit" class="btn-block" :disabled="isLoading" />
      </form>

      <div v-else class="jumbotron jumbotron-fluid simulator-message">
        <div class="container">
          <p>Olá {{name}}, juntando R${{contribution}} todo mês, você terá R${{result}} em {{years}} anos</p>
          <Button @click="reset()" :text="'Simular novamente'" class="btn-block" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import Button from '@/components/Button/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Simulator extends Vue {
  @Provide() name = '';
  @Provide() contribution = 0;
  @Provide() years = 0;
  @Provide() isLoading = false;
  @Provide() result = 0;

  showMessage (event: Event) {
    event.preventDefault()
    this.isLoading = true
    this.requestData().then(
      (result) => (this.result = Math.round(result * 100) / 100)
    )
  }

  async requestData () {
    const response = await fetch('http://api.mathjs.org/v4/', {
      method: 'POST',
      body: JSON.stringify({
        expr: `${this.contribution} * (((1 + 0.00190) ^ ${
          this.years * 12
        } - 1) / 0.00190)`
      })
    })

    const responseBody = await response.json()
    return responseBody.result
  }

  reset () {
    this.result = 0
    this.isLoading = false
    this.contribution = 0
    this.years = 0
  }
}
</script>

<style>
.simulator-message {
  font-size: 35px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
