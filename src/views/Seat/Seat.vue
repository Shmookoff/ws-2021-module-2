<script lang="ts" setup>
import BookingHeader from "@/components/BookingHeader.vue";
import Seats from "@/components/Seat/Seats.vue";
import { InputButton } from "@/components/Input";
import { computed, ref } from "vue";
import type { IReadBooking } from "../Booking/dto/Booking.dto";
import { BookingApi } from "../Booking/api/BookingApi";
import { bookingPassengerToBookingPassengerProps } from "../Booking/utils";
import SeatPassengers from "@/components/Seat/SeatPassengers.vue";
import router from "@/router";
export interface ISeatManagement {
  bookingCode: string;
  destination: "from" | "back";
}
const props = defineProps<ISeatManagement>();

const booking = ref<IReadBooking>();
const fetchBooking = async () => {
  const { data } = await BookingApi.getBooking(props.bookingCode);
  booking.value = data;
};
fetchBooking();

const passengers = computed(() => {
  const prepared = booking.value?.passengers.map((passenger) => {
    return bookingPassengerToBookingPassengerProps(
      passenger,
      props.destination
    );
  });
  return prepared ? prepared : [];
});

const goBack = () => {
  router.push({
    name: "booking_management",
    params: {
      code: props.bookingCode,
    },
  });
};
</script>

<template>
  <div class="h-screen flex flex-col">
    <BookingHeader :step="3" />
    <div class="container-md m-auto flex flex-col gap-y-10">
      <div class="flex justify-evenly">
        <Seats />
        <SeatPassengers :passengers="passengers" />
      </div>
      <div class="flex gap-x-5">
        <InputButton class="w-full" variant="secondary" @click="goBack"
          >Back</InputButton
        >
        <InputButton class="w-full">Confirm</InputButton>
      </div>
    </div>
  </div>
</template>
