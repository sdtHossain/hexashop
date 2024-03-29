<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { cartItems } = storeToRefs(useCartStore())

const totalAmountOfPrice = ref(0)
const totalPrice = () => {
  totalAmountOfPrice.value = 0
  cartItems.value.forEach((obj) => (totalAmountOfPrice.value += obj.price * obj.qty))
}
totalPrice()

const increaseQuantity = (item: Object) => {
  const existingItemIndex = cartItems.value.findIndex((obj) => obj.id === item.id)

  if (existingItemIndex !== -1) {
    cartItems.value[existingItemIndex].qty++
  }
  totalPrice()
}

const decreaseQuantity = (item: Object) => {
  const existingItemIndex = cartItems.value.findIndex((obj) => obj.id === item.id)

  if (existingItemIndex !== -1 && cartItems.value[existingItemIndex].qty > 1) {
    cartItems.value[existingItemIndex].qty--
  }
  totalPrice()
}

const removeItemFromCartItems = (item: { id: number }) => {
  cartItems.value = cartItems.value.filter((obj) => obj.id !== item.id)
}
</script>
<template>
  <div class="page-heading" id="top">
    <section class="h-100 h-custom" style="background-color: #d2c9ff">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5">
                      <div class="d-flex justify-content-between align-items-center mb-5">
                        <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 class="mb-0 text-muted">{{ cartItems.length }} item(s)</h6>
                      </div>
                      <hr class="my-4" />

                      <div
                        v-for="(item, index) in cartItems"
                        :key="index"
                        class="row mb-4 d-flex justify-content-between align-items-center"
                      >
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            :src="item.thumbnail"
                            class="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">Shirt</h6>
                          <h6 class="text-black mb-0">{{ item.title }}</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <div class="quantity buttons_added">
                            <input
                              type="button"
                              @click="decreaseQuantity(item)"
                              value="-"
                              class="minus"
                            /><input
                              type="number"
                              step="1"
                              min="1"
                              max=""
                              name="quantity"
                              :value="item.qty"
                              title="Qty"
                              class="input-text qty text"
                              size="4"
                              pattern=""
                            /><input
                              type="button"
                              @click="increaseQuantity(item)"
                              value="+"
                              class="plus"
                            />
                          </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">${{ item.qty * item.price }}.00</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a class="text-muted" @click="removeItemFromCartItems(item)">
                            <i class="fa fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="pt-5">
                        <h6 class="mb-0">
                          <a href="#!" class="text-body"
                            ><i class="fa fa-long-arrow-alt-left me-2"></i>Back to shop</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bg-grey">
                    <div class="p-5">
                      <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">item(s) {{ cartItems.length }}</h5>
                        <h5>${{ totalAmountOfPrice }}.00</h5>
                      </div>

                      <h5 class="text-uppercase mb-3">Shipping</h5>

                      <div class="mb-4 pb-2">
                        <select class="select">
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <h5 class="text-uppercase mb-3">Give code</h5>

                      <div class="mb-5">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form3Examplea2">Enter your code</label>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-uppercase">Total price</h5>
                        <h5>${{ totalAmountOfPrice + 5 }}.00</h5>
                      </div>

                      <button
                        type="button"
                        class="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
