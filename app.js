const app = Vue.createApp({
    data() {
        return {
            url: 'https://pathum.surge.sh/',
            showBooks: true,
            /* title: "I am the Vue lord",
            author: 'Pathum',
            age: 33,
            x: 0,
            y: 0 */
            books: [
                { title: 'Gamperaliya', author: 'Martin wikramasingha', img: 'assets/1.jpg', isFav: true },
                { title: 'Ape gama', author: 'Martin wikramasingha', img: 'assets/2.jpg', isFav: false },
                { title: 'Amma', author: 'Sannasgala', img: 'assets/3.jpg', isFav: true },
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
        toggleClick(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')