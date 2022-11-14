<script setup lang="ts">
import Flight, { type IFlight } from "./Flight.vue";

import BookingPassenger, {
  type IBookingPassenger,
} from "./BookingPassenger.vue";
import { InputButton } from "../Input";

export interface IBookingFlightManagement {
  flight: IFlight;
  passengers: IBookingPassenger[];
}
defineProps<IBookingFlightManagement>();
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <Flight v-bind="flight" />
    <div class="flex flex-col gap-y-4">
      <div class="font-semibold text-xl">Пассажиры</div>
      <div class="flex flex-col gap-y-2">
        <BookingPassenger
          v-for="passenger in passengers"
          :key="passenger.id"
          v-bind="passenger"
        />
      </div>
      <InputButton>Select seats</InputButton>
    </div>
  </div>
</template>
