<script lang="ts" setup>
export interface IReviewCard {
  name: string;
  city: string;
  avatar: string;
  text: string;
}
defineProps<IReviewCard>();
</script>

<template>
  <div class="
      text-gray-50
      bg-blue-500
      border border-blue-300
      hover:bg-blue-700
      p-5
    ">
    <div class="flex gap-x-2">
      <img :src="avatar" :alt="name" class="
          object-cover
          w-12
          h-12
          overflow-hidden
          rounded-full
          border-2 border-gray-50
        " />
      <div class="h-fit my-auto">
        <div>
          {{ name }}
        </div>
        <div class="text-sm text-gray-200">
          {{ city }}
        </div>
      </div>
    </div>
    <div class="mt-2 text-lg">
      {{ text }}
    </div>
  </div>
</template>