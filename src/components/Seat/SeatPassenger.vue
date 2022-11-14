<script lang="ts" setup>
import Value from "../Value.vue";

export interface ISeatPassenger {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  documentNumber: string;
  seat: string | null;
  chosen?: boolean;
}
withDefaults(defineProps<ISeatPassenger>(), {
  chosen: false,
});
</script>

<template>
  <div
    class="flex p-2 gap-x-2 bg-blue-500 border-4 border-blue-300 hover:bg-blue-700 hover:ring-2"
    :class="{ 'ring-4 ring-blue-300 ': chosen }"
  >
    <Value
      label="Имя"
      :value="firstName"
      variant="secondary"
      :size="chosen ? 'base' : 'sm'"
    />
    <Value
      label="Фамилия"
      :value="lastName"
      variant="secondary"
      :size="chosen ? 'base' : 'sm'"
    />
    <Value
      label="Дата рождения"
      :value="new Date(dateOfBirth).toLocaleDateString()"
      variant="secondary"
      :size="chosen ? 'base' : 'sm'"
    />
    <Value
      label="Номер документа"
      :value="documentNumber"
      variant="secondary"
      :size="chosen ? 'base' : 'sm'"
    />
    <Value
      v-if="seat"
      label="Место"
      :value="seat"
      variant="secondary"
      :size="chosen ? 'base' : 'sm'"
    />
  </div>
</template>
