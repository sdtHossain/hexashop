<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

const myswiper = ref()
const onSwiper = (swiper: any) => {
  myswiper.value = swiper
}

const mensCategoriesResp = await fetch('https://dummyjson.com/products/category/mens-shirts')
const mensShirts = await mensCategoriesResp.json()
</script>
<template>
  <section class="section" id="men">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>Men's Latest</h2>
            <span>Details to details is what makes Hexashop different from the other themes.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <swiper
            :slides-per-view="4"
            :space-between="50"
            :modules="[Navigation]"
            navigation
            :scrollbar="{ hide: true }"
            class="mySwiper"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="(product, index) in mensShirts.products" :key="index">
              <div class="item">
                <div class="thumb">
                  <div class="hover-content">
                    <ul>
                      <li>
                        <a href="single-product.html"><i class="fa fa-eye"></i></a>
                      </li>
                      <li>
                        <a href="single-product.html"><i class="fa fa-star"></i></a>
                      </li>
                      <li>
                        <a href="single-product.html"><i class="fa fa-shopping-cart"></i></a>
                      </li>
                    </ul>
                  </div>
                  <img :src="product.thumbnail" class="img-fluid" alt="" />
                </div>
                <div class="down-content d-flex">
                  <div>
                    <h4>{{ product.title }}</h4>
                    <span>${{ product.price }}.00</span>
                  </div>
                  <ul class="stars d-flex">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
