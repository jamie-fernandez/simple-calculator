<template>
    <div class="calculator">
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
}
</style>