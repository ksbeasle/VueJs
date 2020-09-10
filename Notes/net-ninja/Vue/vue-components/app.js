Vue.component ('greeting',{
    template: '<p>Hi {{ name }} . <button v-on:click="changeName">Click to change name</button> </p>',
    data: function() {
        return {
            name: 'Tom'
        }
    },
    methods:{
        changeName: function() {
            this.name = "Bob"
        }
    }
})

var one = new Vue({
    el: '#vue-app-one'
})

var two = new Vue({
    el: '#vue-app-two'
})