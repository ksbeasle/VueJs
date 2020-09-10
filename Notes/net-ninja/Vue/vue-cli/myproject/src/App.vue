<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h1>test</h1>
    <names></names>
    <hdr v-bind:title="title" v-on:changeTitle="updateTitle($event)"></hdr>
    <cntn v-bind:obj="obj"></cntn>
    <ftr v-bind:title="title"></ftr>
    
  </div>
</template>

<script>

import Names from './names.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Content from './components/content.vue'

export default {
  components: {
    names: Names,
    hdr: Header,
    ftr: Footer,
    cntn: Content
  },
  data(){
  return {
    title: 'App',
     obj: [
            {name: 'Ice', type: 'Cream', show: false},
            {name: 'Burger', type: 'Fries', show: false},
            {name: 'Pizza', type: 'Wings', show: false},
        ],
        title: "VUE APP!!"
  }
  },
  methods: {
    updateTitle: function(theTitle){
      this.title = theTitle
    }
  }
  
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
