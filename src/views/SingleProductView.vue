<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()

const singleProduct = ref()

const singleProductResp = await fetch(`https://dummyjson.com/products/${route.query.prodId}`)
singleProduct.value = await singleProductResp.json()
console.log(singleProduct)

const numberOfOrder = ref(1)

const { cartItems } = storeToRefs(useCartStore())

const cartItemsAddFunc = (item: { id: number; title: string }) => {
  const existingItem = cartItems.value.find((obj) => obj.id === item.id)

  if (!existingItem) {
    cartItems.value.push({
      id: item.id,
      title: item.title,
      qty: numberOfOrder.value
    })
  } else {
    alert('You already added the product to cart')
  }
  console.log(cartItems.value)
}

// const cartItemsAddFunc = (item) => {
//   const existingItem = cartItems.value.find((obj) => obj.id === item.id)

//   if (!existingItem) {
//     cartItems.value.push({
//       id: item.id,
//       title: item.title,
//       qty: 1
//     })
//   } else {
//     alert('You already added the product to cart')
//   }
//   console.log(cartItems.value)
// }

// this function for increase product quantity
// const cartItemsAddFunc = (item: Object) => {
//   const existingItemIndex = cartItems.value.findIndex((obj) => obj.id === item.id)

//   if (existingItemIndex !== -1) {
//     cartItems.value[existingItemIndex].qty++
//   } else {
//     cartItems.value.push({
//       id: item.id,
//       title: item.title,
//       qty: 1
//     })
//   }
//   console.log(cartItems.value)
// }
</script>
<template>
  <!-- ***** Main Banner Area Start ***** -->
  <div class="page-heading" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner-content">
            <h2>Single Product Page</h2>
            <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->

  <!-- ***** Product Area Starts ***** -->
  <section class="section" id="product">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="left-images">
            <img :src="singleProduct.images[0]" class="img-fluid" alt="" />
            <img :src="singleProduct.images[1]" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="right-content">
            <h4>{{ singleProduct.title }}</h4>
            <span class="price">${{ singleProduct.price }}.00</span>
            <ul class="stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
            </ul>
            <span>{{ singleProduct.description }}</span>
            <div class="quote">
              <i class="fa fa-quote-left"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
            </div>
            <div class="quantity-content">
              <div class="left-content">
                <h6>No. of Orders</h6>
              </div>
              <div class="right-content">
                <div class="quantity buttons_added">
                  <input
                    type="button"
                    @click="numberOfOrder > 1 ? numberOfOrder-- : ''"
                    value="-"
                    class="minus"
                  /><input
                    type="number"
                    step="1"
                    min="1"
                    max=""
                    name="quantity"
                    :value="numberOfOrder"
                    title="Qty"
                    class="input-text qty text"
                    size="4"
                    pattern=""
                  /><input
                    type="button"
                    @click="numberOfOrder > 0 ? numberOfOrder++ : ''"
                    value="+"
                    class="plus"
                  />
                </div>
              </div>
            </div>
            <div class="total">
              <h4>Total: ${{ singleProduct.price * numberOfOrder }}.00</h4>
              <div class="main-border-button">
                <a href="#" @click="cartItemsAddFunc(singleProduct)">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Product Area Ends ***** -->
</template>
<style scoped></style>
