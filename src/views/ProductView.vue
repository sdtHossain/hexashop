<script setup lang="ts">
const allProductsResp = await fetch('https://dummyjson.com/products')
const allProducts = await allProductsResp.json()
console.log(allProducts)
</script>
<template>
  <!-- ***** Main Banner Area Start ***** -->
  <div class="page-heading" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner-content">
            <h2>Check Our Products</h2>
            <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->

  <!-- ***** Products Area Starts ***** -->
  <section class="section" id="products">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Our Latest Products</h2>
            <span>Check out all of our products.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="item in allProducts.products" :key="item.id" class="col">
          <div class="card h-100 item border-0">
            <div class="thumb h-100">
              <div class="hover-content">
                <ul>
                  <li>
                    <router-link
                      :to="{
                        name: 'singleProduct',
                        params: { productName: item.title },
                        query: { prodId: item.id }
                      }"
                    >
                      <i class="fa fa-eye"></i>
                    </router-link>
                  </li>
                  <li>
                    <a href="single-product.html"><i class="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="single-product.html"><i class="fa fa-shopping-cart"></i></a>
                  </li>
                </ul>
              </div>
              <img :src="item.thumbnail" class="card-img-top h-100 object-fit-cover" alt="" />
            </div>
            <div class="down-content card-footer">
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
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="pagination">
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li class="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Products Area Ends ***** -->
</template>
<style scoped></style>
