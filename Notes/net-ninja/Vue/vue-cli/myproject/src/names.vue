<template>
  <div id="app">
    <div>
    <h1> Yo </h1>
    <ul>
        <li v-for="n in names" >{{n}}</li>
    </ul>
    </div>
  </div>
</template>

<script>

export default {
  data(){
  return {
    
  }
  }
  
}
</script>

<style scoped>
h1 {
    color: blue;
}
</style>
