new Vue({
    el: '#vue-app',
    data: {
        food: 'n/a'
    }, 
    methods: {
        yourfood: function(){
            console.log(this.$refs)
            this.food = this.$refs.input.value
        }
    }
})