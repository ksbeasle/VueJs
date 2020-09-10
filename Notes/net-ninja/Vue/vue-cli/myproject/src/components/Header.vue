<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
import {bus} from '../main'
export default {
    props: {
        title: {
            type: String
        }
    },
    data(){
    return {
        title: 'Hi I am the header'
    }
    },
    methods: {
        changeTitle: function(){
           // this.title = 'CHANGED TITLE'
          // this.$emit('changeTitle', 'Vue Wiz')
          this.title = 'wiztard'
          bus.$emit('titleChanged', 'wiztard')
        }
    }
}
</script>

<style scoped>
header {
    background: lightgreen;
    padding: 10px
    }
h1 {
    text-align: center;
    color: #222;
}
</style>