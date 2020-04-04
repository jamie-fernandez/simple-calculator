<template>
    <div class="screen">
        <div class="display">
            <div id="result">
              <p>{{  }}</p>
            </div>
            <div id="previous"><p>0</p></div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
computed: {
      ...mapGetters(['display']),
}
}
</script>

<style lang="css">

#header {
  text-align: center;
  font-family: 'Share Tech Mono', monospace;
}

.display {
    background: #bcbcbc;
    padding: 8px;
    margin:16px 12px 10px 16px;
    text-align: center;
    font-family: 'Share Tech Mono', monospace;
    border-radius:8px;
}

#result p{
  font-size:1.8em;
}

#result, #previous {
  text-align: right;
  
}
</style>