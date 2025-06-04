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
    <div class="h-96  container-xl bg-slate-300 mx-auto">
      Тут будет анимация
    </div>

    <div class="h-96 bg-slate-100 mx-auto ">
      <div class="text-xl font-black flex container-xl">
        <p class="">Услуги</p>
      </div>
      <div class=" flex justify-center">
        <div class="w-1/2 ">
          <Carousel class="mt-12 px-12" :transition="1000" v-bind="carouselConfig">
            <Slide class=" " v-for="slide in store.images" :key="slide">
              <div class="h-72 w-72 bg-blue-300 rounded-3xl">
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
      <div class="bg-red-300 h-80">Какой-то блок</div>
    </div>

  </div>
</template>


<script setup>
import { useCounterStore } from '@/store/store'
const store = useCounterStore()

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 3,
  wrapAround: true,
}

</script>
