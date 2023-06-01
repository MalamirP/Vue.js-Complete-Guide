const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            showDiv: true
        };
    },

    computed: {
        buttonCaption() {
            return this.showdiv ? 'Hide List' : 'Show List'
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleDiv() {
            this.showDiv = !this.showDiv;
        }
    }
});

app.mount('#assignment');