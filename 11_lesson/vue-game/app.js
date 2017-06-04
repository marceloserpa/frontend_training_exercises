

new Vue({
    el: '#app',
    data: {
        player:{
            lifepoints: 100,
            power: 8
        },
        oponnent: {
            lifepoints: 100
        }       
    },
    methods: {
        attack: function () {
            let lose = this.oponnent.lifepoints - this.player.power;
            if(lose > 0){
                this.oponnent.lifepoints = lose;
            } else {
                this.oponnent.lifepoints = 0;
            }
        }
    }
})