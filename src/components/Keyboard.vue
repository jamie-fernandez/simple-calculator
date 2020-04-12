<template>
      <div class="calculator-keys">
        <!-- <b-row> -->
            <button type="button" class="nes-btn is-primary" @click="inputDigit(7)">7</button>
            <button type="button" class="nes-btn is-primary" @click="inputDigit(8)">8</button>
            <button type="button" class="nes-btn is-primary" @click="inputDigit(9)">9</button>
            <button type="button" class="nes-btn is-error"  @click="resetCalculator()">AC</button>
            <!-- <button type="button" class="nes-btn is-error" value="ce">CE</button> -->
        <!-- </b-row> -->

        <!-- <b-row> -->
            <button type="button" class="nes-btn is-primary" @click="inputDigit(4)">4</button>
            <button type="button" class="nes-btn is-primary" @click="inputDigit(5)">5</button>
            <button type="button" class="nes-btn is-primary" @click="inputDigit(6)">6</button>
            <button type="button" class="nes-btn is-warning" @click="handleOperator('/')">÷</button>
        <!-- </b-row> -->

        <!-- <b-row> -->
            <button type="button" class="nes-btn is-primary" @click="inputDigit(1)">1</button>
            <button type="button" class="nes-btn is-primary" @click="inputDigit(2)">2</button>
            <button type="button" class="nes-btn is-primary" @click="inputDigit(3)">3</button>
            <button type="button" class="nes-btn is-warning" @click="handleOperator('+')">+</button>
            <button type="button" class="nes-btn is-primary zero" @click="inputDigit(0)">0</button>
        <!-- </b-row> -->

        <!-- <b-row class="last-row"> -->
            <button type="button" class="nes-btn is-warning" @click="handleOperator('-')">-</button>
            <button type="button" class="nes-btn is-warning" @click="inputDecimal()">.</button>
            <button type="button" class="nes-btn is-success equal-sign" @click="handleOperator('=')">=</button>
            <button type="button" class="nes-btn is-warning" @click="handleOperator('*')">x</button>
        <!-- </b-row> -->
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'keyboard',
  methods: {
    ...mapActions([
        'inputDigit',
        'handleOperator',
        'resetCalculator',
        'inputDecimal'
      ])
  }
}
</script>

<style lang="css">
button {
  height: 60px;
  font-size: 2rem!important;
}

.equal-sign {
  height: 220%;
  /* grid-area: 2 / 4 / 6 / 5; */
}

.calculator-keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;
}
</style>