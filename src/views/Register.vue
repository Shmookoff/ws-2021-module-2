<script lang="ts" setup>
import SignPage from "@/components/SignPage.vue";
import { InputField, InputButton } from "@/components/Input";
</script>

<template>
  <SignPage>
    <div class="text-2xl font-bold">Регистрация</div>
    <form class="grid gap-y-6" @submit.prevent="() => $router.push({ name: 'login' })">
      <div class="grid gap-y-5">
        <div class="grid gap-x-2 grid-flow-col grid-cols-2">
          <InputField id="first_name" type="text" label="Имя" :required="true" />
          <InputField id="last_name" type="text" label="Фамилия" :required="true" />
        </div>
        <InputField id="driver_license" type="text" label="Номер водительского удостверения" :required="true" />
        <InputField id="phone" type="tel" label="Телефон" :required="true" />
        <InputField id="password" type="password" label="Пароль" :required="true" />
        <InputField id="password_check" type="password" label="Подтвердите пароль" :required="true" />
      </div>
      <InputButton type="submit">Зарегистироваться</InputButton>
    </form>
    <div class="mx-auto w-fit">
      Уже есть аккаунт?
      <RouterLink :to="{ name: 'login' }" class="text-blue-500">
        Войти
      </RouterLink>
    </div>
  </SignPage>
</template>