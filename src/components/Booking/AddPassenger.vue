<script lang="ts" setup>
import { ref } from "vue";
import { InputField, InputButton } from "@/components/Input";
import type { IPassenger } from "./Passenger.vue";

const isAdding = ref(false);

const newPassenger = ref<Partial<IPassenger>>({});

const emits = defineEmits<{
  (e: "passenger-added", passenger: IPassenger): void;
}>();

const onConfirm = () => {
  emits("passenger-added", newPassenger.value as IPassenger);
  isAdding.value = false;
  newPassenger.value = {};
};
</script>

<template>
  <div>
    <InputButton class="w-full" v-if="!isAdding" @click="isAdding = true">
      Add passenger
    </InputButton>
    <div v-else class="bg-gray-50">
      <form
        class="container-xs mx-auto py-10 grid gap-y-5"
        @submit.prevent="onConfirm"
      >
        <div class="grid grid-cols-2 gap-3">
          <InputField
            type="text"
            id="firstName"
            :required="true"
            label="Имя"
            v-model="newPassenger.firstName"
          />
          <InputField
            type="text"
            id="lastName"
            :required="true"
            label="Фамилия"
            v-model="newPassenger.lastName"
          />
          <InputField
            type="date"
            id="dateOfBirth"
            :required="true"
            label="Дата рождения"
            v-model="newPassenger.dateOfBirth"
          />
          <InputField
            type="text"
            id="documentNumber"
            :required="true"
            label="Номер документа"
            v-model="newPassenger.documentNumber"
          />
        </div>
        <InputButton type="submit">Confirm</InputButton>
      </form>
    </div>
  </div>
</template>
