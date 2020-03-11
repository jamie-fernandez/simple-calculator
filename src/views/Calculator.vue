<template>
  <div class="container">
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
    div.container {
        width: 100%
    }
</style>