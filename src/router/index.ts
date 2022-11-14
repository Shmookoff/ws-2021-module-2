import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/Search/Search.vue"),
      props: true,
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("@/views/Booking/Booking.vue"),
    },
    {
      path: "/booking_management/:code",
      name: "booking_management",
      component: () => import("@/views/Booking/BookingManagement.vue"),
      props: true,
    },
    {
      path: "/seat/:bookingCode/:destination",
      name: "seat",
      component: () => import("@/views/Seat/Seat.vue"),
      props: true,
    },
  ],
});

export default router;
