<template>
    <div class="nes-container is-rounded with-title is-centered calculator">
      <p class="title">8 Bit Calculator</p>
      <Screen/>
      <Keyboard/>
    </div>
</template>

<script>
import Keyboard from '@/components/Keyboard.vue'
import Screen from '@/components/Screen.vue'
export default {
    name: 'Calculator',
    components: {
        Keyboard,
        Screen,
    },
    data() {
        return {}
    }
}
</script>

<style lang="css">
.calculator {
  border: 1px solid #ccc;
  border-radius: 5px;
  position: absolute;
  margin-top: 5%!important;
  margin-left: auto!important;
  margin-right: auto!important;
  width: 400px;
}
</style>