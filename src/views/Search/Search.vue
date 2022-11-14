<script lang="ts" setup>
import { ref, watchEffect } from "vue";

import BookingHeader from "@/components/BookingHeader.vue";
import { HomeSearch } from "@/components/Home";
import type { ISearchResult } from "@/components/Search/SearchResult.vue";

import { getSearchResults } from "./utils";
import { searchStore } from "@/stores/search";
import SearchResultPicker from "@/components/Search/SearchResultPicker.vue";
import { InputButton } from "@/components/Input";
import { flightsStore, resetFlightsStore } from "@/stores/flights";
import {
  flightsConfirmedStore,
  type IFlightsConfirmedStore,
} from "@/stores/flightsConfirmed";
import router from "@/router";

const searchResults = ref<{ to: ISearchResult[]; back: ISearchResult[] }>({
  to: [],
  back: [],
});

watchEffect(async () => {
  if (searchStore.value.data) {
    searchResults.value = await getSearchResults(searchStore.value.data);
  }
  resetFlightsStore();
});

const proceedBooking = () => {
  const bookingConfirmedData = flightsStore.value as IFlightsConfirmedStore;
  flightsConfirmedStore.value.data = bookingConfirmedData;
  router.push({ name: "booking" });
};
</script>

<template>
  <div class="flex flex-col">
    <BookingHeader :step="1" />
    <HomeSearch />
    <main class="flex flex-col gap-y-10 container-md my-10 mx-auto">
      <SearchResultPicker :to="searchResults.to" :back="searchResults.back" />
      <InputButton
        class="w-full"
        v-if="
          flightsStore.to && (flightsStore.back || !searchStore.data?.returning)
        "
        @click="proceedBooking"
        >Go to booking</InputButton
      >
    </main>
  </div>
</template>
