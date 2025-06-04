import { defineStore } from 'pinia'

export const useCounterStore = defineStore('mystore', {
    state: () => ({
        images: [
            {
                img: '/images/1.png',
                type: 'Сайты и сервисы',
                long: '3-12 недель',
            },
            {
                img: '/images/2.png',
                type: 'Разработка на Tilda',
                long: '3-12 недель',
            },
            {
                img: '/images/3.png',
                type: 'Мобильные приложения',
                long: '2-4 недели',
            },
            {
                img: '/images/4.png',
                type: 'Чат-боты',
                long: '2-4 недели',
            },
            {
                img: '/images/5.png',
                type: 'Техническая поддержка',
                long: '2-4 недели',
            },
            {
                img: '/images/6.png',
                type: 'Доработка и обновление',
                long: 'по договоренности',
            },
            {
                img: '/images/7.png',
                type: 'SMM',
                long: '1-2 недели',
            },
            {
                img: '/images/8.png',
                type: 'Маркетинг',
                long: '1-2 недели',
            },
            {
                img: '/images/9.png',
                type: 'Айдентика',
                long: 'UI/UX дизайн',
            }
        ]
    }),
})