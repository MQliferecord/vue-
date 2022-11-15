<template>
  <div class="swiper-container" ref="floorSwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in list.carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    reqfloor: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var floorSwiper = new Swiper(this.$refs.floorSwiper, {
            direction: "",
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            scrollbar: {
              el: ".swiper-scollbar",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>