<template>
      <!-- TI-108 Elementary Calculator Keys-->
      <div id="keyboard">
        <b-row>
            <b-button variant="info" value="7">7</b-button>
            <b-button variant="info" value="8">8</b-button>
            <b-button variant="info" value="9">9</b-button>
            <b-button variant="danger" value="ac">AC</b-button>
            <b-button variant="danger" value="ce">CE</b-button>
        </b-row>

        <b-row>
            <b-button variant="info" value="4">4</b-button>
            <b-button variant="info" value="5">5</b-button>
            <b-button variant="info" value="6">6</b-button>
            <b-button variant="warning" value="/">/</b-button>
            <b-button variant="warning" value="*">*</b-button>
        </b-row>

        <b-row>
            <b-button variant="info" value="1">1</b-button>
            <b-button variant="info" value="2">2</b-button>
            <b-button variant="info" value="3">3</b-button>
            <b-button variant="warning" value="+">+</b-button>
            <b-button variant="success result" value="=">=</b-button>
        </b-row>

        <b-row class="last-row">
            <b-button class="zero" variant="info" value="0">0</b-button>
            <b-button variant="info" value=".">.</b-button>
            <b-button variant="info" value="-">-</b-button>
        </b-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
#keyboard {
  display: inline-block;
  text-align: center;
  margin-bottom:8px;
}

.row {
  margin-top: 4px;
}

.last-row {
  float:left;
  margin-top: -11.5%;
}

b-button {
  width: 62px;
  margin: 2px;
}

.invisible {
  width:0;
}

.zero {
  width: 134px;
}

.result {  
  float:right;
  margin-left:4px;
  height: 74px;
}
</style>