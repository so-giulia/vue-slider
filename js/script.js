const app = new Vue(
    {
        el: '#root',
        data:{
            counter: 0,
            imgs:[
                'img/img1.jpeg',
                'img/img2.jpeg',
                'img/img3.jpeg',
                'img/img4.jpeg',
                'img/img5.jpeg',
                'img/img6.jpeg'
            ]
        },
        mounted: function () {
            this.slideAuto();
        },
        methods:{
            slideForwards(){
                (this.counter == this.imgs.length -1) ? this.counter = 0 : this.counter++;
            },
            slideBackwards(){
                (this.counter == 0) ? this.counter = this.imgs.length-1 : this.counter--;  
            },
            slideAuto(){
                let app = this;
                setInterval(function(){
                    app.slideForwards();
                }, 3000);
            }
        }
    }
);