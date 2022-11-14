<script lang="ts" setup>
import BookingHeader from "@/components/BookingHeader.vue";
import Value from "@/components/Value.vue";
import { computed, ref } from "vue";
import type { IReadBooking } from "./dto/Booking.dto";
import { BookingApi } from "./api/BookingApi";
import {
  bookingPassengerToBookingPassengerProps,
  flightToSearchResult,
} from "./utils";
import BookingFlightManagement from "@/components/Booking/BookingFlightManagement.vue";

export interface IBookingManagement {
  code: string;
}
const props = defineProps<IBookingManagement>();

const booking = ref<IReadBooking>();

const fetchBooking = async () => {
  const { data } = await BookingApi.getBooking(props.code);
  booking.value = data;
};
fetchBooking();

const preparePassengers = (destination: "from" | "back") => {
  const prepared = booking.value?.passengers.map((passenger) => {
    return bookingPassengerToBookingPassengerProps(passenger, destination);
  });
  return prepared ? prepared : [];
};

const passengersFrom = computed(() => {
  return preparePassengers("from");
});
const passengersBack = computed(() => {
  return preparePassengers("back");
});
</script>

<template>
  <BookingHeader :step="3" />
  <main v-if="booking" class="container-sm mx-auto my-10 grid gap-y-10">
    <div class="grid grid-cols-2 gap-3">
      <Value label="Код бронирования" :value="code" />
      <Value label="Стоимость бронирования" :value="booking.cost" />
    </div>
    <div class="flex flex-col gap-y-5">
      <BookingFlightManagement
        :flight="{
          title: 'Туда',
          searchResult: flightToSearchResult(booking.flights[0]),
        }"
        :passengers="passengersFrom"
      />
      <BookingFlightManagement
        v-if="booking.flights[1]"
        :flight="{
          title: 'Туда',
          searchResult: flightToSearchResult(booking.flights[1]),
        }"
        :passengers="passengersBack"
      />
    </div>
  </main>
</template>
