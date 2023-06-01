const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: ''

        }
    },
    methods: {
        showAlert() {
            alert('Warning')
        },
        setName(event) {
            this.name = event.target.value;
        },
        confirmInput() {
            this.confirmedName = this.name
        }
    }
})

app.mount('#assignment');