<script lang="ts" setup>
export interface IValue {
  label: string;
  value: any;
  variant?: "primary" | "secondary";
  size?: "sm" | "base";
}

withDefaults(defineProps<IValue>(), {
  variant: "primary",
  size: "sm",
});
</script>

<template>
  <div>
    <div :class="{
      'text-gray-700': variant === 'primary',
      'text-gray-200': variant === 'secondary',
      'text-sm': size === 'sm',
      'text-base': size === 'base',
    }" class="text-sm">
      {{ label }}
    </div>
    <div :class="{
      'text-gray-900': variant === 'primary',
      'text-gray-50': variant === 'secondary',
      'text-lg': size === 'sm',
      'text-xl': size === 'base',
    }" class="font-bold">
      {{ value }}
    </div>
  </div>
</template>