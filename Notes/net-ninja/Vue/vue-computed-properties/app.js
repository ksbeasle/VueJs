new Vue({
    el: '#vue-app',
    data:{
        a: 0,
        b: 0,
        age: 24
    },
   // methods:{},
    computed:{
        addA: function(){
            console.log('A')
            return this.age + this.a
        },
        addB: function(){
            console.log('B')
            return this.age + this.b
        }
    }
})