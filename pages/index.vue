<template>

  <div class="">
    <div class=" bg-slate-100 h-72 font-medium">
      <H1 class="text-center text-5xl font-black ">IT-компания полного цикла:</H1>
      <H2 class="text-center text-5xl font-black leading-relaxed">разработка, дизайн и продвижение</H2>
      <div class="text-center flex justify-center mt-5 ">
        <H2 class="text-center text-xl "> Мы разрабатываем сайты и web-приложения, помогаем оцифровать ваши
          бизнес-процессы. <br>
          Мы работаем начиная с концепции вашего приложения до полного запуска и продвижения вашего продукта
        </H2>
      </div>
    </div>
    <div class="h-96 container   bg-slate-300 mx-auto">
      Тут будет анимация
    </div>

    <div class="h-96 bg-slate-100 mx-auto ">
      <div class="text-xl flex justify-center font-black">
        <div class=" container ">Услуги</div>
      </div>
      <div class="flex justify-center">
        <div class="container bg-slate-100">
          <Carousel class="mt-5 px-12" :transition="1000" v-bind="carouselConfig">
            <Slide class="  px-1" v-for="slide in store.images" :key="slide">
              <div class="h-72 w-72 bg-blue-100 rounded-3xl">
                <img :src="slide.img" class="rounded-t-3xl">
                <p class="mx-2 text-xl mt-2 font-bold ">{{ slide.type }}</p>
                <p class="mx-2 text-lg font-normal">{{ slide.long }}</p>
              </div>
            </Slide>
            <template #addons>
              <Navigation class="bg-slate-300" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
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
