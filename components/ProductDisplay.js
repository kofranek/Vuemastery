app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
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
      </div>
    </div>
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
