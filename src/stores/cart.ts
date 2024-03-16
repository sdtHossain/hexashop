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


  

  return { totalCartItems, cartItems }
})
