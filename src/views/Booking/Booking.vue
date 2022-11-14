<script lang="ts" setup>
import BookingHeader from "@/components/BookingHeader.vue";
import { flightsConfirmedStore } from "@/stores/flightsConfirmed";
import Flight from "@/components/Booking/Flight.vue";
import Passenger, { type IPassenger } from "@/components/Booking/Passenger.vue";
import AddPassenger from "@/components/Booking/AddPassenger.vue";
import { ref } from "vue";
import { InputButton } from "@/components/Input";
import { searchStore } from "@/stores/search";
import { prepareFlight, preparePassenger } from "./utils";
import type { IBookingRequest } from "./dto/Booking.dto";
import { BookingApi } from "./api/BookingApi";
import router from "@/router";

const passengers = ref<IPassenger[]>([]);

const deletePassenger = (passenger: IPassenger) => {
  const passengerIndex = passengers.value.findIndex((p) => p === passenger);
  passengers.value = passengers.value.splice(passengerIndex);
};

const confirm = async () => {
  const prepared: IBookingRequest = {
    flight_from: prepareFlight(flightsConfirmedStore.value.data.to),
    passengers: passengers.value.map(preparePassenger),
  };
  if (flightsConfirmedStore.value.data.back) {
    prepared["flight_back"] = prepareFlight(
      flightsConfirmedStore.value.data.back
    );
  }

  const createdBooking = await BookingApi.createBooking(prepared);
  console.log({ createdBooking });
  router.push({
    name: "booking_management",
    params: { code: createdBooking.data.code },
  });
};
</script>

<template>
  <BookingHeader :step="2" />
  <main class="container-sm mx-auto my-10 grid gap-y-10">
    <div class="flex flex-col gap-y-5">
      <Flight title="Туда" :search-result="flightsConfirmedStore.data.to" />
      <Flight
        v-if="flightsConfirmedStore.data.back"
        title="Обратно"
        :search-result="flightsConfirmedStore.data.back"
      />
    </div>
    <div class="flex flex-col gap-y-5">
      <div class="text-2xl font-bold">Пассажиры</div>
      <div class="flex flex-col gap-y-2">
        <Passenger
          v-for="passenger in passengers"
          :key="passengers.indexOf(passenger)"
          v-bind="passenger"
          :can-delete="passengers.length > 1"
          @delete-passenger="deletePassenger"
        />
      </div>
      <AddPassenger
        @passenger-added="(passenger) => passengers.push(passenger)"
      />
    </div>
    <InputButton
      @click="confirm"
      v-if="searchStore.data.passengers === passengers.length"
      >Confirm</InputButton
    >
  </main>
</template>
