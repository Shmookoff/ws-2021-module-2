<script setup lang="ts">
import ClosedPromo from "@/components/ClosedPromo.vue";
import type { IClosedPromo } from "@/components/ClosedPromo.vue";
import { InputField, InputButton } from "@/components/Input";
const closedPromos: IClosedPromo[] = [
  {
    name: "- 10%",
    text: "за подписку",
  },
  {
    name: "- 50%",
    text: "на первый заказ",
  },
  {
    name: "+ 500₽",
    text: "за друга",
  },
];
</script>
<template>
  <section class="bg-blue-500">
    <div class="
        container-md
        mx-auto
        my-5
        p-5
        bg-gray-100
        grid grid-flow-col grid-cols-2
        gap-x-5
      ">
      <div class="grid gap-y-2">
        <div class="text-gray-900 font-bold text-2xl">Закрытые акции</div>
        <div class="text-gray-900 text-lg">Только твои акции, например:</div>
        <div class="grid grid-flow-col grid-cols-3 gap-x-1">
          <ClosedPromo v-for="closedPromo in closedPromos" :key="closedPromo.name" v-bind="closedPromo" />
        </div>
      </div>
      <div class="h-fit my-auto">
        <form action="" class="grid gap-y-2">
          <InputField type="email" id="email" label="Электронная почта" :required="true" />
          <InputButton type="submit">Подписаться</InputButton>
        </form>
      </div>
    </div>
  </section>
</template>