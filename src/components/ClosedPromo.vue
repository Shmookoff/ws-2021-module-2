<script lang="ts" setup>
export interface IClosedPromo {
  name: string;
  text: string;
}
defineProps<IClosedPromo>();
</script>
<template>
  <div class="bg-blue-500 text-gray-50 p-1 border border-blue-300">
    <div class="text-2xl w-fit mx-auto font-bold">{{ name }}</div>
    <div class="w-fit mx-auto">{{ text }}</div>
  </div>
</template>