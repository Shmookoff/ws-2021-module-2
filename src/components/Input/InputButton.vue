<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "@vue/runtime-dom";

export interface IInputButton {
  type?: ButtonHTMLAttributes["type"];
  variant?: "primary" | "secondary";
}

withDefaults(defineProps<IInputButton>(), {
  variant: "primary",
});
</script>

<template>
  <button :type="type" class="focus:ring-4 font-semibold py-2 px-4 border" :class="{
    'text-gray-50 bg-blue-500  border-blue-300 hover:bg-blue-700 focus:ring-blue-300':
      variant === 'primary',
    'text-blue-500 bg-gray-50  border-gray-300 hover:bg-gray-200 focus:ring-gray-300':
      variant === 'secondary',
  }">
    <slot />
  </button>
</template>