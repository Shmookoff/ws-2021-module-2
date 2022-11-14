<script lang="ts" setup>
import Seat, { type ISeat } from "./Seat.vue";

export interface ISeatRow {
  seats: ISeat[];
}
defineProps<ISeatRow>();
</script>

<template>
  <div class="h-fit grid grid-cols-25 grid-rows-3 grid-flow-col bg-gray-200">
    <Seat
      class="bg-gray-50"
      v-for="seat in seats"
      :key="seat.plate"
      v-bind="seat"
    />
  </div>
</template>
