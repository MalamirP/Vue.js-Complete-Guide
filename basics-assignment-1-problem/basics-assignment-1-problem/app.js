const app = Vue.createApp({
    data: function () {
        return {
            name: 'Malamir Petkov',
            age: 21,
            randomImg: 'https://picsum.photos/200',

        };
    },
    methods: {
        outPutRandomNum: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return '0'
            } else {
                return '1'
            }
        },
        calculateAge() {
            return this.age + 5;
        }
    }

})

app.mount('#assignment')