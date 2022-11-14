<script lang="ts" setup>
export interface IBookingHeader {
  step: number;
}
defineProps<IBookingHeader>();
</script>

<template>
  <header class="bg-blue-600 text-gray-50">
    <div class="container py-2 px-5 mx-auto flex gap-x-10">
      <RouterLink to="/" class="text-2xl font-bold">
        <img src="" alt="Logo" class="h-10 w-auto" />
      </RouterLink>
      <div class="grid grid-cols-3 px-16 grow">
        <div :class="{ 'font-bold': step === 1 }" class="flex items-center">
          <div class="min-w-fit mr-1">Выбор бронирования</div>
          <div class="grow bg-gray-200 h-0.5 rounded-sm"></div>
        </div>
        <div :class="{ 'font-bold': step === 2 }" class="flex items-center">
          <div class="grow bg-gray-200 h-0.5 rounded-sm"></div>
          <div class="min-w-fit mx-1">Подтверждение</div>
          <div class="grow bg-gray-200 h-0.5 rounded-sm"></div>
        </div>
        <div :class="{ 'font-bold': step === 3 }" class="flex items-center">
          <div class="grow bg-gray-200 h-0.5 rounded-sm"></div>
          <div class="min-w-fit mx-1">Выбор автомобиля</div>
        </div>
      </div>
    </div>
  </header>
</template>