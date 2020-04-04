<template>
      <!-- Calculator Keys-->
      <div class="keyboard">
        <b-row>
            <b-button class="button number" variant="info" value="7">7</b-button>
            <b-button class="button number" variant="info" value="8">8</b-button>
            <b-button class="button number" variant="info" value="9">9</b-button>
            <b-button class="button all-clear" variant="danger" value="ac">AC</b-button>
            <b-button class="button clear-entry" variant="danger" value="ce">CE</b-button>
        </b-row>

        <b-row>
            <b-button class="button number" variant="info" value="4">4</b-button>
            <b-button class="button number" variant="info" value="5">5</b-button>
            <b-button class="button number" variant="info" value="6">6</b-button>
            <b-button class="button operator" variant="warning" value="/">÷</b-button>
            <b-button class="button operator" variant="warning" value="*">x</b-button>
        </b-row>

        <b-row>
            <b-button class="button number" variant="info" value="1">1</b-button>
            <b-button class="button number" variant="info" value="2">2</b-button>
            <b-button class="button number" variant="info" value="3">3</b-button>
            <b-button class="button operator" variant="warning" value="+">+</b-button>
            <b-button class="button operator" variant="warning" value="-">-</b-button>
        </b-row>

        <b-row class="last-row">
            <b-button class="button zero number" variant="info" value="0">0</b-button>
            <b-button class="button decimal" variant="warning" value=".">.</b-button>
            <b-button class="button operator" variant="success" value="=">=</b-button>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'keyboard',
  methods: {}
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