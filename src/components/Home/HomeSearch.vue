<script lang="ts" setup>
import { updateSearchStore } from "@/stores/search";
import { InputButton, InputField } from "../Input";

const emits = defineEmits<{
  (e: "search-flights"): void;
}>();

const search = (event) => {
  const formData = Object.fromEntries(new FormData(event.target));
  console.log("submitted");
  updateSearchStore({
    flightFrom: formData.flightFrom.toString(),
    flightTo: formData.flightTo.toString(),
    departing: formData.departing.toString(),
    returning: formData.returning.toString(),
    passengers: Number(formData.passengers),
  });
  emits("search-flights");
};
</script>

<template>
  <div class="bg-blue-500 py-5">
    <div class="bg-gray-50 p-5 container-sm mx-auto grid gap-y-5">
      <div class="text-gray-900 font-bold text-2xl">Найди свою машину</div>
      <form class="grid gap-y-5" @submit.prevent="search">
        <div class="flex gap-x-2 justify-around">
          <InputField
            :required="true"
            id="flight-from"
            name="flightFrom"
            type="text"
            label="Откуда"
          />
          <InputField
            :required="true"
            id="flight-to"
            name="flightTo"
            type="text"
            label="Куда"
          />
          <InputField
            :required="true"
            id="departing"
            name="departing"
            type="date"
            label="Туда"
          />
          <InputField
            id="returning"
            name="returning"
            type="date"
            label="Обратно"
          />
          <InputField
            :required="true"
            id="passengers"
            name="passengers"
            type="number"
            min="1"
            max="8"
            label="Количество пассажиров"
          />
        </div>
        <InputButton class="w-full">Найти</InputButton>
      </form>
    </div>
  </div>
</template>
