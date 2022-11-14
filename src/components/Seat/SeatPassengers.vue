<script lang="ts" setup>
import SeatPassenger, { type ISeatPassenger } from "./SeatPassenger.vue";
import { seatStore } from "@/stores/seat";

export interface ISeatPassengers {
  passengers: ISeatPassenger[];
}
defineProps<ISeatPassengers>();

const passengerClicked = (passenger: ISeatPassenger) => {
  passenger.chosen = !passenger.chosen;
  seatStore.value.currentPassenger = passenger.chosen ? passenger : undefined;
};
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <SeatPassenger
      v-for="passenger in seatStore.currentPassenger
        ? [seatStore.currentPassenger]
        : passengers"
      :key="passenger.id"
      v-bind="passenger"
      @click="passengerClicked(passenger)"
    />
  </div>
</template>
