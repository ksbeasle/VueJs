<template>
    <div id="obj">
        <ul>
            <li v-for="o in obj" v-on:click="o.show = !o.show">
                <h2>{{o.name}}</h2>
                <h3 v-show="o.show">{{o.type}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
props: {
    obj: {
        type: Array,
        required: true
    }
},
    data(){
    return {
    }
    },
    //lifecycle hooks
    beforeCreate(){
        alert("beforeCreate")
    },
    //good time to fetch any data (like a database)
    created(){
        alert("created")
    },
    beforeMount(){
        alert("before mounted")
    },
    mounted(){
        alert("mounted")
    },
    beforeUpdate(){
        alert("before updated")
    },
    updated(){
        alert("updated")
    }

}
</script>

<style scoped>

</style>