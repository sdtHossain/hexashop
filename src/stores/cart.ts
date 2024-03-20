import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface CartItem {
  id: number;
  title: string;
  price: number;
  qty: number;
  category: string;
  thumbnail: string;
}

// Initialize your cart items as a ref with an empty array


export const useCartStore = defineStore('cart', () => {
  const totalCartItems = ref(5)

  // const cartItems = ref([])
  const cartItems = ref<CartItem[]>([]);

  const numberOfOrder = ref(1)



  const cartItemsAddFunc = (item: {
    id: number
    title: string
    price: number
    category: string
    thumbnail: string
  }) => {
    const existingItem = cartItems.value.find((obj) => obj.id === item.id)
  
    if (!existingItem) {
      cartItems.value.push({
        id: item.id,
        title: item.title,
        qty: numberOfOrder.value,
        price: item.price,
        category: item.category,
        thumbnail: item.thumbnail
      })
    } else {
      alert('You already added the product to cart')
    }
    console.log(cartItems.value)
  }


  

  return { totalCartItems, cartItems, numberOfOrder, cartItemsAddFunc }
})
