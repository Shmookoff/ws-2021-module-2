<script lang="ts" setup>
import { InputButton } from "@/components/Input";

export interface IPromoCard {
  title: string;
  description: string;
  image: string;
  link: string;
}
defineProps<IPromoCard>();
</script>

<template>
  <div class="flex bg-blue-500 text-gray-50 border-4 border-blue-300 group">
    <div class="w-32 h-52 group-hover:w-48">
      <img :src="image" alt="link" class="w-full h-full object-cover" />
    </div>
    <div class="p-5 grow flex flex-col justify-between">
      <div>
        <div class="text-2xl font-semibold">{{ title }}</div>
        <div class="">{{ description }}</div>
      </div>
      <div class="self-end justify-self-end">
        <InputButton @click="() => $router.push(link)" variant="secondary">Подробнее</InputButton>
      </div>
    </div>
  </div>
</template>