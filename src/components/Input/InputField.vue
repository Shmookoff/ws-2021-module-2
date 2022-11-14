<script lang="ts" setup>
export interface IInputField {
  required?: boolean;
  id: string;
  name?: string;
  type: string;
  label?: string;
  modelValue?: any;
}

interface IInputFieldEmits {
  (e: "update:modelValue", value: any): void;
}

defineProps<IInputField>();
defineEmits<IInputFieldEmits>();
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label v-if="label" :for="id" class="text-sm text-gray-700">
      {{ label }}
    </label>
    <div class="flex">
      <input
        :id="id"
        :name="name"
        :type="type"
        :required="required"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:outline-none w-full p-2"
      />
    </div>
  </div>
</template>
