const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            /* title: "I am the Vue lord",
            author: 'Pathum',
            age: 33,
            x: 0,
            y: 0 */
            books: [
                { title: 'Gamperaliya', author: 'Martin wikramasingha' },
                { title: 'Ape gama', author: 'Martin wikramasingha' },
                { title: 'Amma', author: 'Sannasgala' },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        /* handleEvent(e) {
            console.log(e.type)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        } */
    }
})

app.mount('#app')