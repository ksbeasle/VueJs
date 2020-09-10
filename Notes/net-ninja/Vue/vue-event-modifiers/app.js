new Vue({
    el: '#vue-app',
    data: {
        num: 1
    },

    methods: {
        foo: function(){
            this.num++
        },
        no: function(){
            alert("NO...just...no...")
        }
    }
})