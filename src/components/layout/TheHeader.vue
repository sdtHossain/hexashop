<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const { cartItems } = storeToRefs(useCartStore())
</script>
<template>
  <div class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <router-link to="/" class="logo">
              <img src="@/assets/images/logo.png" />
            </router-link>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#men">Men's</a></li>
              <li class="scroll-to-section"><a href="#women">Women's</a></li>
              <li class="scroll-to-section"><a href="#kids">Kid's</a></li>
              <li class="submenu">
                <a href="javascript:;">Pages</a>
                <ul>
                  <li><a href="about.html">About Us</a></li>
                  <li>
                    <router-link :to="{ name: 'product' }" href="products.html"
                      >Products</router-link
                    >
                  </li>
                  <li><a href="single-product.html">Single Product</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:;">Features</a>
                <ul>
                  <li><a href="#">Features Page 1</a></li>
                  <li><a href="#">Features Page 2</a></li>
                  <li><a href="#">Features Page 3</a></li>
                  <li>
                    <a rel="nofollow" href="https://templatemo.com/page/4" target="_blank"
                      >Template Page 4</a
                    >
                  </li>
                </ul>
              </li>
              <li class="scroll-to-section"><a href="#explore">Explore</a></li>
              <li>
                <router-link :to="{ name: 'cartView' }">
                  <button type="button" class="btn btn-primary position-relative">
                    <i class="fa fa-shopping-cart"></i>
                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    >
                      {{ cartItems.length }}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </router-link>
              </li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
