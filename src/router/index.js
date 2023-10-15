import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Films from "@/views/Films.vue";
import People from "@/views/People.vue";
import Planets from "@/views/Planets.vue";
import Species from "@/views/Species.vue";
import Starships from "@/views/Starships.vue";
import Vehicles from "@/views/Vehicles.vue";
import CurrentPerson from "@/views/CurrentPerson.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/films",
    name: "films",
    component: Films,
  },
  {
    path: "/people",
    name: "people",
    component: People,
  },
  {
    path: "/planets",
    name: "planets",
    component: Planets,
  },
  {
    path: "/species",
    name: "species",
    component: Species,
  },
  {
    path: "/starships",
    name: "starships",
    component: Starships,
  },
  {
    path: "/vehicles",
    name: "vehicles",
    component: Vehicles,
  },
  {
    path: "/people/:idx",
    name: "person",
    component: CurrentPerson,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
