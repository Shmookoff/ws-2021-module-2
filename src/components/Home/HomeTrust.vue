<script lang="ts" setup>
import ReviewCard from "@/components/ReviewCard.vue";
import type { IReviewCard } from "@/components/ReviewCard.vue";
const reviewCards: IReviewCard[] = [
  {
    name: "Иван Иванов",
    city: "Москва",
    avatar: "https://api.lorem.space/image/face?hash=vzlp1gve",
    text: "Excepteur dolor aliquip incididunt duis reprehenderit.",
  },
  {
    name: "Дмитрий Дмитриев",
    city: "Санкт-Петербург",
    avatar: "https://api.lorem.space/image/face?hash=dqxh796e",
    text: "Non excepteur quis minim dolor.",
  },
  {
    name: "Александр Александров",
    city: "Казань",
    avatar: "https://api.lorem.space/image/face?hash=csale6xn",
    text: "Consectetur est cillum velit commodo minim reprehenderit qui nulla.",
  },
  {
    name: "Алексей Алексеев",
    city: "Новосибирск",
    avatar: "https://api.lorem.space/image/face?hash=rbl0xe51",
    text: "Ut consectetur cillum in excepteur eiusmod officia eiusmod.",
  },
];
</script>
<template>
  <section class="bg-gray-100">
    <div class="container-md mx-auto py-2 px-5 grid gap-y-5">
      <div class="text-gray-900 font-bold text-4xl">Нам доверяют</div>
      <div class="grid grid-cols-2 gap-5">
        <ReviewCard v-for="reviewCard in reviewCards" :key="reviewCard.name" v-bind="reviewCard" />
      </div>
    </div>
  </section>
</template>