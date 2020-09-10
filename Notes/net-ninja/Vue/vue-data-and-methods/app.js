new Vue({
    el: '#vue-app',
    data: {
        somedata: 'blah blah'
    },
    methods: {
        aMethodNoParam: function(){
            return 'dskfsaldkjn'
        },
        aMethodWithParam: function(hi){
            return hi
        },
        aMethodWithParamAndObject: function(hi){
           return hi + this.somedata
        }
    }
})