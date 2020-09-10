<template>
    <footer>
        <p>{{copyright}} {{title}}</p>
    </footer>
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
        copyright: '2020 kahlil'
    }
    },

    created(){
        bus.$on('titleChanged', (data) => {
            this.title = data
        })
    }
}
</script>

<style scoped>
footer {
    background: #222;
    padding: 6px;
}

p {
 text-align: center;
    color: lightgreen;
}
</style>