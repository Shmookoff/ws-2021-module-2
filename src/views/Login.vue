<script lang="ts" setup>
import SignPage from "@/components/SignPage.vue";
import { InputField, InputButton } from "@/components/Input";
</script>

<template>
  <SignPage>
    <div class="text-2xl font-bold">Вход</div>
    <form class="grid gap-y-6" @submit.prevent="() => $router.push({ name: 'profile' })">
      <div class="grid gap-y-5">
        <InputField id="phone" type="tel" label="Телефон" :required="true" />
        <InputField id="password" type="password" label="Пароль" :required="true" />
      </div>
      <InputButton type="submit">Войти</InputButton>
    </form>
    <div class="mx-auto w-fit">
      Нет аккаунта?
      <RouterLink :to="{ name: 'register' }" class="text-blue-500">
        Зарегистироваться
      </RouterLink>
    </div>
  </SignPage>
</template>