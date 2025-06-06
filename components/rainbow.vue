<template>
    <div class=" relative flex flex-col items-center my-24 text-gray-50">
        <div class="semi-circle bg-blue-400"></div>
        <div class="semi-circle2  bg-blue-200 -mt-33"></div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl top-0  left-34 ">Анализ</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl top-5  right-1 ">Техническое задание</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl left-5 top-17">Дизайн</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl -right-18 top-25">Проектирование</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl -left-15 bottom-5">Разработка</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl left-20 bottom-20">Реализация</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl right-10 bottom-15">Сопровождение</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl left-25 bottom-1">Поддержка</div>
        <div class=" absolute px-3 p-1 text-xl  bg-slate-600  rounded-xl -right-20 bottom-2">Тестирование</div>
    </div>
</template>

<style>
.semi-circle {
    width: 550px;
    /* ширина */
    height: 275px;
    /* высота, половина ширины для полукруга */

    /* цвет заливки */
    border-top-left-radius: 275px;
    /* скругление левого верхнего угла */
    border-top-right-radius: 275px;
    /* скругление правого верхнего угла */
}

.semi-circle2 {
    width: 270px;
    /* ширина */
    height: 135px;
    border-top-left-radius: 135px;
    /* скругление левого верхнего угла */
    border-top-right-radius: 135px;
    /* скругление правого верхнего угла */
    overflow: hidden;
    /* скрыть лишнее, если нужно */
}

/*  */
</style>
