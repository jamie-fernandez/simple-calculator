<template>
      <div class="calculator-keys">
          <button type="button" class="row-one nes-btn is-error"  @click="resetCalculator()">AC</button>
          <button type="button" class="row-one nes-btn is-warning" @click="handleOperator('/')">÷</button>
          <button type="button" class="row-one nes-btn is-warning" @click="handleOperator('*')">x</button>
          <button type="button" class="row-one nes-btn is-warning" @click="handleOperator('-')">-</button>

          <button type="button" class="row-two nes-btn is-primary" @click="inputDigit(7)">7</button>
          <button type="button" class="row-two nes-btn is-primary" @click="inputDigit(8)">8</button>
          <button type="button" class="row-two nes-btn is-primary" @click="inputDigit(9)">9</button>
          <button type="button" class="row-two nes-btn is-warning" @click="handleOperator('+')">+</button>

          <button type="button" class="row-three nes-btn is-primary" @click="inputDigit(4)">4</button>
          <button type="button" class="row-three nes-btn is-primary" @click="inputDigit(5)">5</button>
          <button type="button" class="row-three nes-btn is-primary" @click="inputDigit(6)">6</button>

          <button type="button" class="row-four nes-btn is-primary" @click="inputDigit(1)">1</button>
          <button type="button" class="row-four nes-btn is-primary" @click="inputDigit(2)">2</button>
          <button type="button" class="row-four nes-btn is-primary" @click="inputDigit(3)">3</button>
          <button type="button" class="equal-sign nes-btn is-success" @click="handleOperator('=')">=</button>

          <button type="button" class="zero nes-btn is-primary" @click="inputDigit(0)">0</button>
          <button type="button" class="row-five nes-btn is-warning" @click="inputDecimal()">.</button>
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
  font-size: 1.25!important;
}

.calculator-keys {
  display: grid;
  grid-template-columns: repeat(4, 21%);
  grid-gap: 10px;
  padding: 10px;
  justify-content: center;
}

.equal-sign {
  height: 317%;
 }

.zero {
  grid-column: 1 / span 2;
  grid-row: 5;
}

.row-one {
  grid-row: 1;
}

.row-two {
  grid-row: 2;
}

.row-three {
  grid-row: 3;
}

.row-four {
  grid-row: 4;
}

.row-five {
  grid-row: 5;
}
</style>