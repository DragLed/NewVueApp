import GreetingComponent from '@/components/GreetingComponent.vue';
import HomePage from '@/components/HomePage.vue'; 
import MyToDoList from '@/components/My-to-do-list.vue';
import Buy_tikcets from '@/components/buy_tikcets.vue';
import Hotels from '@/components/HotelPage.vue';
import QUIK_Index from '@/components/QUIK_Index.vue';
import Restorants from '@/components/RestorantsPage.vue';
import Sales from '@/components/SalesList.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { path: '/', component: HomePage},
  { path: '/GreetingComponent', component: GreetingComponent, },
  { path: '/MyToDoList', component: MyToDoList},
  { path: '/QUIKSPB/sales', component: Sales},
  { path: '/QUIKSPB/hotels', component: Hotels},
  { path: '/QUIKSPB/restorant', component: Restorants},
  { path: '/QUIKSPB/tikets', component: Buy_tikcets},
  { path: '/QUIKSPB', component: QUIK_Index}


];

const router = createRouter({
  history: createWebHistory(), 
  routes, 
});

export default router;