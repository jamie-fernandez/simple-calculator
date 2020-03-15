<template>
    <div class="screen">
        <div id="display">
            <div id="result"><p>0</p></div>
            <div id="previous"><p>0</p></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css">

#header {
  text-align: center;
  font-family: 'Share Tech Mono', monospace;
}

#display {
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