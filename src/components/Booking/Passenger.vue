<script lang="ts" setup>
import Value from "../Value.vue";
import { InputButton } from "../Input";

export interface IPassenger {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  documentNumber: string;
  canDelete?: boolean;
}
withDefaults(defineProps<IPassenger>(), {
  canDelete: false,
});

defineEmits<{ (e: "delete-passenger", passenger: IPassenger): void }>();
</script>

<template>
  <div class="relative grid grid-cols-4 p-2 gap-x-2 bg-gray-200 group">
    <Value label="Имя" :value="firstName" />
    <Value label="Фамилия" :value="lastName" />
    <Value label="Дата рождения" :value="dateOfBirth" />
    <Value label="Номер документа" :value="documentNumber" />
    <InputButton
      v-if="canDelete"
      @click="$emit('delete-passenger', $props)"
      class="absolute right-0 hidden group-hover:block"
      variant="secondary"
      >Удалить</InputButton
    >
  </div>
</template>
