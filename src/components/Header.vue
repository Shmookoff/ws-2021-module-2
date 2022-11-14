<script lang="ts" setup>
import { InputButton } from "./Input";
</script>

<template>
  <header class="bg-gray-100">
    <div class="container flex justify-between py-2 px-5 mx-auto">
      <div class="flex gap-x-10 items-center text-gray-900">
        <RouterLink to="/" class="text-2xl font-bold">
          <img src="" alt="Logo" class="h-10 w-auto" />
        </RouterLink>
        <div class="flex gap-x-5 font-semibold">
          <a href="#promos">Акции</a>
        </div>
        <div class="flex gap-x-5 font-semibold">
          <a href="#search">Поиск</a>
        </div>
      </div>
      <div class="flex gap-x-2">
        <InputButton @click="() => $router.push({name: 'register'})" variant="secondary">Регистрация</InputButton>
        <InputButton @click="() => $router.push({name: 'login'})" variant="primary">Личный кабинет</InputButton>
      </div>
    </div>
  </header>
</template>