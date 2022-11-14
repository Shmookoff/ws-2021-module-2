<script lang="ts" setup>
import Value from "../Value.vue";

export interface IBookingPassenger {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  documentNumber: string;
  seat: string | null;
}
defineProps<IBookingPassenger>();
</script>

<template>
  <div class="relative grid grid-cols-4 p-2 gap-x-2 bg-gray-200 group">
    <Value label="Имя" :value="firstName" />
    <Value label="Фамилия" :value="lastName" />
    <Value
      label="Дата рождения"
      :value="new Date(dateOfBirth).toLocaleDateString()"
    />
    <Value label="Номер документа" :value="documentNumber" />
    <Value v-if="seat" label="Место" :value="seat" />
  </div>
</template>
