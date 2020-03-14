<template>
  <div class="container">
    <div id="calc" class="text-center">
      <Screen/>
      <Keyboard/>
    </div>
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
@import 'https://fonts.googleapis.com/css?family=Share+Tech+Mono';


body {
    background:antiquewhite;
}

#calc {  
  text-align: center;
  width: 380px; 
  display: block;
  border-radius:8px;
  border: 1px solid;
  padding:8px;
  margin-top:20px;
  margin-left:auto;
  margin-right:auto;
  background: #224662;
}
</style>