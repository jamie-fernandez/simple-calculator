<template>
      <!-- Calculator Keys-->
      <div class="keyboard">
        <b-row>
            <b-button class="button number" variant="info" @click="inputDigit(7)">7</b-button>
            <b-button class="button number" variant="info" @click="inputDigit(8)">8</b-button>
            <b-button class="button number" variant="info" @click="inputDigit(9)">9</b-button>
            <b-button class="button all-clear" variant="danger" @click="resetCalculator()">AC</b-button>
            <b-button class="button clear-entry" variant="danger" value="ce">CE</b-button>
        </b-row>

        <b-row>
            <b-button class="button number" variant="info" @click="inputDigit(4)">4</b-button>
            <b-button class="button number" variant="info" @click="inputDigit(5)">5</b-button>
            <b-button class="button number" variant="info" @click="inputDigit(6)">6</b-button>
            <b-button class="button operator" variant="warning" @click="handleOperator('/')">÷</b-button>
            <b-button class="button operator" variant="warning" @click="handleOperator('*')">x</b-button>
        </b-row>

        <b-row>
            <b-button class="button number" variant="info" @click="inputDigit(1)">1</b-button>
            <b-button class="button number" variant="info" @click="inputDigit(2)">2</b-button>
            <b-button class="button number" variant="info" @click="inputDigit(3)">3</b-button>
            <b-button class="button operator" variant="warning" @click="handleOperator('+')">+</b-button>
            <b-button class="button operator" variant="warning" @click="handleOperator('-')">-</b-button>
        </b-row>

        <b-row class="last-row">
            <b-button class="button zero number" variant="info" @click="inputDigit(0)">0</b-button>
            <b-button class="button decimal" variant="warning"  @click="inputDecimal()">.</b-button>
            <b-button class="button operator" variant="success" @click="handleOperator('=')">=</b-button>
        </b-row>
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
.keyboard {
  display: inline-block;
  text-align: center;
  margin-bottom:8px;
}

.row {
  margin-top: 4px;
}

.button {
  width: 62px;
  margin: 2px;
}

.zero {
  width: 194px;
}

.result {  
  float:right;
  margin-left:4px;
  height: 74px;
}
</style>