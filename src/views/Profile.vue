<script lang="ts" setup>
import { InputField, InputButton } from "@/components/Input";
import Value from "@/components/Value.vue";
interface User {
  first_name: string;
  last_name: string;
  bookings: number;
  bonuses: number;
}
const user: User = {
  first_name: "John",
  last_name: "Doe",
  bookings: 10,
  bonuses: 600,
};
</script>
<template>
  <div class="h-screen bg-traffic-img">
    <div class="backdrop-blur-lg w-full h-full flex">
      <form class="grid gap-y-10 container-sm m-auto bg-gray-50 p-10">
        <div class="text-3xl font-bold">Мой профиль</div>
        <div class="grid grid-cols-2 gap-5">
          <InputField name="first_name" id="first_name" type="text" label="Имя" :value="user.first_name" />
          <InputField name="last_name" id="last_name" type="text" label="Фамилия" :value="user.last_name" />
          <Value label="Количество бронирований" :value="user.bookings" />
          <Value label="Количество бонусных баллов" :value="user.bonuses" />
        </div>
        <div class="grid grid-cols-2 gap-x-5">
          <InputButton type="submit">Сохранить</InputButton>
          <InputButton @click="() => $router.push({ name: 'home' })" variant="secondary">Выйти</InputButton>
        </div>
      </form>
    </div>
  </div>
</template>