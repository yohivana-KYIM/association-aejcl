import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; // Chemin vers Home.vue
import About from "@/components/frontend/About/About.vue"; // Chemin vers About.vue
import Events from "@/components/frontend/Events/Events.vue"; // Chemin vers Events.vue
import Join from '@/components/frontend/Join/join.vue';


// import Rules from "@/components/frontend/Rules/Rules.vue"; // Chemin vers Rules.vue

const routes = [
  { path: "/", component: Home }, // Route pour la page d'accueil
  { path: "/about", component: About }, // Route pour la page À propos
  { path: "/events", component: Events }, // Route pour la page Événements
  {
  path: '/join',
  name: 'Join',
  component: () => import('@/components/frontend/Join/Join.vue')
}
, // Route pour la page Rejoindre
  // { path: "/rules", component: Rules }, // Route pour la page Statuts et Règlement
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
