const myApp = {

    data() {
        return {
            title: '',
            name: 'Jhoseph',
            lastName: 'Mauricio',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito legal',
                    image: './assets/images/filme01.jpg',
                    stars: 3
                },
                {
                    title: 'Filme 02',
                    description: 'Filme muito legal',
                    image: './assets/images/filme02.jpg',
                    stars: 0
                },

            ],
            cart: [],
            //as cores de styles podem ser passadas como propriedaes
            styles: {
                backgroundColor: '#000',
                color: '#fff',
            },

            themeBlack: true
        }
    },

    //indicado o computed para lhe dar com dados reativos
    computed: {
        fullName() {
            return this.name + ' ' + this.lastName

        }

    },

    methods: {
        addCart(product) {
            this.cart.push(product);
        },

        inCart(product) {
            //indexOf retorna em qual indice o produto está caso nao esteja retorna -1
            return this.cart.indexOf(product) != -1;
        },

        removeCart(product) {

            //percorre o array
            const cart = this.cart.filter((prod, index) => {
                //retorna somente os produtos dieferentes do que estão no parametro
                //exemplo: procurar por 1 então [0,1,2] retorna apenas os que são diferentes do qual esta procurando [0,2] ou seja 2 itens apenas
                return product != prod
            })

            //retorna o cart com os objetos que sobraram
            this.cart = cart;

        },
        //método para escolha de tema
        toogleTheme() {
            //propriedade themeBlack recebe a negação do themeBlack no caso FALSE
            this.themeBlack = !this.themeBlack
            //muda a cor do thema
            if (this.themeBlack) {
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'

            } else {

                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'

            }
        }
    },
}

const app = Vue.createApp(myApp)

app.component('product-detail', productDetail)
app.mount('#app');

