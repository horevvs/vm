<template>

  <div class="">
    <div class=" h-72 font-medium">
      <H1 class="text-center text-5xl font-black ">IT-компания полного цикла:</H1>
      <H2 class="text-center text-5xl font-black leading-relaxed">разработка, дизайн и продвижение</H2>
      <div class="text-center flex justify-center mt-5 ">
        <H2 class="text-center text-xl "> Мы разрабатываем сайты и web-приложения, помогаем оцифровать ваши
          бизнес-процессы. <br>
          Мы работаем начиная с концепции вашего приложения до полного запуска и продвижения вашего продукта
        </H2>
      </div>
    </div>
    <div class="h-96 container mx-auto">
      Тут будет анимация
    </div>
    <hr class=" border-blue-300 border-1" />
    <div class="h-96mx-auto">
      <div class="text-xl flex justify-center font-black">
        <div class="container mt-2">Услуги</div>
      </div>
      <div class="flex justify-center">
        <div class="container">
          <Carousel class="my-12 px-12" :transition="1000" v-bind="carouselConfig">
            <Slide class="px-1" v-for="slide in store.images" :key="slide">
              <div class="h-72 w-72 rounded-3xl  bg-sky-200 shadow-xl">
                <img :src="slide.img" class="">
                <p class="mx-2 text-xl mt-2 font-bold ">{{ slide.type }}</p>
                <p class="mx-2 text-lg font-normal">{{ slide.long }}</p>
              </div>
            </Slide>
            <template #addons>
              <Navigation class="" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
    <hr class=" border-blue-300 border-1" />
    <div class=" mt-2 ">
      <div class="flex  container justify-center ">
        <div class="border-2  container  h-72">
          <div class="border-2 flex">
            <div>1</div>
            <div>2</div>
          </div>
          <div class="border-2"> 2</div>
        </div>
        <div class="border-2">весь спектр услуг</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCounterStore } from '@/store/store'
const store = useCounterStore()

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 4,
  wrapAround: true,
}

</script>
