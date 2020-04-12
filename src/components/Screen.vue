<template>
    <input type="text" class="calculator-screen z-depth-1" disabled :value="display"/>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['display']),
  }
}
</script>

<style lang="css">

.calculator-screen {
  width: 100%;
  border: none;
  background-color: black;
  color: #fff;
  text-align: right;
  padding-right: 20px;
  padding-left: 10px;
  font-size: 3rem;
}

</style>