<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

const myswiper = ref()
const onSwiper = (swiper: any) => {
  myswiper.value = swiper
}
</script>
<template>
  <section class="section" id="kids">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>Kid's Latest</h2>
            <span>Details to details is what makes Hexashop different from the other themes.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <swiper
            :slides-per-view="3"
            :space-between="50"
            :modules="[Navigation]"
            navigation
            :scrollbar="{ hide: true }"
            class="mySwiper"
            @swiper="onSwiper"
          >
            <swiper-slide>
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
                  <img src="@/assets/images/kid-01.jpg" class="img-fluid w-100" alt="" />
                </div>
                <div class="down-content">
                  <h4>School Collection</h4>
                  <span>$80.00</span>
                  <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
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
                  <img src="@/assets/images/kid-02.jpg" class="img-fluid w-100" alt="" />
                </div>
                <div class="down-content">
                  <h4>Summer Cap</h4>
                  <span>$12.00</span>
                  <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
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
                  <img src="@/assets/images/kid-03.jpg" class="img-fluid w-100" alt="" />
                </div>
                <div class="down-content">
                  <h4>Classic Kid</h4>
                  <span>$30.00</span>
                  <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
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
                  <img src="@/assets/images/kid-01.jpg" alt="" />
                </div>
                <div class="down-content">
                  <h4>Classic Spring</h4>
                  <span>$120.00</span>
                  <ul class="stars">
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
