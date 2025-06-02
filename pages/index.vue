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
    <div class="h-96 bg-slate-400 mx-auto">
      <P class="text-xl font-black"> Услуги</P>

      <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
    </div>

  </div>
</template>


<script setup>
import Button from 'primevue/button';
import { ref } from 'vue'
import InputText from 'primevue/inputtext'

const text = ref('')
</script>