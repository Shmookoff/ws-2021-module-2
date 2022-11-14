<script lang="ts" setup>
export interface IInputSelect {
  id: string;
  name: string;
  label?: string;
  options: string[];
  variant?: "primary" | "secondary";
  modelValue: string;
}
withDefaults(defineProps<IInputSelect>(), {
  variant: "secondary",
});

const emit = defineEmits(["update:modelValue"]);

const updateModelValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>
<template>
  <div>
    <label v-if="label" :for="id"></label>
    <select :value="modelValue" @input="updateModelValue" :name="name" :id="id" :class="{
      'text-gray-50 bg-blue-500 border-blue-300 focus:ring-blue-300':
        variant === 'primary',
      'text-gray-900 bg-gray-50 border-gray-300 focus:ring-gray-300':
        variant === 'secondary',
    }" class="w-full p-2 border focus:ring-2">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>