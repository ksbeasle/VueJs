var one = new Vue({
    el: '#vue-app-one', 
    data: {
        title: 'Hi from app one'
    },
    computed: {
        greet: function(){
            return ' App one here '
        }
    }
})

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Hi from app two'
    },
    methods: {
        changeTitle: () => {
            one.title = "I changed app one\'s title!!"
        }
    },
    computed: {
        greet: function(){
            return ' App two here '
        }
    }
})

two.title = 'I changed app two\'s title'