const app = Vue.createApp
({
   data () {
     return {
       cart: 0,
       product: 'Socks',
       brand: 'Vue Mastery',
       selectedVariant: 0,
       // image: './assets/socks_green.jpg',
       // inventory: 10,
       // inStock: true,
       details: ['50% cotton', '30% wool', '20% polyester'],
       variants: [
         { id: 2234, color: 'green', image: './assets/socks_green.jpg', quantity: 50 },
         { id: 2235, color: 'blue', image: './assets/socks_blue.jpg', quantity: 0 }
       ]
     }
   },
   methods: {
     addToCart () {
       this.cart += 1
     },
     updateVariant (index) {
       this.selectedVariant = index
       // console.log(index, this.variants[index].image)

     }
   },
   computed: {
     title () {
       return this.brand + ' ' + this.product
     },
     image () {
       // console.log(this.variants[this.selectedVariant].image)
       return this.variants[this.selectedVariant].image
     },
     inStock () {
       return this.variants[this.selectedVariant].quantity>0
     },
     inventory () {
       return this.variants[this.selectedVariant].quantity
     }


   }
 })