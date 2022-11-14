<script lang="ts" setup>
import type { ISeat } from "./Seat.vue";
import type { ISeatPassenger } from "./SeatPassenger.vue";
import SeatRow from "./SeatRow.vue";

defineProps<{
  currentPassenger?: ISeatPassenger;
}>();

const generateSeats = (symbols: string[]) => {
  const seats = [];
  for (let i = 1; i <= 17; i++) {
    for (let j = 0; j < symbols.length; j++) {
      seats.push({
        plate: `${i}${symbols[j]}`,
      });
    }
  }
  return seats;
};

const seatsLeft: ISeat[] = generateSeats(["A", "B", "C"]);
const seatsRight: ISeat[] = generateSeats(["D", "E", "F"]);
</script>

<template>
  <div class="p-5 border-8 border-blue-500 bg-gray-200">
    <div class="grid grid-rows-2 gap-y-16">
      <SeatRow :seats="seatsLeft" />
      <SeatRow :seats="seatsRight" />
    </div>
  </div>
</template>
