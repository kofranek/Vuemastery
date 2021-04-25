const app = Vue.createApp
({
   data () {
     return {
       cart: [],
       premium: false
     }
   },
   methods: {
     updateCart (id) {
       // console.log('updateCart')
       this.cart.push(id)
     }
   }

 })