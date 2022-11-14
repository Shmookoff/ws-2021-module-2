<script lang="ts" setup>
import PromoCard from "@/components/PromoCard.vue";
import type { IPromoCard } from "@/components/PromoCard.vue";

const promoCards: IPromoCard[] = [
  {
    title: "Акция",
    description: "Получите скидку 10% на первый заказ",
    image: "https://api.lorem.space/image/car?hash=wfjnxmek",
    link: "/",
  },
  {
    title: "Акция",
    description: "Получите скидку 10% на первый заказ",
    image: "https://api.lorem.space/image/car?hash=1yki6omz",
    link: "/",
  },
  {
    title: "Акция",
    description: "Получите скидку 10% на первый заказ",
    image: "https://api.lorem.space/image/car?hash=s94klacw",
    link: "/",
  },
  {
    title: "Акция",
    description: "Получите скидку 10% на первый заказ",
    image: "https://api.lorem.space/image/car?hash=dyzyksnq",
    link: "/",
  },
];
</script>

<template>
  <section class="bg-gray-100">
    <div class="container-md mx-auto py-2 px-5 grid gap-y-5">
      <div class="text-gray-900 text-4xl font-bold">Акции</div>
      <div class="grid grid-cols-2 gap-5">
        <PromoCard v-for="promoCard in promoCards" :key="promoCard.title" v-bind="promoCard" />
      </div>
    </div>
  </section>
</template>