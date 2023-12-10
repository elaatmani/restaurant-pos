<template>
  <div>
    <div 
        :class="['xl:tw-grid-cols-6 lg:tw-grid-cols-5 md:tw-grid-cols-3 sm:tw-grid-cols-3 tw-grid-cols-2 ']"
        class="tw-grid tw-gap-5 ">

            <!-- <MenuListItem :item="item" v-for="item in items" :key="item.id" /> -->

            <MenuListItem :menu="menu" v-for="menu in props.menus" :key="menu.id" />

      </div>


  </div>
</template>

<script setup>
import MenuListItem from './MenuListItem.vue';
import { ref, defineProps } from 'vue';

const props = defineProps({
    menus: {
        required: true,
        default: []
    }
});

console.log(props.menus)

const items = ref([
                {
                    id: 1,
                    name: 'Pizza',
                    image: 'assets/images/categories/pizza.jpeg',
                    menu_items: [
                        {id: 1, name: 'Margherita', price: 20, takeaway_price: 25},
                        {id: 2, name: 'Bolognaise', price: 20, takeaway_price: 25},
                        {id: 3, name: 'Frommage', price: 20, takeaway_price: 25},
                        {id: 4, name: '4 Saisons', price: 20, takeaway_price: 25},
                        {id: 5, name: 'Margherita', price: 20, takeaway_price: 25},
                        {id: 6, name: 'Bolognaise', price: 20, takeaway_price: 25},
                        {id: 7, name: 'Frommage', price: 20, takeaway_price: 25},
                        {id: 8, name: '4 Saisons', price: 20, takeaway_price: 25},
                        {id: 9, name: 'Margherita', price: 20, takeaway_price: 25},
                        {id: 10, name: 'Bolognaise', price: 20, takeaway_price: 25},
                        {id: 11, name: 'Frommage', price: 20, takeaway_price: 25},
                        {id: 12, name: '4 Saisons', price: 20, takeaway_price: 25},
                    ]
                },

                {
                    id: 2,
                    name: 'Tacos',
                    image: 'assets/images/categories/tacos.jpg',
                    menu_items: [
                        {id: 1, name: 'Poulet', price: 20, takeaway_price: 25},
                        {id: 2, name: 'Simple', price: 20, takeaway_price: 25},
                        {id: 3, name: 'Nuggets', price: 20, takeaway_price: 25},
                        {id: 4, name: 'Mixte', price: 20, takeaway_price: 25},
                    ]
                },

                {
                    id: 3,
                    name: 'Chawarma',
                    image: 'assets/images/categories/chawarma.jpg',
                    menu_items: []
                },

                {
                    id: 4,
                    name: 'Burger',
                    image: 'assets/images/categories/burger.jpg',
                    menu_items: []
                },

                {
                    id: 5,
                    name: 'Sandwich',
                    image: 'assets/images/categories/sandwich.jpg',
                    menu_items: []
                },

            ]);
items;
</script>

<style scoped>
</style>