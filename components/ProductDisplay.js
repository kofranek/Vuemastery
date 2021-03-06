app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Array,
      required: true
    }
  },
  template:
    `
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inventory>10">In stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
        <p v-else>Out of stock</p>
        <p>Shipping: {{ shipping }}</p>
 
        <!-- solution -->
        <product-details :details="details"></product-details>
        <!-- solution -->
        
<!--        <ul>-->
<!--          <li v-for="detail in details" :key="detail">{{ detail }}</li>-->
<!--        </ul>-->

        <div class="color-circle"
             v-for="(variant, index) in variants"
             :key="variant.id"
             @mouseover="updateVariant(index)"
             :style="{backgroundColor: variant.color }"
        >
        </div>
        <button
            class="button"
            :class="{disabledButton: !inStock }"
            :disabled="!inStock"
            @click="addToCart"
        >
          Add to cart
        </button>
        <!-- solution -->
         <button
            class="button"
            :class="{disabledButton: cart.length===0 }"
            :disabled="cart.length===0"
            @click="removeFromCart"
        >
          Remove item
        </button>
        <!-- solution -->
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form> 
  </div>
  `,

  data () {
    return {
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
      ],
      reviews: []
    }
  },
  methods: {
    addToCart () {
     // console.log('productDisplay addToCart')
      this.decreaseQuantity()
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },

    // *** solution ***
    removeFromCart () {
      const id = this.cart[this.cart.length - 1]
      this.cart.pop()
      //console.log(this.variants.find((e)=>e.id===id).quantity)
      this.variants.find((e) => e.id === id).quantity += 1
      //console.log(this.variants.find((e)=>e.id===id).quantity)
    },
    // *** solution ***

    updateVariant (index) {
      this.selectedVariant = index
      // console.log(index, this.variants[index].image)
    },
    decreaseQuantity () {
      this.variants[this.selectedVariant].quantity -= 1
    },
    addReview (review) {
      this.reviews.push(review)
      // console.log('addReview reviews:', this.reviews)

    }
  },
  computed: {
    title () {
      return this.brand + ' ' + this.product
    },
    image () {
      return this.variants[this.selectedVariant].image
    },
    inStock () {
      return this.variants[this.selectedVariant].quantity > 0
    },
    inventory () {
      return this.variants[this.selectedVariant].quantity
    },
    shipping () {
      if (this.premium) {
        return 'free'
      }
      return 2.99
    }
  }
})
