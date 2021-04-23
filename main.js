const app = Vue.createApp
({
   data () {
     return {
       cart: 0,
       product: 'Socks',
       image: './assets/socks_green.jpg',
       inventory: 10,
       details: ['50% cotton', '30% wool', '20% polyester'],
       variants: [
         { id: 2234, color: 'green' , image: './assets/socks_green.jpg'},
         { id: 2235, color: 'blue' , image: './assets/socks_blue.jpg'}
       ]
     }
   },
   methods: {
     addToCart () {
       this.cart += 1
     },
     // lesson 6 solution
     // removeFromCart() {
     //   if (this.cart >= 1) {
     //     this.cart -= 1
     //   }
     // },
     updateImage (variantImage) {
        this.image=variantImage
     }

   }
 })