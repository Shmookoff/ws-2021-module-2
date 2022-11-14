<script setup lang="ts">
import SearchResult, { type ISearchResult } from "../Search/SearchResult.vue";

export interface IFlight {
  title: string;
  searchResult: ISearchResult;
}
defineProps<IFlight>();
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <h2 class="text-2xl font-bold text-gray-700">{{ title }}</h2>
    <SearchResult v-bind="searchResult" />
  </div>
</template>
